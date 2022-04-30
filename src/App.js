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
import { Button, Input, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridQuestion from "./components/GridQuestion";
import { gridAction, quizInitAction } from "./redux/actions/quiz";
import axiosInstance from "./config";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "11px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const quiz = useSelector((state) => state.mulQuiz.quiz);
  const dispatch = useDispatch();
  const swiper = useRef();

  const fetchData = async () => {
    const { data } = await axiosInstance.get("/quiz/61fc06d724f2a6f6d98c1326");
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
    console.log("ref", swiper);
  }, []);

  const onSlideEvent = (e) => {
    if (mhaQna.length === e.realIndex + 1) {
      console.log("at the last event>>>>");
    }
  };

  const submitForm = async () => {
    console.log("nammm....", name);
    let submitedResponse = await axiosInstance.post("/quiz", {
      quizId: quiz.quizId,
      questions: quiz.questions,
      userName: name,
    });
    console.log("subimited...Doen: ", submitedResponse);
    setOpen(false);
  };
  const handleQuizSubmit = async (e) => {
    //get data from the redux and sent response to Backend
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const clickSwiper = (index) => {
    console.log("swiper-to", index);
    swiper.current.swiper.slideTo(index + 1);
  };

  return (
    <div className="App">
      <Nav />

      <div className="qnaContainer">
        <Swiper
          ref={swiper}
          direction="vertical"
          slidesPerView={"auto"}
          // modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          // defaultValue={4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e) => onSlideEvent(e)}
          // navigationk
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
                <GridQuestion swiperClick={clickSwiper} />
              </div>
              <div className="btnContainer">
                <Button
                  variant="contained"
                  size="large"
                  style={{ background: "green", width: "auto" }}
                  onClick={handleQuizSubmit}
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="body2" component="h2">
              Submit Your Quiz :)
            </Typography>
            <Box py={4}>
              <TextField
                label="Enter Your Name"
                fullWidth
                variant="filled"
                placeholder="eg. Mihir"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box
              py={2}
              display="flex"
              justifyContent="flex-end"
              onClick={submitForm}
            >
              <Button variant="contained" sx={{ background: "#7900FF" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
