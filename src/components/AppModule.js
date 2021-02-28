import React from 'react';
import ReactPlayer from "react-player";
 import List from '../components/List';
function App() {
  return (
    <div>
      <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <ReactPlayer
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        width="80%"
        height="50px"
        playing={false}
        controls={true}
      />
      <List />
    </div>
  );
}
 
export default App;