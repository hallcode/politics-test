import { Paper } from "@mantine/core";
import { IconArrowBigLeft, IconArrowBigRight } from "@tabler/icons";
import { useState, useEffect } from "react";
import "./swipe.css";

const CARD_CLASS = "swipe-control";
const ACTIVE_CLASS = "active";
const THREASHOLD = 60;

export default function Swipe({ children, onChange, onDone, ...props }) {
  const [classes, setClasses] = useState(CARD_CLASS);
  const [isActive, setActive] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [offset, setOffset] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (onChange == undefined) {
      return;
    }
    onChange(value);
  }, [value]);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
    }
  }, [isActive]);

  const handleTouch = (e) => {
    setClasses(CARD_CLASS + " " + ACTIVE_CLASS);
    setActive(true);
    setStartPos(e.clientX);
  };

  const handleRelease = (e) => {
    if (!isActive) {
      return;
    }

    if (!e.isPrimary) {
      return;
    }
    setClasses(CARD_CLASS);
    setActive(false);
    setOffset(0);
    setStartPos(0);
    setRotation(0);

    if (onDone == undefined) {
      return;
    }

    onDone(value);
  };

  const handleMove = (e) => {
    if (!isActive) {
      return;
    }

    if (!e.isPrimary) {
      return;
    }

    let offset_int = e.clientX - startPos;
    setOffset(offset_int);
    setRotation(offset_int / 45);

    let new_value = 0;

    if (offset_int > THREASHOLD) {
      new_value = 1;
    }
    if (offset_int < -THREASHOLD) {
      new_value = -1;
    }
    if (value != new_value) {
      setValue(new_value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.code == "ArrowLeft") {
      setClasses(CARD_CLASS);
      setActive(false);
      setOffset(0);
      setStartPos(0);
      setRotation(0);

      if (onDone == undefined) {
        return;
      }
      onDone(-1);
    }

    if (e.code == "ArrowRight") {
      setClasses(CARD_CLASS);
      setActive(false);
      setOffset(0);
      setStartPos(0);
      setRotation(0);

      if (onDone == undefined) {
        return;
      }
      onDone(1);
    }
  };

  return (
    <div className="swipe-container">
      <div
        alt="Left/Right Swipe Button"
        role="button"
        aria-disabled="false"
        tabIndex={0}
        className={classes}
        onPointerDown={handleTouch}
        onPointerUp={handleRelease}
        onPointerLeave={handleRelease}
        onPointerMove={handleMove}
        onKeyUp={handleKeyPress}
        style={{
          left: `${offset}px`,
          transform: isActive && `scale(1.022) rotate(${rotation}deg)`,
        }}
      >
        <div className="left-focus-hint">
          <IconArrowBigLeft />
          <p>Disagree</p>
        </div>
        <div className="right-focus-hint">
          <IconArrowBigRight />
          <p>Agree</p>
        </div>
        <Paper
          shadow={isActive ? "md" : "sm"}
          p="lg"
          withBorder
          radius="lg"
          sx={{ width: "100%", height: "400px" }}
        >
          {children}
        </Paper>
      </div>
    </div>
  );
}
