const InputForm = () => {
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
            className=" border border-slate-200 px-4 py-2 rounded w-[300px] text-sm placeholder-slate-300 font-space-grotesk"
            placeholder="e.g. 1234 5678 9123 0000"
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
                type="text"
                id="month"
                name="month"
                maxLength={2}
                className=" border border-slate-200 px-4 py-2 rounded w-[70px] text-sm placeholder-slate-300 font-space-grotesk"
                placeholder="MM"
              />
              <input
                type="text"
                id="year"
                name="year"
                maxLength={2}
                className=" border border-slate-200 px-4 py-2 rounded w-[70px] text-sm placeholder-slate-300 font-space-grotesk"
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
              className=" border border-slate-200 px-4 py-2 rounded w-[140px] text-sm placeholder-slate-300 font-space-grotesk"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button className=" w-[300px] bg-customColor mt-2 px-4 py-3 rounded text-white font-space-grotesk text-sm font-space-grotesk">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default InputForm;
