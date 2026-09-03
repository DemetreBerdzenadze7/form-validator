import { useState } from "react";
import inputs from "./inputs.json";

const Main = () => {
  const [isEmpty, setIsEmpty] = useState<number[]>([]);
  const [isFull, setIsFull] = useState<number[]>([]);

  function foo() {
    if (isFull.length === 0) {
      for (let num of inputs) {
        setIsEmpty((prev) => [...prev, num.id]);
      }
      return;
    }
  }

  function handleInputValue(e: string, id: number) {
    if (e.length === 0 && isFull.includes(id)) {
      setIsEmpty((prev) => [...prev, id]);
      setIsFull((prev) => prev.filter((num) => num !== id));
    } else {
      setIsEmpty((prev) => prev.filter((num) => num !== id));
      setIsFull((prev) => [...prev, id]);
    }
  }

  return (
    <div className="flex flex-col">
      <button className="bg-trial text-white py-4.5 px-16.5 text-center rounded-[10px] max-w-118.5 text-[15px] font-medium leading-[1.73] tracking-[0.27px] hover:bg-trial-2  ">
        <span className="font-bold ">Try it free 7 days</span> then $20/mo.
        thereafter
      </button>
      <div className="bg-white p-6 mt-6 max-w-118.5 rounded-[10px] lg:px-10 lg:py-8">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {inputs.map((input) => (
            <input
              key={input.id}
              type={input.type}
              placeholder={input.txt}
              className={
                isEmpty.includes(input.id)
                  ? "border-2 border-error p-4 rounded-[5px] placeholder:text-txt text-txt outline-error"
                  : "border border-[#dedede] p-4 rounded-[5px] placeholder:text-txt text-txt"
              }
              onChange={(e) =>
                handleInputValue(e.target.value.trim(), input.id)
              }
            />
          ))}
          <button
            type="submit"
            className="bg-submit text-[15px] text-white font-semibold py-4 tracking-[2px] leading-[1.75] hover:bg-light-submit rounded-[5px] "
            onClick={() => foo()}
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </form>

        <p className="mt-2 text-[11px] leading-[1.9] font-medium text-light-trial text-center ">
          By clicking the button, you are agreeing to our
          <span className="text-error font-bold"> Terms and Servicess</span>
        </p>
      </div>
    </div>
  );
};

export default Main;
