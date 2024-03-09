import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-myDark p-10 flex justify-around flex-wrap">
        <div className="flex flex-wrap justify-center items-center">
          <div className="p-4">
            <img
              src="../../../Assets/mile2-aseets/footer/logo-footer.svg"
              className="mb-8"
            />
            <div className="flex items-center mb-6">
              <img
                src="../../../Assets/mile2-aseets/footer/icons/icon-1.png"
                className="mr-4"
              />
              <p className="text-white">
                341 Londonderry Road, <br /> Istanbul Türkiye
              </p>
            </div>
            <div className="flex items-center mb-6">
              <img
                src="../../../Assets/mile2-aseets/footer/icons/icon-2.png"
                className="mr-4"
              />
              <a
                href="mailto:aciktim@teknolojikyemekler.com"
                className="text-white"
              >
                aciktim@teknolojikyemekler.com
              </a>
            </div>
            <div className="flex items-center ">
              <img
                src="../../../Assets/mile2-aseets/footer/icons/icon-3.png"
                className="mr-4"
              />
              <p className="text-white">+90 216 123 45 67</p>
            </div>
          </div>
          <div className="font-barlow ml-4 text-white mt-4 md:mt-0">
            <p className="font-medium mb-6 text-xl ">Sıccacık Menuler</p>
            <p className="text-lg mb-2">Terminal Pizza</p>
            <p className="text-lg mb-2">5 Kişilik Hackathlon Pizza</p>
            <p className="text-lg mb-2">useEffect Tavuklu Pizza</p>
            <p className="text-lg mb-2">Beyaz Console Frosty</p>
            <p className="text-lg mb-2">Testler Geçti Mutlu Burger</p>
            <p className="text-lg mb-2">Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="flex-col mt-4 md:mt-0">
          <p className="font-barlow font-medium text-xl ml-6 text-white">
            Instagram
          </p>
          <div className="flex flex-wrap mt-6 max-w-96 justify-center">
            <img
              className="mr-4 mb-2 rounded-md"
              src="../../../Assets/mile2-aseets/footer/insta/li-0.png"
            />
            <img
              className="mr-4 mb-2 rounded-md"
              src="../../../Assets/mile2-aseets/footer/insta/li-1.png"
            />
            <img
              className="mr-4 mb-2 rounded-md"
              src="../../../Assets/mile2-aseets/footer/insta/li-2.png"
            />
            <img
              className="mr-4 mb-2 rounded-md"
              src="../../../Assets/mile2-aseets/footer/insta/li-3.png"
            />
            <img
              className="mr-4 mb-2 rounded-md"
              src="../../../Assets/mile2-aseets/footer/insta/li-4.png"
            />
            <img
              className="mr-4 mb-2 rounded-md"
              src="../../../Assets/mile2-aseets/footer/insta/li-5.png"
            />
          </div>
        </div>
      </footer>
      <div className="bg-myDark">
        <hr className="opacity-15" />
        <div className="py-4 items-center text-center flex justify-between mx-4 md:mx-40">
          <p className="font-barlow text-white">© 2023 Teknolojik Yemekler. </p>
          <img
            src="../../../Assets/mile2-aseets/footer/X.png"
            className="h-6"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
