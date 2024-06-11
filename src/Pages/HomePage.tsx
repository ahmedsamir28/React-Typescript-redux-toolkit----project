import { useSelector } from "react-redux"
import ProductCard from "../Components/Product/ProductCard"
import Button from "../UI-items/Button"
import Image from "../UI-items/Image"
import Landing from "../Utils/Landing"
import { RootState } from "../Redux/store"



const HomePage = () => {
    const {value} = useSelector(({counter}:RootState)=>counter)
    console.log('====================================');
    console.log(value);
    console.log('====================================');

    return (
        <>
            <Landing />
            <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 p-2 m-5 rounded-md">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="mb-16 mt-10 ">
                <section className="bg-base-200 border-2 border-base-300 shadow-lg rounded-lg">
                    <div className="mx-auto max-w-screen-2xl px-4 py-5  sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1  lg:grid-cols-2">

                            <div className="relative z-10 lg:py-16">
                                <div className="relative h-64 sm:h-80 lg:h-full">
                                    <Image
                                        alt=""
                                        url="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D"
                                        className="absolute inset-0 h-96 w-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-center bg-gray-100 rounded-r-lg">
                                <span
                                    className="rounded-l-lg hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                                ></span>

                                <div className="p-8 sm:p-16 lg:p-24">
                                    <h2 className="text-2xl font-bold sm:text-3xl">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                                    </h2>

                                    <p className="mt-4 text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                                        esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                                        architecto eius quis quibusdam fugiat dicta.
                                    </p>


                                    <Button
                                        className="text-sm font-bold mt-8 inline-block rounded border border-amber-400 bg-amber-400 px-12 py-3 text-white hover:bg-transparent hover:text-amber-500 focus:outline-none focus:ring active:text-amber-500">
                                        Get in Touch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>

    )
}

export default HomePage
