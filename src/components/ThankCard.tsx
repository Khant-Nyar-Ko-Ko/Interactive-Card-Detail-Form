import IconTick from "./Tick";

interface Props {
  complete : (confirm : boolean) => void
}

const ThankCard : React.FC<Props> = ({complete}) => {

  const handleContinue = () => {
    complete(false);
  }

  return (
    <div className=" flex flex-col justify-center items-center gap-7">
      <div className=" w-16 h-16 rounded-full bg-gradient-to-b from-secondaryColor-start to-secondaryColor-end text-center flex justify-center items-center">
        <IconTick color="white" />
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h2 className=" text-2xl uppercase font-space-grotesk text-customColor">
          Thank You!
        </h2>
        <p className=" text-slate-400 font-space-grotesk">
          We've added your card details
        </p>
      </div>
      <button onClick={handleContinue} className=" w-[300px] bg-customColor mt-2 px-4 py-3 rounded text-white font-space-grotesk text-sm font-space-grotesk">
        Continue
      </button>
    </div>
  );
};

export default ThankCard;
