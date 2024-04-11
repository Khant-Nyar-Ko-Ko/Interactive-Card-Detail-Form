import { useState } from "react"
import backcardBackground from "../images/bg-card-back.png"


const CardBack = () => {
    const [code, setCode] = useState<string>("000");
  return (
    <div className="bg-cover bg-center w-[350px] h-[200px] rounded-lg absolute top-[400px] left-[300px] flex flex-col justify-center items-end px-10 shadow-lg"
    style={{ backgroundImage: `url(${backcardBackground})` }}>
        <p className=" text-sm text-white font-space-grotesk mb-1">{code}</p>
    </div>
  )
}

export default CardBack