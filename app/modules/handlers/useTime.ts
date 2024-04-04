'use client'
import { useState } from "react";

const UseTime = () => {
    const [isVisible, setIsVisible] = useState(false);
    setTimeout(() => {
        setIsVisible(true);
    }, 1000); //
   

    return{
        isVisible
    }
}
export default UseTime;