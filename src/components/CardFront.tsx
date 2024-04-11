import { useState } from "react";
import frontcardBackground from "../images/bg-card-front.png";

const CardFront = () => {
  const [cardNum, setCardNum] = useState<string>("0000 0000 0000 0000");
  const [name, setName] = useState<string>("Khant Nyar Ko Ko");
  const [date, setDate] = useState<string>("00/00");
  return (
    <div
      className="bg-cover bg-center w-[350px] h-[200px] rounded-lg absolute top-[180px] left-[210px] flex flex-col gap-14 justify-center shadow-lg"
      style={{ backgroundImage: `url(${frontcardBackground})` }}
    >
      <div className=" flex mx-8  gap-3 items-center">
        <div className="w-8 h-8  bg-white rounded-full"></div>
        <div className="w-4 h-4  border rounded-full"></div>
      </div>
      <div className=" flex flex-col gap-5">
        <div>
          <h3 className="text-2xl ms-8 text-white font-space-grotesk">
            {cardNum}
          </h3>
        </div>
        <div className=" flex gap-20">
          <p className=" text-white text-sm font-space-grotesk ms-8 ">
            {name}
          </p>
          <p className=" text-white text-sm font-space-grotesk ms-8 ">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
