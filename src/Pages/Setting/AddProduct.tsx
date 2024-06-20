import Header from "../../UI-items/Header"
import PageDescription from "../../UI-items/PageDescription"
import SideMenu from "../../Utils/SideMenu"

const AddProduct = () => {
    return (
        <div className="flex items-start gap-5">
        <div className="my-5">
            <SideMenu/>
        </div>

        <div className="mt-5 ">
            <div>
                <Header>add your product ...</Header>
                <PageDescription >Here you can add a new product to the product list</PageDescription>
            </div>
           

        </div>


    </div>
    )
}

export default AddProduct
