import { useState } from "react";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import InputForm from "../components/InputForm";
import ThankCard from "../components/ThankCard";
import backgroundImage from "../images/bg-main-desktop.png";

const MainPage = () => {
    const [isComplete, setIsComplete] = useState<boolean>(false);
  return (
    <div className=" w-full h-screen grid grid-cols-3">
      <div
        className=" col-span-1 bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <CardFront/>
        <CardBack/>
      </div>
      <div className=" col-span-2 flex justify-center items-center">
       {isComplete ? <ThankCard/> : <InputForm/>}
      </div>
    </div>
  );
};

export default MainPage;
