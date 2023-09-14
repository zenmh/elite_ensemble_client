import { useState } from "react";
import { Btn, IconBtn, Inp } from "@/components/shared";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";

interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onClick = () => {
    if (passwordType === "password") setPasswordType("text");
    else setPasswordType("password");
  };

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <section className="flex flex-row justify-center items-center min-h-screen">
      <div className="border-2 border-neutral-700 p-2 rounded-lg mt-2">
        <h2 className="text-2xl font-bold text-neutral-300 mb-4 text-start">
          Create One To Join Elite Class
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-[300px] md:w-[500px]"
        >
          <Inp
            register={register}
            name="name"
            type="text"
            placeholder="Your Name"
            error_message="Name is required !"
          />
          {errors.name && (
            <p className="text-rose-400 font-medium">{errors.name.message}</p>
          )}
          <Inp
            register={register}
            name="email"
            type="email"
            placeholder="Enter Email"
            error_message="Email is required !"
          />
          {errors.email && (
            <p className="text-rose-400 font-medium">{errors.email.message}</p>
          )}
          <div className="relative">
            <Inp
              register={register}
              name="password"
              type={passwordType}
              placeholder="Password"
              error_message="Password is required !"
            />
            <button
              type="button"
              onClick={onClick}
              className="absolute top-0 right-4 transform z-10 cursor-auto text-gray-400 hover:text-gray-500 p-3 text-xl"
            >
              {passwordType === "password" ? (
                <AiFillEye />
              ) : (
                <AiFillEyeInvisible />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-rose-400 font-medium">
              {errors.password.message}
            </p>
          )}
          <Btn label="Sign Up" size="lg" variant="primary" type="submit" />
        </form>
        <p className="text-right mt-2 mb-1">
          I already have one!&nbsp;
          <Link
            href="/signin"
            className="text-blue-500 hover:text-blue-600 underline transition duration-200"
          >
            Sign in
          </Link>
        </p>
        <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="flex flex-row my-5 gap-4">
          <IconBtn
            onClick={() => signIn("google", { callbackUrl: "/" })}
            label="Google"
          >
            <FcGoogle />
          </IconBtn>
          <IconBtn
            onClick={() => signIn("github", { callbackUrl: "/" })}
            label="GitHub"
          >
            <AiFillGithub />
          </IconBtn>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
