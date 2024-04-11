import backgroundImage from "../images/bg-main-desktop.png";

const InputForm = () => {
  return (
    <div className=" w-full h-screen grid grid-cols-3">
      <div
        className=" col-span-1 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className=" col-span-2 flex justify-center items-center">
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
              className=" border border-slate-200 px-4 py-2 rounded w-[300px] text-sm placeholder-slate-300"
              placeholder="e.g. Khant Nyar Ko Ko"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <label
              htmlFor="name"
              className=" font-space-grotesk uppercase text-[11px] text-customColor"
            >
              Card Number
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=" border border-slate-200 px-4 py-2 rounded w-[300px] text-sm placeholder-slate-300"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div className=" flex gap-3">
            <div className=" flex flex-col space-y-2">
              <label
                htmlFor="month"
                className=" font-space-grotesk uppercase text-[11px] text-customColor"
              >
                Exp. Date (MM/YY)
              </label>
              <div className=" flex gap-3">
                <input
                  type="text"
                  id="month"
                  name="month"
                  maxLength={2}
                  className=" border border-slate-200 px-4 py-2 rounded w-[70px] text-sm placeholder-slate-300"
                  placeholder="MM"
                />
                <input
                  type="text"
                  id="year"
                  name="year"
                  maxLength={2}
                  className=" border border-slate-200 px-4 py-2 rounded w-[70px] text-sm placeholder-slate-300"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className=" flex flex-col space-y-2">
              <label
                htmlFor="name"
                className=" font-space-grotesk uppercase text-[11px] text-customColor"
              >
                CVC
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" border border-slate-200 px-4 py-2 rounded w-[140px] text-sm placeholder-slate-300"
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <button className=" w-[300px] bg-customColor mt-2 px-4 py-3 rounded text-white font-space-grotesk text-sm">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
