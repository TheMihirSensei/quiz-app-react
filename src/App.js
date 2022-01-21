import './App.css';
import AnimeInfo from './components/AnimeInfo';
import Nav from './components/Nav';
import Qna from './components/Qna';

function App() {
  return (
    <div className="App">
      <Nav />
 
      <div className='qnaContainer'>
      <AnimeInfo />
   
        <Qna />
        <Qna />

        <Qna />
        <Qna />
      </div>


    </div>
  );
}

export default App;
