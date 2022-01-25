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


  return (
    <div className="App">
      <Nav />
      <div className="qnaContainer">
        <AnimeInfo />
        <Swiper
          direction="vertical"
          style={{ width: "100vw", height: "80vh" }}

          modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          navigation
          scrollbar={{ draggable: true }}
        >
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
        
        </Swiper>
      </div>
      <div className="btnContainer">
      <Button variant="contained" size="large" style={{background: "green", width:"auto"}}>
          Submite Quiz
        </Button>
        <Button variant="contained" size="large" style={{background: "gray", width:"auto"}}>
          reset
        </Button>
      </div>
     
    </div>
  );
}

export default App;
