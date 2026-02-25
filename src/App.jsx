import audio from "./assets/sample.mp3";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className="container">
      <AudioPlayer audioSrc={audio} />
    </div>
  );
};

export default App;
