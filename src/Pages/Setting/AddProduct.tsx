import Button from "../../UI-items/Button"
import Header from "../../UI-items/Header"
import PageDescription from "../../UI-items/PageDescription"
import SideMenu from "../../Utils/SideMenu"
import avatar from '../../assets/avatar.png'

const AddProduct = () => {
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

                <div className="mt-5">
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
                        <input type="text" placeholder="Name of the meal" className=" input input-bordered input-warning capitalize w-[700px] " />
                        <textarea className="textarea textarea-warning w-[700px]" placeholder="Description of the meal"></textarea>
                        <input type="number" placeholder="Price of the meal" className="input input-bordered input-warning w-[700px]" />
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
