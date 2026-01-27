import { useState } from "react";

const SongList = ({ songs, isDetecting, currentMood }) => {
  const [play, setPlay] = useState(false);

  const handlePlay = (index) => {
    play === index ? setPlay(null) : setPlay(index);
  };

  return (
    <div className="w-full text-gray-300">
      <h3 className="font-bold text-[1rem] mt-4 text-center upp">
        Recommended Tracks : {currentMood}{" "}
      </h3>
      {isDetecting ? (
        <div className="text-gray-300 text-[0.75rem] my-4">
          Getting songs for you!
        </div>
      ) : !songs || songs.length === 0 ? (
        <div className="text-gray-300 text-[0.75rem] my-4">
          {" "}
          Sorry ! we cant findout song according to your mood{" "}
        </div>
      ) : (
        songs.map((song, idx) => (
          <div key={idx} className="my-4 w-full text-gray-400">
            <div className="flex items-center justify-around">
              <div className="left">
                <p className="text-[0.75rem]">{song.title}</p>
                <p className="text-[0.6rem] text-indigo-900/70">
                  {song.artist}
                </p>
              </div>
              {play === idx && (
                <audio key={idx} src={song.audio} autoPlay loop />
              )}
              <div
                className="cursor-pointer transition-all hover:scale-110 duration-150 active:scale-0 active:duration-500"
                onClick={() => handlePlay(idx)}
              >
                {play === idx ? (
                  <i className="ri-pause-large-line"></i>
                ) : (
                  <i className="ri-play-large-line"></i>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SongList;
