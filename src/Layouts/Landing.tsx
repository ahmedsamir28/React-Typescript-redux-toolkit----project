import Button from "../UI-items/Button"
import Image from "../UI-items/Image"

const Landing = () => {
    return (
        <>
            <div className="hero mt-6 relative rounded-lg min-h-96 bg-base-200 shadow-lg border border-base-300">
                <svg className="absolute bottom-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className="hero-content flex-col lg:flex-row-reverse  w-full justify-between px-16">
                    <div className="py-5">
                        <Image
                            url="https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="food"
                            className="w-64 rounded-lg shadow-2xl" />
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold text-warning">Are You Hungry ?</h1>
                        <p className="py-6 leading-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernaturiste<br /> ea neque, enim assumenda Praesentium neque
                        </p>
                        <Button className="bg-warning hover:bg-amber-500 text-lg font-bold  px-4 py-3">
                            Get Start
                        </Button>
                    </div>
                </div>
            </div>

            <div className="my-5 text-center">
                <h2 className="text-xl font-bold  sm:text-3xl">Product Collection</h2>

                <p className="mx-auto mt-4 max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                    dicta incidunt est ipsam, officia dolor fugit natus?
                </p>
            </div>

        </>


    )
}

export default Landing
