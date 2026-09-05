import { useState } from "react";
import inputs from "./inputs.json";

const Main = () => {
  interface Values {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const [values, setValues] = useState<Values>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  interface Errors {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>): void {
    e.preventDefault();
    setErrors({
      firstName: !values.firstName ? "First name cannot be empty" : "",
      lastName: !values.lastName ? "Last name cannot be empty" : "",
      email: !values.email
        ? "Email cannot be empty"
        : !emailRegex.test(values.email)
          ? "Looks like this is not an email"
          : "",
      password: !values.password ? "Password cannot be empty" : "",
    });
  }
  return (
    <div className="flex flex-col">
      <button className="bg-trial text-white py-4.5 px-16.5 text-center rounded-[10px] max-w-118.5 text-[15px] font-medium leading-[1.73] tracking-[0.27px] hover:bg-trial-2  ">
        <span className="font-bold ">Try it free 7 days</span> then $20/mo.
        thereafter
      </button>
      <div className="bg-white p-6 mt-6 max-w-118.5 rounded-[10px] lg:px-10 lg:py-8">
        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          {inputs.map((input) => (
            <div key={input.id} className="flex flex-col">
              <label htmlFor={input.name}></label>
              <input
                type={input.type}
                placeholder={input.txt}
                name={input.name}
                id={input.name}
                value={values[input.name as keyof Values]}
                onChange={(e) => handleChange(e)}
                className={`w-full border p-4 rounded-[5px] placeholder:text-txt text-txt   ${
                  errors[input.name as keyof Errors]
                    ? "border-error bg-[url(/images/icon-error.svg)] bg-no-repeat bg-position-[right_1rem_center] "
                    : "border-[#dedede]"
                }`}
              />
              <span className="self-end text-[11px] font-medium text-error italic leading-[1.55]">
                {errors[input.name as keyof Errors]}
              </span>
            </div>
          ))}
          <button
            type="submit"
            className="bg-submit text-[15px] text-white font-semibold py-4 tracking-[2px] leading-[1.75] hover:bg-light-submit rounded-[5px] "
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
