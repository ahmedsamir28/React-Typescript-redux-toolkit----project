import Button from "../UI-items/Button"
import Input from "../UI-items/Input"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../UI-items/InputErrorMessage";
import { registerSchema } from "../validation";
import { REGISTER_FORM } from "../data";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Redux/store";
import { authRegister } from "../Redux/action";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface IFormInput {
    username: string;
    email: string;
    password: string;
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const { user, error } = useSelector(({ register }: RootState) => register)
    const dispatch = useAppDispatch()

    if (user) {
        // Example of using toast notification upon successful login
        toast.success(
            "You will navigate to the login page after 2 seconds to login.",
            {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            }
        );

        setTimeout(() => {
            navigate("/login");
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

    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>({
        resolver: yupResolver(registerSchema),
    });
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        dispatch(authRegister(data))
    }

    const renderLoginForm = REGISTER_FORM.map(({ name, placeholder, type, validation }, idx) => {
        return (
            <div key={idx}>
                <Input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
                {errors[name] && <InputErrorMessage message={errors[name]?.message} />}

            </div>
        );
    }
    );
    return (
        <div className="max-w-md my-20 mx-auto">
            <h2 className="text-center mb-4 text-3xl font-semibold">
                Register to get access!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}
                className="space-y-4  bg-base-200 border-2 border-base-300  rounded-lg p-5" >
                <div className="flex flex-col gap-3">
                    {renderLoginForm}
                </div>

                <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2" width="w-full">
                    Register
                </Button>
            </form>
            <div><Toaster /></div>
        </div>
    )
}

export default RegisterPage
