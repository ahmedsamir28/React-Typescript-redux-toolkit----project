import Button from "../UI-items/Button"

const Landing = () => {
    return (
        <>
            <div className="hero mt-4 rounded-lg min-h-96 bg-base-200 shadow-lg border border-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-5xl font-bold text-warning">Are You Hungry</h1>
                        <p className="py-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempora  iste ea neque, enim assumenda? Praesentium 
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
