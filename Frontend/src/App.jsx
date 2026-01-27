import { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Layout from "./components/layout";
import SongList from "./components/SongList";

function App() {
  const [songs, setSongs] = useState([]);
  const [isDetecting, setIsDetecting] = useState(false);
  const [currentMood, setcurrentMood] = useState("");

  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Layout>
        <FacialExpression
          setSongs={setSongs}
          isDetecting={isDetecting}
          setIsDetecting={setIsDetecting}
          setcurrentMood={setcurrentMood}
        />
        <SongList
          songs={songs}
          isDetecting={isDetecting}
          currentMood={currentMood}
        />
      </Layout>
    </>
  );
}

export default App;
