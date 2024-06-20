import SettingProductCard from "../../Components/Product/SettingProductCard";
import { IData } from "../../Interface/Index";
import { useGetDataQuery } from "../../Redux/Query/dataSlice";
import Header from "../../UI-items/Header";
import PageDescription from "../../UI-items/PageDescription";
import SideMenu from "../../Utils/SideMenu";

const ProductsPage = () => {
    // Use the query hook
    const { data, isError, isLoading } = useGetDataQuery();
    return (
        <div className="flex items-start gap-5">
            <div className="my-5">
                <SideMenu />
            </div>

            <div className="mt-5 ">
                <div>
                    <Header>manage your products ...</Header>
                    <PageDescription >Here all of your products and you can delete or modify the product</PageDescription>
                </div>
                <ul className="flex items-center gap-5 capitalize text-sm mt-5  ">
                    <li className=" py-1 cursor-pointer  hover:text-warning">category-1</li>
                    <li className=" py-1 cursor-pointer  hover:text-warning">category-1</li>
                    <li className=" py-1 cursor-pointer  hover:text-warning">category-1</li>
                    <li className=" py-1 cursor-pointer  hover:text-warning">category-1</li>
                </ul>

                <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 p-2 m-5 rounded-md">
                    {!isLoading && isError ? <p className="text-center">There is no data</p> : null}

                    {!isLoading && !isError && data && data.data.map((data: IData) => (
                        <div className="">
                            <SettingProductCard key={data.id} data={data} isLoading={isLoading} />
                        </div>
                    ))}

                </div>

            </div>


        </div>
    );
};

export default ProductsPage;
