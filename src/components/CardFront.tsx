import { useEffect, useState } from "react";
import frontcardBackground from "../images/bg-card-front.png";

interface FormData {
  name: string;
  number: string;
  month: string;
  year: string;
  code: string;
}

const CardFront = ({formData}: {formData: FormData}) => {
  const [cardNum, setCardNum] = useState<string>("0000 0000 0000 0000");
  const [name, setName] = useState<string>("Khant Nyar Ko Ko");
  const [month, setMonth] = useState<string>("00");
  const [year, setYear] = useState<string>("00");

  useEffect(() => {
    if(formData) {
      setCardNum(formData.number || "0000 0000 0000 0000");
      setName(formData.name || "Khant Nyar Ko Ko" );
      setMonth(formData.month || "00");
      setYear(formData.year || "00");
    }
  },[formData])
  
  return (
    <div
      className="bg-cover bg-center  w-[250px] md:w-[350px]  h-[150px] z-10 md:h-[200px] rounded-lg absolute top-[100px] md:top-[180px] left-[30px] md:left-[210px] flex flex-col gap-10 md:gap-14 justify-center shadow-lg"
      style={{ backgroundImage: `url(${frontcardBackground})` }}
    >
      <div className=" flex mx-3 md:mx-8 gap-1 md:gap-3 items-center">
        <div className="w-5 md:w-8 h-5 md:h-8  bg-white rounded-full"></div>
        <div className="w-2 md:w-4 h-2 md:h-4  border rounded-full"></div>
      </div>
      <div className=" flex flex-col gap-2 md:gap-5">
        <div>
          <h3 className="md:text-2xl ms-3 md:ms-8 text-white font-space-grotesk">
            {cardNum}
          </h3>
        </div>
        <div className=" flex gap-3 md:gap-10">
          <p className="  text-white text-sm font-space-grotesk ms-3 md:ms-8 w-[180px] ">
            {name}
          </p>
          <p className=" text-white text-sm font-space-grotesk ms-0 md:ms-8">
            {month}/{year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
