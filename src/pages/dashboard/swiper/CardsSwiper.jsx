import { useMemo } from "react";
import UseFetchData from "../../../hooks/UseFetchData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ThirdCard from "../cards/ThirdCard";
import "./style.css";
import SkeletonBlock from "../skeletons/SkeletonBlock";
let base_url = "https://farmdriver.savas.ma/api/";

export default function App() {
  const ApiUrl = useMemo(() => `${base_url}dash-slider/`, [base_url]);

  const { data, loading, error } = UseFetchData(ApiUrl, "GET");
  if (loading) {
    return (
      <div className="card-1">
        <SkeletonBlock />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="card-3">
        <p>there is an error</p>
      </div>
    );
  }

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {data &&
        data?.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <ThirdCard data={d} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
