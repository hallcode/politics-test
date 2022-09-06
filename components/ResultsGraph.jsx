import { useTheme } from "@emotion/react";
import { useRef, useEffect } from "react";

export default function ResultsGraph({ ci, pt, ...props }) {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const HEIGHT = 512;
  const WIDTH = 720;

  useEffect(() => {
    let score = [ci, pt];
    if (!ci || !pt) {
      score = [-0.5, -0.7];
    }
    score[0] = ((score[0] + 1) / 2) * WIDTH;
    score[1] = HEIGHT - ((score[1] + 1) / 2) * HEIGHT;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = theme.colors.black;
    ctx.lineWidth = 2;
    ctx.moveTo(0, HEIGHT / 2);
    ctx.lineTo(WIDTH, HEIGHT / 2);
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.closePath();

    // Draw user location
    ctx.fillStyle = theme.colors.teal[4];
    ctx.beginPath();
    ctx.arc(score[0], score[1], 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }, [ci, pt]);

  return (
    <canvas
      className="results-canvas"
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
    ></canvas>
  );
}
