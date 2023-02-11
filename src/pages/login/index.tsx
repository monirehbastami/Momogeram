import React, { useCallback, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/base/form/input";
import { AXIOS } from "../../config/axios.config";
import { ApiRoutes } from "../../constant/api.route";
import { AppContext } from "../../context/store";
import { ContextActionTypes } from "../../@types/context/context.types";
import { useNavigate } from "react-router-dom";
interface LoginComponent extends React.PropsWithChildren {}
export const Login: React.FunctionComponent<
  LoginComponent
> = (): JSX.Element => {
  
  const navigation = useNavigate();
  const {state: { user },dispatch } = useContext(AppContext);
  const {register,handleSubmit,formState: { errors }} = useForm();
  
  const handleOnSubmit = (data: any) => {
    // request to server and gets token if password and email is true
    AXIOS.get(
      ApiRoutes.Login + `?user=${data.username}&user=${data.password}`
    ).then((resp) => {
      console.log(resp)
      dispatch({
        type: ContextActionTypes.Login_Success,
        payload: {
          username: resp.data.username,
          token: resp.data.accessToken,
        },
      });
      // attach to all request header
      AXIOS.defaults.headers.common.Authorization =
        "Bearer " + resp.data.accessToken;
      navigation("/");

      // token store somewhere
      localStorage.setItem("token", resp.data.accessToken);
      localStorage.setItem("username", resp.data.username);
    });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-120px)]">
      
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col items-center justify-center py-10 px-5 bg-light-content [&_input]:mt-5 [&_button]:mt-5 rounded-lg w-4/5 md:w-2/5  h-1/2"
      >
        <h1 className="text-center font-bold text-lg text-dark-content">Login Form</h1>
        <Input
          {...register("username", { required: true })}
          placeholder="username: momo" variant="Primary"
        />
        <Input
          type="password"
          {...register("password", { required: true })}
          placeholder="password: 123456"variant="Primary"
        />
        <Input
          type="submit"
          className="py-2.5 px-5 text-sm w-1/2 rounded-md bg-light-btnsecondary text-dark-heading cursor-pointer"
          value="login"
        />
      </form>
    </div>
  );
};
