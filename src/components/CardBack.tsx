import { useEffect, useState } from "react"
import backcardBackground from "../images/bg-card-back.png"

interface FormData {
  name: string;
  number: string;
  month: string;
  year: string;
  code: string;
}

const CardBack = ({formData} : {formData : FormData}) => {
    const [code, setCode] = useState<string>("000");


    useEffect(() => {
      setCode(formData.code || "000")
    },[formData])
  return (
    <div className="bg-cover bg-center w-[250px] md:w-[350px]  h-[150px] md:h-[200px] rounded-lg absolute top-[15px] md:top-[400px] left-[70px] md:left-[300px] flex flex-col justify-center items-end px-10 shadow-lg"
    style={{ backgroundImage: `url(${backcardBackground})` }}>
        <p className=" text-sm text-white font-space-grotesk mb-1">{code}</p>
    </div>
  )
}

export default CardBack