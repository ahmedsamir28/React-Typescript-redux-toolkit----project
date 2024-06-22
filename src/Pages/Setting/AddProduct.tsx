import { FormEvent } from "react"
import { usePostDataMutation } from "../../Redux/Query/dataSlice"
import Button from "../../UI-items/Button"
import Header from "../../UI-items/Header"
import PageDescription from "../../UI-items/PageDescription"
import SideMenu from "../../Utils/SideMenu"
import avatar from '../../assets/avatar.png'
import Input from "../../UI-items/Input"
import { formInputsList } from "../../data"

const AddProduct = () => {
    const [postData, { isLoading, isError, isSuccess }] = usePostDataMutation();
    // const [productName, setProductName] = useState('');
    // const [productDescription, setProductDescription] = useState('');
    // const [productPrice, setProductPrice] = useState('');
    // const [productImage, setProductImage] = useState<File | null>(null);


    // ** Render Form Inputs
    const renderFormInputs = formInputsList.map(input => (
        <div key={input.id} className="flex flex-col">
            <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">
                {input.label}
            </label>
            <Input
                type={input.type}
                name={input.name}
                id={input.id}
            />
        </div>
    ))

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

    }
    return (
        <div className="flex items-start gap-5">
            <div className="my-5">
                <SideMenu />
            </div>

            <div className="mt-5 ">
                <div>
                    <Header>add a new product ...</Header>
                    <PageDescription >Here you can add a new product to the product list</PageDescription>
                </div>

                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="capitalize text-sm font-medium mb-2">Product image</div>
                    <label htmlFor="upload-photo">
                        <img
                            src={avatar}
                            alt="fzx"
                            height="100px"
                            width="120px"
                            style={{ cursor: "pointer" }}
                        />
                    </label>
                    <input className="hidden"
                        type="file"
                        name="photo"
                        id="upload-photo"
                    />
                    <div className="flex flex-col gap-5 items-start mt-5">
                        {renderFormInputs}
                        <input type="text" placeholder="Name of the meal" className=" input input-bordered input-warning capitalize w-[700px] " />
                        <textarea className="textarea textarea-warning w-[700px] capitalize" placeholder="Description of the meal"></textarea>
                        <input type="number" placeholder="Price of the meal" className="input input-bordered input-warning w-[700px]" />
                        <div>
                            <select className="select select-warning w-[700px]">
                                <option disabled selected>Pick a pizza</option>
                                <option>Cheese</option>
                                <option>Veggie</option>
                                <option>Pepperoni</option>
                                <option>Margherita</option>
                                <option>Hawaiian</option>
                            </select>
                        </div>

                    </div>
                </form>

                <div className="flex justify-end mt-5 w-[800] ">
                    <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2 ">
                        save edits
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default AddProduct
