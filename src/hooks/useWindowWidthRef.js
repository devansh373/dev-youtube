import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu, setIsPhone } from "../utils/appSlice";

const useWindowWidthRef = () => {
  const widthRef = useRef(window.innerWidth);
const dispatch = useDispatch()
  useEffect(() => {
      widthRef.current < 740 ? dispatch(closeMenu()) : dispatch(openMenu());
    const handleResize = () => {
      widthRef.current = window.innerWidth;
    //   console.log("Current width:", widthRef.current);
      widthRef.current < 740 ? dispatch(closeMenu()) : dispatch(openMenu());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
};
export default useWindowWidthRef