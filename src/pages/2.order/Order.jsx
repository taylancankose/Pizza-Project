import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Header from "../../components/header/Header";
import Details from "../../components/details/Details";
import PizzaSize from "../../components/pizzaSize/PizzaSize";
import DoughSize from "../../components/doughSize/DoughSize";
import Ingredients from "../../components/ingredients/Ingredients";
import InputForm from "../../components/inputForm/InputForm";
import BasketAmount from "../../components/basketAmount/BasketAmount";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import ButtonComp from "../../components/buttonComp/ButtonComp";
import Footer from "../../components/footer/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import ApiService from "../../services/apiService";

function Order() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (data === null) return <Navigate to="/error" replace />;

  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    amount: 1,
    name: "",
    ingredients: [],
    size: "",
    price: 0,
    ingredientsPrice: 0,
    doughSize: "",
    pizzaName: data.name,
    notes: "",
    type: data.category,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "boyut":
        return setOrderDetails({ ...orderDetails, size: value });
      case "hamur":
        return setOrderDetails({ ...orderDetails, doughSize: value });
      case "ingredient":
        if (orderDetails.ingredients.includes(value)) {
          return setOrderDetails({
            ...orderDetails,
            ingredients: orderDetails.ingredients.filter(
              (item) => item !== value
            ),
          });
        } else {
          return setOrderDetails({
            ...orderDetails,
            ingredients: [...orderDetails.ingredients, value],
          });
        }
      case "name":
        return setOrderDetails({ ...orderDetails, [name]: value });
      case "notes":
        return setOrderDetails({ ...orderDetails, [name]: value });
      case "decrease":
        return setOrderDetails({
          ...orderDetails,
          amount: orderDetails.amount - 1,
        });
      case "increase":
        return setOrderDetails({
          ...orderDetails,
          amount: orderDetails.amount + 1,
        });
      default:
        break;
    }
  };
  const { size, amount, ingredients } = orderDetails;
  const calculatePrice = () => {
    let pizzaPrice = data.price;
    if (orderDetails.size === "s") {
      pizzaPrice = pizzaPrice;
    } else if (orderDetails.size === "m") {
      pizzaPrice = pizzaPrice * 1.5;
    } else if (orderDetails.size === "l") {
      pizzaPrice = pizzaPrice * 2;
    }

    const ingredientsPrice =
      Number(orderDetails.ingredients.length) * 5 * orderDetails.amount;
    const totalPrice = (pizzaPrice + ingredientsPrice) * orderDetails.amount;

    setOrderDetails({
      ...orderDetails,
      price: totalPrice,
      ingredientsPrice: ingredientsPrice,
    });
  };
  useEffect(() => {
    calculatePrice();
  }, [size, amount, ingredients]);
  const handleOrder = async (e) => {
    e.preventDefault();
    if (
      orderDetails.name.length < 4 ||
      orderDetails.ingredients.length < 5 ||
      orderDetails.ingredients.length > 10 ||
      (orderDetails.type === "Pizza" && orderDetails.doughSize === "")
    ) {
      toast.error("Eksik bilgi!", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success(
        `${orderDetails.name}, ${
          orderDetails.amount
        } adet ${orderDetails.ingredients.map(
          (item) => item
        )} malzemelerinden oluşan ${
          orderDetails.pizzaName
        } 🍕 siparişin başarılya verilmiştir! ✨✨ Afiyet olsun 😋😊`
      );
      try {
        setLoading(true);
        const data = await ApiService.orderFood(orderDetails);
        console.log(data);
        setLoading(false);
        navigate("/success", {
          state: data.data,
        });
      } catch (error) {
        toast.error(error, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        console.log(error);
      }
    }
  };
  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <ClipLoader
          color={"#CE2829"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  return (
    <div className="font-barlow">
      {/* Header */}
      <Header />
      {/* First Page */}
      <div className="bg-myBeige pb-6">
        <div className="mx-auto xl:w-4/12 md:w-8/12">
          <img src="../../../Assets/mile2-aseets/pictures/form-banner.png" />
          <nav className="flex gap-1 mt-4 text-myLightGray font-medium py-10">
            <Link to={"/"}>Anasayfa</Link>
            <span>-</span>
            <Link className="font-bold text-myRed pointer-events-none">
              Sipariş Oluştur
            </Link>
          </nav>
          <Details orderDetails={orderDetails} data={data} />
        </div>
      </div>
      {/* Rest */}
      <div>
        <div className="mx-auto xl:w-4/12 md:w-8/12">
          {/* Boyut + Hamur */}
          <div className="flex flex-wrap mx-4 md:mx-0 py-10 justify-between ">
            {/* Boyut */}
            <PizzaSize
              handleSelectSize={handleChange}
              orderDetails={orderDetails.size}
            />
            {/* Hamur */}
            {orderDetails.type === "Pizza" && (
              <DoughSize
                doughSize={orderDetails.doughSize}
                handleSelectDoughSize={handleChange}
              />
            )}
          </div>

          {/* Malzemeler */}
          <Ingredients
            ingredients={orderDetails.ingredients}
            handleSelectIngredient={handleChange}
          />

          {/* Adım */}
          <InputForm
            name="name"
            value={orderDetails.name}
            type="input"
            labelTitle="Adım"
            handleChange={handleChange}
            placeholder="Siparişini tamamlamak için adını girmelisin"
          />

          {/* Notlar */}
          <InputForm
            name="notes"
            type="text-area"
            value={orderDetails.notes}
            labelTitle="Sipariş Notu"
            handleChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />

          {/* Sipariş Özeti */}
          <div className="grid md:grid-cols-3 grid-cols-1 py-10 m-auto">
            {/* Sepet */}
            <BasketAmount
              handleDecreaseAmount={handleChange}
              handleIncreaseAmount={handleChange}
              orderDetails={orderDetails}
            />
            {/* Sipariş Toplamı */}
            <div className="md:w-96 h-60  bg-myBeige rounded-md flex relative items-center justify-center mb-10">
              <OrderSummary
                data={orderDetails}
                className={"w-full m-10 mb-14"}
                textColor={"text-myRed"}
                textColor2={"text-myDarkGray"}
              />
              <ButtonComp
                dataCy="order-btn"
                containerClass={
                  "bg-myYellow rounded-b-md justify-center items-center absolute bottom-0 w-full h-1/4"
                }
                className={
                  "text-myDarkGray text-lg font-semibold w-full h-full"
                }
                onClick={handleOrder}
                disabled={
                  orderDetails.name.length < 4 ||
                  orderDetails.ingredients.length < 5 ||
                  orderDetails.ingredients.length > 10 ||
                  (orderDetails.type === "Pizza" &&
                    orderDetails.doughSize === "")
                }
                title={"SİPARİŞ VER"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Order;
