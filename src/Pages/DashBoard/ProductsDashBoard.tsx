import { IData } from "../../Interface/Index";
import { useGetDataQuery } from "../../Redux/Query/dataSlice";
import Header from "../../UI-items/Header";
import PageDescription from "../../UI-items/PageDescription";
import SideMenu from "../../Layouts/SideMenu";
import BodyOfTable from "../../Components/DashBoard/BodyOfTable";

const ProductsDashBoard = () => {
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
                    <PageDescription>Here all of your products and you can delete or modify the product</PageDescription>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 p-2 m-5 rounded-md">

                    <div className="w-[1000px]">
                        <table className="min-w-full bg-gray-800 text-white">
                            {!isLoading && isError ? <p className="text-center">There is no data</p> : <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-700">ID</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Title</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Category</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Thumbnail</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Price</th>
                                    <th className="py-2 px-4 border-b border-gray-700"></th>
                                    <th className="py-2 px-4 border-b border-gray-700">Action</th>
                                </tr>
                            </thead>}

                            <tbody>
                                {isLoading ? (
                                    // Skeleton loader
                                    [...Array(5)].map((_, index) => (
                                        <tr key={index} className="text-center border-b border-gray-700 animate-pulse">
                                            <td className="py-2 px-4">
                                                <div className="h-4 bg-gray-700 rounded"></div>
                                            </td>
                                            <td className="py-2 px-4">
                                                <div className="h-4 bg-gray-700 rounded"></div>
                                            </td>
                                            <td className="py-2 px-4">
                                                <div className="h-4 bg-gray-700 rounded"></div>
                                            </td>
                                            <td className="py-2 px-4">
                                                <div className="w-10 h-10 bg-gray-700 rounded-full mx-auto"></div>
                                            </td>
                                            <td className="py-2 px-4">
                                                <div className="h-4 bg-gray-700 rounded"></div>
                                            </td>
                                            <td className="py-2 px-4">
                                                <div className="h-4 bg-gray-700 rounded"></div>
                                            </td>
                                            <td className="py-2 px-4">
                                                <div className="flex justify-center space-x-2">
                                                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                                                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                                                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    data && data.data.map((product: IData, index: number) => (
                                        <BodyOfTable key={product.id} data={product} index={index} />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDashBoard;
