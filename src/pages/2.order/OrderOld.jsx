import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function Order() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    amount: 1,
    name: "",
    ingredients: [],
    size: "",
    price: 0,
    ingredientsPrice: 0,
    doughSize: "",
    pizzaName: "Position Absolute Acı Pizza",
    notes: "",
  });
  const handleIncreaseAmount = (e) => {
    e.preventDefault();
    setOrderDetails({ ...orderDetails, amount: orderDetails.amount + 1 });
  };
  const handleDecreaseAmount = (e) => {
    e.preventDefault();
    setOrderDetails({ ...orderDetails, amount: orderDetails.amount - 1 });
  };
  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };
  const handleSelectSize = (e) => {
    setOrderDetails({ ...orderDetails, size: e.target.value });
  };
  const handleSelectDoughSize = (e) => {
    setOrderDetails({ ...orderDetails, doughSize: e.target.value });
  };
  const handleSelectIngredient = (e) => {
    const ingredient = e.target.value;
    if (orderDetails.ingredients.includes(ingredient)) {
      setOrderDetails({
        ...orderDetails,
        ingredients: orderDetails.ingredients.filter(
          (item) => item !== ingredient
        ),
      });
    } else {
      setOrderDetails({
        ...orderDetails,
        ingredients: [...orderDetails.ingredients, e.target.value],
      });
    }
  };

  const { size, amount, ingredients } = orderDetails;
  const calculatePrice = () => {
    let pizzaPrice = 0;
    if (orderDetails.size === "küçük") {
      pizzaPrice = 85.5;
    } else if (orderDetails.size === "orta") {
      pizzaPrice = 128.5;
    } else if (orderDetails.size === "büyük") {
      pizzaPrice = 170.5;
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
      orderDetails.doughSize === ""
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
        const data = await axios.post(import.meta.env.VITE_APP_BASE_URL, {
          orderDetails,
        });
        setLoading(false);
        navigate("/success", {
          state: data.data,
        });
      } catch (error) {
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
    <form className="font-barlow" onSubmit={handleOrder}>
      {/* Header */}
      <Header />
      {/* Content */}
      <div className="p-5">
        <div className="mx-auto xl:w-4/12 md:w-8/12 py-5">
          <Details orderDetails={orderDetails} />

          {/* Boyut + Hamur */}
          <div className="flex py-10 justify-between md:w-7/12">
            {/* Boyut */}
            <PizzaSize handleSelectSize={handleSelectSize} />

            {/* Hamur */}
            <DoughSize handleSelectDoughSize={handleSelectDoughSize} />
          </div>

          {/* Malzemeler */}
          <Ingredients handleSelectIngredient={handleSelectIngredient} />

          {/* Adım */}
          <InputForm
            labelTitle={"Adım"}
            handleChange={handleChange}
            placeholder={"Siparişini tamamlamak için adını girmelisin"}
          />

          {/* Notlar */}
          <InputForm
            labelTitle={"Sipariş Notu"}
            handleChange={handleChange}
            placeholder={"Siparişine eklemek istediğin bir not var mı?"}
          />

          {/* Sipariş Özeti */}
          <div className="grid md:grid-cols-3 grid-cols-1 py-10 m-auto">
            {/* Sepet */}
            <BasketAmount
              handleDecreaseAmount={handleDecreaseAmount}
              handleIncreaseAmount={handleIncreaseAmount}
              orderDetails={orderDetails}
            />
            {/* Sipariş Toplamı */}
            <div className="md:w-96 h-48 border border-myLightGray rounded-md flex relative items-center justify-center mb-10">
              <OrderSummary orderDetails={orderDetails} />
              <ButtonComp
                containerClass={
                  "bg-myYellow flex w-full h-1/3 absolute -bottom-12 rounded-md justify-center items-center"
                }
                className={
                  "text-myDarkGray text-lg font-semibold w-full h-full"
                }
                onClick={handleOrder}
                disabled={
                  orderDetails.name.length < 4 ||
                  orderDetails.ingredients.length < 5 ||
                  orderDetails.ingredients.length > 10 ||
                  orderDetails.doughSize === ""
                }
                title={"SİPARİŞ VER"}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Order;
