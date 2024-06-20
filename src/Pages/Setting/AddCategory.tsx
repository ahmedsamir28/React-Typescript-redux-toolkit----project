import Header from "../../UI-items/Header"
import PageDescription from "../../UI-items/PageDescription"
import SideMenu from "../../Utils/SideMenu"

const AddCategory = () => {
    return (
        <div className="flex items-start gap-5">
        <div className="my-5">
            <SideMenu/>
        </div>

        <div className="mt-5 ">
            <div>
                <Header>add your category ...</Header>
                <PageDescription >Here you can add a new category to the categories list</PageDescription>
            </div>

        </div>


    </div>
    )
}

export default AddCategory
