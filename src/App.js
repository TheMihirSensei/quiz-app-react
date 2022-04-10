import "./App.css";
import AnimeInfo from "./components/AnimeInfo";
import Nav from "./components/Nav";
import Qna from "./components/Qna";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from 'swiper';
import "swiper/css";
// import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import mhaQna from "./asserts/mhaQna.json";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectFade,
} from "swiper";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridQuestion from "./components/GridQuestion";
import { gridAction, quizInitAction } from "./redux/actions/quiz";
import axiosInstance from "./config";

function App() {
  const quiz = useSelector((state) => state.mulQuiz.quiz);
  const dispatch = useDispatch();
  console.log("quiz....", quiz);

  const fetchData = async () => {
    const { data } = await axiosInstance.get("/quiz/61fc06d724f2a6f6d98c1326");
    console.log("data...", data);
    dispatch(
      quizInitAction({
        quizDescription: data.quizDescription.quizDescription,
        quizTitle: data.quizDescription.quizTitle,
        quizId: data.quizDescription._id,
        questions: data.questions,
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSlideEvent = (e) => {
    console.log("lenght is:", mhaQna.length);
    console.log("swiper on slider event : ", e.realIndex);
    if (mhaQna.length === e.realIndex + 1) {
      console.log("at the last event>>>>");
    }
  };

  return (
    <div className="App">
      <Nav />

      <div className="qnaContainer">
        {/* <AnimeInfo /> */}
        <Swiper
          direction="vertical"
          slidesPerView={"auto"}
          // modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e) => onSlideEvent(e)}
          navigationk
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <AnimeInfo />
          </SwiperSlide>
          {quiz.questions?.map((qna, index) => {
            console.log("quna...", qna);
            return (
              <SwiperSlide key={index}>
                <Qna
                  id={qna.questionId}
                  answer={qna.answer}
                  question={qna.question}
                  options={qna.options}
                  questionIndex={index}
                  totalQuestion={quiz.questions.length}
                />
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="gridContainer">
              <div className="paginationQuestion">
                <GridQuestion />
              </div>
              <div className="btnContainer">
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: "green", width: "auto" }}
                >
                  Submite Quiz
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: "gray", width: "auto" }}
                >
                  reset
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
