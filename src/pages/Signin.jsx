import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg w-80 bg-white p-2 text-center h-max">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your email and password"} />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={"Email/Phone number"}
            label={"Email"}
          />
          <InputBox
            placeholder={"password"}
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/signin",
                  {
                    email,
                    password,
                  }
                );

                localStorage.setItem("token", response.data.token);
              }}
              label={"Sign in"}
            />
          </div>
          <BottomWarning
            label={"Create your account"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
