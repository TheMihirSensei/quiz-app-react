import "./App.css";
import AnimeInfo from "./components/AnimeInfo";
import Nav from "./components/Nav";
import Qna from "./components/Qna";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from 'swiper';
import 'swiper/css';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import mhaQna from "./asserts/mhaQna.json"
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectFade } from 'swiper';
import { Button } from "@mui/material";

function App() {


  const clicked = () => {
    console.log("clicked in app");
  };

  // return (
  //   <Swiper modules={[EffectFade]} effect="fade">
  //     {[1, 2, 3].map((i, el) => {
  //       return <SwiperSlide key={i}>Slide {el}</SwiperSlide>;
  //     })}
  //   </Swiper>
  // );
  const onSlideEvent = (e) => {
    console.log("lenght is:", mhaQna.length)
    console.log("swiper on slider event : ", e.realIndex  )
    if(mhaQna.length === e.realIndex+1){
      console.log("at the last event>>>>")
    }
  }

  return (
    <div className="App">
      <Nav />


      <div className="qnaContainer">
        {/* <AnimeInfo /> */}
        <Swiper
          direction="vertical"
          slidesPerView={'auto'}
          // modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e)=>onSlideEvent(e)}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
          <AnimeInfo />
          </SwiperSlide >
          {
            mhaQna.map((qna, index) => {
              return (
                <SwiperSlide key={index}>
                  <Qna
                    question={qna.question}
                    options={qna.options}
                  />
                </SwiperSlide>
              )
            })

          }
        <SwiperSlide>
        <div className="btnContainer">
        <Button variant="contained" size="large" style={{ background: "green", width: "auto" }}>
          Submite Quiz
        </Button>
        <Button variant="contained" size="large" style={{ background: "gray", width: "auto" }}>
          reset
        </Button>
      </div>
        </SwiperSlide>

        </Swiper>
      </div>
      

    </div>
  );
}

export default App;
