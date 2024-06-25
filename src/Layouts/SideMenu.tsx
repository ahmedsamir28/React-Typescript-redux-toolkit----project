import { Link } from "react-router-dom"


const SideMenu = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200  p-4 w-60">
            <div className="flex flex-col items-center py-4">
                <div className="w-16 h-16 bg-base-100 border-2 shadow border-base-300 rounded-full flex items-center justify-center">
                    <span className=" text-xl font-bold">A</span>
                </div>
                <h2 className="mt-2 text-xl font-bold">Sirigiri SaiPramod</h2>
                <h4 className="mt-2 text-sm">gamil@gmail.com</h4>
            </div>
            <nav className="flex flex-col flex-grow gap-2">
                <Link to="/dashboard" className="flex items-center py-2 px-4 bg-warning text-gray-900 rounded-md mb-1 ">
                    <span className="material-icons"><i className="fa-solid fa-layer-group"></i></span>
                    <span className="ml-2 capitalize "> products manage</span>
                </Link>
                <Link to="/add-category" className="flex items-center py-2 px-4 bg-gray-800  text-white  rounded-md mb-1">
                    <span className="material-icons"><i className="fa-solid fa-square-plus"></i></span>
                    <span className="ml-2 capitalize"> add category</span>
                </Link>



                <Link to="/add-product" className="flex items-center py-2 px-4 bg-gray-800 rounded-md mb-1 text-white">
                    <span className="material-icons"><i className="fa-solid fa-square-plus"></i></span>
                    <span className="ml-2 capitalize">Add product</span>
                </Link>
            </nav>
        </div>
    )
}

export default SideMenu
