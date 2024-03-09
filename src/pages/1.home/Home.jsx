import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/menuBar/MenuBar";
import Card from "../../components/card/Card";
import Pill from "../../components/pill/Pill";
import ItemCard from "../../components/itemCard/ItemCard";
import Footer from "../../components/footer/Footer";
import { barElements, pizzaData } from "../../assets/data";

function Home() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Pizza");

  const handleOrder = () => {
    navigate("/order", {
      state: pizzaData[1],
    });
  };

  const handleSelect = (title) => {
    if (active === title) {
      setActive("");
    } else {
      setActive(title);
    }
  };

  return (
    <div className="bg-myBeige">
      <div>
        {/* First Page */}
        <div
          className="h-screen justify-center flex text-center
    bg-[url('../../../Assets/mile1-assets/home-banner.png')]"
        >
          <div className="mt-32">
            <img
              className="mb-16 m-auto"
              src="../../../Assets/mile1-assets/logo.svg"
            />

            <div>
              <p className="font-satisfy text-3xl text-myYellow font-light ">
                fırsatı kaçırma
              </p>
              <p className="font-specimen text-6xl text-white font-light mb-10">
                KOD ACIKTIRIR <br /> PIZZA, DOYURUR
              </p>
              <button
                data-cy="hungry-btn"
                onClick={handleOrder}
                className="bg-myYellow py-3 px-14 rounded-full text-black font-medium font-roboto"
              >
                ACIKTIM
              </button>
            </div>
          </div>
        </div>

        {/* Menu Bar */}
        <MenuBar />

        {/* Card */}
        <div className="p-20 justify-evenly md:flex ">
          {/* SOL */}
          <Card
            className="w-full xl:w-5/12 lg:w-3/6 md:w-4/6 bg-no-repeat rounded-xl bg-cover bg-red-100 bg-[url('../../../Assets/mile2-aseets/cta/kart-1.png')] p-10 "
            btnClass={
              "md:py-4 md:px-6 p-2 rounded-full text-myRed font-semibold font-barlow bg-white mt-6"
            }
            btnTitle={"SİPARİŞ VER"}
          >
            <p className="font-quattrocento lg:text-7xl md:text-6xl font-bold text-white">
              Özel <br /> Lezzetus
            </p>
            <p className="text-white font-semibold font-barlow md:text-xl mt-1 mb-6">
              Position:Absolute Acı Burger
            </p>
          </Card>

          {/* SAĞ */}
          <div className="lg:w-5/12 mt-5 md:mt-0">
            <Card
              className="bg-no-repeat bg-[url('../../../Assets/mile2-aseets/cta/kart-2.png')] p-10 mb-10 rounded-xl bg-cover"
              btnClass={
                "lg:py-4 lg:px-6 p-2 rounded-full text-myRed font-semibold font-barlow bg-white mt-6"
              }
              btnTitle={"SİPARİŞ VER"}
            >
              <p className="font-barlow lg:text-3xl font-semibold text-white">
                Hackathlon <br /> Burger Menü
              </p>
            </Card>
            <Card
              className="bg-no-repeat bg-[url('../../../Assets/mile2-aseets/cta/kart-3.png')] p-10 rounded-xl bg-cover"
              btnClass={
                "lg:py-4 lg:px-6 p-2 rounded-full text-myRed font-semibold font-barlow bg-white mt-6"
              }
              btnTitle={"SİPARİŞ VER"}
            >
              <p className="font-barlow text-md lg:text-3xl font-semibold text-myDarkGray">
                <span className="text-myRed">Çoooook</span> hızlı <br /> npm
                gibi kurye
              </p>
            </Card>
          </div>
        </div>

        <div className="pt-6 pb-4">
          {/* Title Container */}
          <div className="text-center mb-10">
            <p className="text-myRed font-satisfy text-3xl ">
              en çok paketlenen menüler
            </p>
            <p className="text-myDarkGray font-barlow text-4xl font-semibold mt-2">
              Acıktıran Kodlara Doyuran Lezzetler
            </p>
          </div>
          {/* Pills */}
          <div className="px-40 flex flex-wrap justify-between mb-10">
            {barElements.map((item, i) => (
              <Pill
                item={item}
                active={active}
                key={i}
                handleSelect={handleSelect}
              />
            ))}
          </div>

          {/* Pizzas */}
          <div className="flex flex-wrap justify-center items-center mb-10">
            {pizzaData.map(
              (pizza, i) =>
                pizza.category === active && <ItemCard key={i} data={pizza} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
