import { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);

  console.log(isHovering, "---isHovering");

  return (
    <div
      ref={ref}
      style={{
        width: 300,
        height: 300,
        background: isHovering ? "red" : "green",
      }}
    >
      <button onClick={() => console.log(ref.current)}>click</button>
    </div>
  );
};

export default Hover;
