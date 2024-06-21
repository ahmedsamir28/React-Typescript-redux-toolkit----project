import SettingProductCard from "../../Components/Product/SettingProductCard";
import { ICategory, IData } from "../../Interface/Index";
import { useGetCategoriesQuery } from "../../Redux/Query/categoriesSlice";
import { useGetDataQuery } from "../../Redux/Query/dataSlice";
import Header from "../../UI-items/Header";
import PageDescription from "../../UI-items/PageDescription";
import SideMenu from "../../Utils/SideMenu";

const ProductsPage = () => {
    // Use the query hook
    const { data, isError, isLoading } = useGetDataQuery();
    const { data: categories, isError: error, isLoading: loading } = useGetCategoriesQuery();

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
                    {!loading && isError ? <p className="text-center">There is no data</p> : null}

                    {!loading && !error && data && categories.data.map((data: ICategory) => (
                            <li key={data.id} className=" py-1 cursor-pointer  hover:text-warning">{data.attributes.title}</li>
                    ))}
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
