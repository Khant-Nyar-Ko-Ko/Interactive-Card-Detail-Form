import { useState } from "react";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import InputForm from "../components/InputForm";
import ThankCard from "../components/ThankCard";
import backgroundImage from "../images/bg-main-desktop.png";

interface FormData {
  name : string,
  number: string,
  month : string,
  year: string,
  code: string
}

const MainPage = () => {
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
      name: '',
      number: '',
      month: '',
      year: '',
      code: ''
    });


    const handleDataChange = (data : FormData) => {
      setFormData(data);
    }

    const handleComplete = (confirm : boolean) => {
      
      setIsComplete(confirm)
      setFormData({
        name: '',
        number: '',
        month: '',
        year: '',
        code: ''
      })
    }

    // console.log(formData);
    

  return (
    <div className=" w-full h-screen grid grid-cols-3">
      <div
        className=" col-span-1 bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <CardFront formData={formData}/>
        <CardBack formData={formData}/>
      </div>
      <div className=" col-span-2 flex justify-center items-center">
       {isComplete ? <ThankCard complete = {handleComplete}/> : <InputForm onDataChange= {handleDataChange} complete = {handleComplete}/>}
      </div>
    </div>
  );
};

export default MainPage;
