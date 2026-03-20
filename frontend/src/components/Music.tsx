import { useRef } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/bg.mp3" />
      </audio>

      <button onClick={playMusic}>
        Play Music
      </button>
    </>
  );
}