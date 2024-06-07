import Button from "../UI-items/Button"
import Input from "../UI-items/Input"

interface IProps {

}

const LoginPage = () => {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-center mb-4 text-3xl font-semibold">
                Login to get access!
            </h2>
            <form className="space-y-4" >

                <Input/>
                <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default LoginPage
