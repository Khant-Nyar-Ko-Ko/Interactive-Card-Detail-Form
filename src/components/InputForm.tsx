import { useState } from "react";

interface FormData {
  name : string,
  number: string,
  month : string,
  year: string,
  code: string
}
interface Props {
  onDataChange : (data: FormData) => void,
  complete : (confirm : boolean) => void
}

const InputForm : React.FC<Props>= ({onDataChange, complete}) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    code: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const {name, value } = e.target;
   setFormData((prevData) => ({
    ...prevData,
    [name] : value
   })),
   onDataChange(formData);
  }

  const handleConfirm = () => {
    complete(true);
  }


  return (
    <div>
      <form className=" flex flex-col gap-5">
        <div className=" flex flex-col space-y-2">
          <label
            htmlFor="name"
            className=" font-space-grotesk uppercase text-[11px] text-customColor"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className=" border border-slate-200 px-4 py-2 rounded w-[300px] text-sm placeholder-slate-300 font-space-grotesk"
            placeholder="e.g. Khant Nyar Ko Ko"
            value={formData?.name}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col space-y-2">
          <label
            htmlFor="number"
            className=" font-space-grotesk uppercase text-[11px] text-customColor"
          >
            Card Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            className=" border border-slate-200 px-4 py-2 rounded w-[300px] text-sm placeholder-slate-300 font-space-grotesk"
            placeholder="e.g. 1234 5678 9123 0000"
            value={formData?.number}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-3">
          <div className=" flex flex-col space-y-2">
            <label
              htmlFor="month"
              className=" font-space-grotesk uppercase text-[11px] text-customColor "
            >
              Exp. Date (MM/YY)
            </label>
            <div className=" flex gap-3">
              <input
                type="number"
                id="month"
                name="month"
                className=" border border-slate-200 px-4 py-2 rounded w-[70px] text-sm placeholder-slate-300 font-space-grotesk"
                placeholder="MM"
                value={formData?.month}
                onChange={handleChange}
              />
              <input
                type="number"
                id="year"
                name="year"
                className=" border border-slate-200 px-4 py-2 rounded w-[70px] text-sm placeholder-slate-300 font-space-grotesk"
                placeholder="YY"
                value={formData?.year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" flex flex-col space-y-2">
            <label
              htmlFor="code"
              className=" font-space-grotesk uppercase text-[11px] text-customColor"
            >
              CVC
            </label>
            <input
              type="number"
              id="code"
              name="code"
              className=" border border-slate-200 px-4 py-2 rounded w-[140px] text-sm placeholder-slate-300 font-space-grotesk"
              placeholder="e.g. 123"
              value={formData?.code}
              onChange={handleChange}
            />
          </div>
        </div>
        <button onClick={handleConfirm} className=" w-[300px] bg-customColor mt-2 px-4 py-3 rounded text-white font-space-grotesk text-sm font-space-grotesk">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default InputForm;
