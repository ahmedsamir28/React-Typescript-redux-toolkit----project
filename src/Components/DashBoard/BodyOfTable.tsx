import { useState, useEffect, FormEvent } from "react";
import { IData } from "../../Interface/Index";
import Modal from "../../UI-items/Modal";
import Button from "../../UI-items/Button";
import { Link } from "react-router-dom";
import { useDeleteDataMutation } from "../../Redux/Query/dataSlice";
import toast, { Toaster } from "react-hot-toast";

interface DataProps {
    data: IData;
    index: number;
}

const BodyOfTable = ({ data, index }: DataProps) => {
    const [deleteData, { isLoading, isSuccess, isError }] = useDeleteDataMutation();
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            toast.success("The product has been successfully deleted", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
            setIsOpenConfirmModal(false); // Close the modal after a successful deletion
        } else if (isError) {
            toast.error("The product has not been deleted", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
        }
    }, [isSuccess, isError]);

    const handleSubmitEdit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('====================================');
        console.log("edit products");
        console.log('====================================');
    }

    const removeProductHandler = (id: number) => {
        deleteData(id);
    };

    return (
        <tr key={data.id} className="text-center border-b border-gray-700">
            <td className="py-2 px-4">{index + 1}</td>
            <td className="py-2 px-4">{data.attributes.title}</td>
            <td className="py-2 px-4">{data.attributes.Category.data.attributes.title}</td>
            <td className="py-2 px-4">
                <img
                    src={data.attributes.thumbnail.data?.attributes.formats.medium?.url}
                    alt={data.attributes.title}
                    className="w-10 h-10 rounded-full mx-auto"
                />
            </td>
            <td className="py-2 px-4">{data.attributes.price}</td>
            <td className="py-2 px-4">{data.attributes.stock}</td>
            <td className="py-2 px-4">
                <div className="flex justify-center space-x-2">
                    <Button className="p-2 bg-purple-600 rounded hover:bg-purple-700">
                        <Link to={`/food/${data.id}`}>
                            <i className="fa-solid fa-eye"></i>
                        </Link>
                    </Button>
                    <Button onClick={() => setIsOpenConfirmModal(true)} className="p-2 bg-pink-600 rounded hover:bg-pink-700">
                        <i className="fa-solid fa-trash-can"></i>
                    </Button>
                    <Button onClick={() => setIsOpenEditModal(true)} className="p-2 bg-blue-600 rounded hover:bg-blue-700">
                            <i className="fa-solid fa-pencil"></i>
                    </Button>
                </div>
            </td>


            <Modal isOpen={isOpenEditModal}  closeModal={() => setIsOpenEditModal(false)}title="Edit Product">
                <form className='space-y-3' onSubmit={handleSubmitEdit}>
                    {/* {renderProductEditWithErrorMsg('edit-title', 'Title', 'title')}
                    {renderProductEditWithErrorMsg('edit-description', 'Description', 'description')}
                    {renderProductEditWithErrorMsg('edit-imageURL', 'Image URL', 'imageURL')}
                    {renderProductEditWithErrorMsg('edit-price', 'Price', 'price')} */}

                    {/* <Select
                        selected={productToEdit.category}
                        setSelected={(value) => setProductToEdit({ ...productToEdit, category: value })}
                    /> */}
                    {/* <div className="flex items-center flex-wrap space-x-1">
                        {selectedColors.map((color) => (
                            <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white" style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        ))}
                    </div> */}

                    <div className="flex items-center space-x-3">
                        <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
                        <Button type="button" onClick={() => setIsOpenEditModal(false)} className="bg-[#f5f5fa] hover:bg-gray-300 !text-black">Cancel</Button>
                    </div>
                </form>

            </Modal>

            <Modal
                isOpen={isOpenConfirmModal}
                closeModal={() => setIsOpenConfirmModal(false)}
                title="Are you sure you want to remove this Product from your Store?"
                description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
            >
                <div className="flex items-center space-x-3">
                    <Button className="bg-[#c2344d] hover:bg-red-800 py-2 px-3" onClick={() => removeProductHandler(data.id)} disabled={isLoading}>
                        {isLoading ? (<>
                            <span className="loading loading-spinner loading-xs"></span> Yes remove</>
                        ) : (
                            "Yes, remove"
                        )}
                    </Button>

                    <Button type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black py-2 px-3" onClick={() => setIsOpenConfirmModal(false)}>
                        Cancel
                    </Button>
                </div>
            </Modal>
            <Toaster />
        </tr>
    );
};

export default BodyOfTable;
