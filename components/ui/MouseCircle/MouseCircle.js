import { useEffect } from "react";
import styles from "./MouseCircle.module.css";

const MouseCircle = () => {
    //Add position to state
    //Add typecheck
    //Get context props when hovering and animate change class
    
    useEffect(() => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          let mousePosX = 0,
              mousePosY = 0,
              mouseCircle = document.getElementById("mouse-circle");
      
          document.onmousemove = (e) => {
              mousePosX = e.pageX;
              mousePosY = e.pageY;
          };
      
          let delay = 6,
              revisedMousePosX = 0,
              revisedMousePosY = 0;
      
          function delayMouseFollow() {
              requestAnimationFrame(delayMouseFollow);
      
              revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
              revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
      
              mouseCircle.style.top = revisedMousePosY + "px";
              mouseCircle.style.left = revisedMousePosX + "px";
          }
          delayMouseFollow();
      }
      
      }, [])
      
    return <div id="mouse-circle" className={styles.MouseCircle}></div>
    ;
};

export default MouseCircle;