import { Link, useLocation } from "react-router-dom"
import Button from "../UI-items/Button"
import { useSelector } from "react-redux";
import { selectCart } from "../Redux/Slice/cartSlice";

const NavBar = () => {
    const { pathname } = useLocation();

    const {cartProducts} = useSelector(selectCart)

    const storageKey = "user";
    const userDataString = localStorage.getItem(storageKey);
    const userData = userDataString ? JSON.parse(userDataString) : null;

    const onLogout = () => {
        localStorage.removeItem(storageKey);
        setTimeout(() => {
            location.replace(pathname);
        }, 1000);
    };
    return (
        <div className=" shadow-xl  bg-base-300 ">
            <div className="container navbar">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="flex-none">

                    {userData ? (<>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="">
                                <div className="bg-base-100 hover:bg-base-200 font-medium  px-3 py-2  rounded-lg  duration-200 ">{userData.user.username}</div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><Link to="/dashboard">Settings</Link></li>
                                <li onClick={onLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    </>) : (<>
                        <Link className="px-3 py-2" to="/login">
                            <Button className="bg-warning hover:bg-amber-500 font-medium  px-3 py-2">
                                Login
                            </Button>
                        </Link>
                        <Link className="px-3 py-2" to="/register">
                            <Button className="bg-warning hover:bg-amber-500 font-medium  px-3 py-2">
                                Register
                            </Button>
                        </Link>
                    </>)}



                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartProducts.length}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cartProducts.length} Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <Link to="/cart" className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

export default NavBar
