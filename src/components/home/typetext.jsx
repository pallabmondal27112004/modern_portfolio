import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web developer', 'App developer', 'UI/UX designer', 'Flutter developer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);

  return (
    <span className="multiple" style={{color:'#FAE586'}} ref={el} />
  );
};

export default TypedText;
