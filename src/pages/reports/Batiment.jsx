import React from "react";
<<<<<<< HEAD
// import Production from "./Production";
import Poussiniere from "./Poussiniere";

import LotCreation from "./LotCreation";
import BatimentSelection from "./BatimentSelection";
import BatimentForm from "./BatimentForm";

import { DataProvider } from "./context/DataProvider";
function Batiment({ batiments, siteId }) {
  const separateBatiment = {};
=======
import Production from "./Production";
import Poussiniere from "./Poussiniere";
import { Swiper, SwiperSlide } from "swiper/react"; // import SwiperSlide
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { useState, useEffect } from "react";
// import "./styles.css";

function Batiment({ batiments }) {
  const [isMobile, setIsMobile] = useState(false);

  // Initialize an empty object to hold arrays for each type
  const separateBatiment = {};

  // Iterate through the array and separate objects based on their types
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  batiments.forEach((obj) => {
    const { type } = obj;
    if (separateBatiment[type]) {
      separateBatiment[type].push(obj);
    } else {
      separateBatiment[type] = [obj];
    }
  });
<<<<<<< HEAD
  const fullBatiment = separateBatiment?.production?.filter(
    (obj) => !obj.isEmpty
  );
  return (
    <>
      <div className="batiment-category">
        <DataProvider>
          <BatimentSelection BatimentIdent={fullBatiment} siteId={siteId} />
          <BatimentForm siteId={siteId} />
        </DataProvider>

        {/* <LotCreation lotdata={batiments} /> */}
      </div>
=======

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderSlider = (creativeEffect) => (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={creativeEffect}
      modules={[EffectCreative]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
  return (
    <>
      {isMobile ? (
        <>
          {renderSlider({
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          })}
        </>
      ) : (
        <div className="batiment-category">
          {separateBatiment?.production && (
            <Production data={separateBatiment?.production} />
          )}
          {separateBatiment?.poussiniere && (
            <Poussiniere data={separateBatiment?.poussiniere} />
          )}
        </div>
      )}
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
    </>
  );
}

export default Batiment;
