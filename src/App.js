import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "./compnents/img";
import "./App.css";
const App = () => {
  const [width, setwidth] = useState(0);
  const widthRef = useRef();
  useEffect(() => {
    setwidth(widthRef.current.scrollWidth - widthRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div ref={widthRef} className="carousel">
        <motion.div
          drag={"x"}
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((imgs, key) => (
            <motion.div className="item">
              <img key={key} src={imgs} alt="imges" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default App;
