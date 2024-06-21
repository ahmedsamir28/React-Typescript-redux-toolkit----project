import Button from "../UI-items/Button";
import Input from "../UI-items/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../validation";
import { LOGIN_FORM } from "../data";
import InputErrorMessage from "../UI-items/InputErrorMessage";
import { authLogin } from "../Redux/action";
import { RootState, useAppDispatch } from "../Redux/store";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import { useEffect } from "react";

interface IFormInput {
    identifier: string;
    password: string;
}

const LoginPage = () => {
    const { user, error } = useSelector(({ login }: RootState) => login);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const successLogin = () => {
            if (user) {
                toast.success("You will navigate to the home page after 2 seconds.", {
                    position: "bottom-center",
                    duration: 1500,
                    style: {
                        backgroundColor: "black",
                        color: "white",
                        width: "fit-content",
                    },
                });

                setTimeout(() => {
                    location.replace("/");
                }, 2000);
            }

            if (error && error instanceof AxiosError) {
                if (error.response && error.response.status === 400) {
                    toast.error(
                        `${error.response.data.error.message}`,
                        {
                            position: "bottom-center",
                            duration: 1500,
                            style: {
                                backgroundColor: "red",
                                color: "white",
                                width: "fit-content",
                            },
                        }
                    );
                } else {
                    toast.error(
                        "An unexpected error occurred. Please try again later.",
                        {
                            position: "bottom-center",
                            duration: 1500,
                            style: {
                                backgroundColor: "red",
                                color: "white",
                                width: "fit-content",
                            },
                        }
                    );
                }
            }
        };

        successLogin();
    }, [user, error]);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        dispatch(authLogin(data));
    };

    const renderLoginForm = LOGIN_FORM.map(({ name, placeholder, type, validation }, idx) => {
        return (
            <div key={idx}>
                <Input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
                {errors[name as keyof IFormInput] && (
                    <InputErrorMessage message={errors[name as keyof IFormInput]?.message || ''} />
                )}
            </div>
        );
    });

    return (
        <div className="max-w-md my-20 mx-auto">
            <h2 className="text-center mb-4 text-3xl font-semibold">
                Login to get access!
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 bg-base-200 border-2 border-base-300 rounded-lg p-5"
            >
                <div className="flex flex-col gap-3">
                    {renderLoginForm}
                </div>

                <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2" width="w-full">
                    Login
                </Button>
            </form>
            <Toaster />
        </div>
    );
};

export default LoginPage;
