import { useState } from "react";
import { IData } from "../../Interface/Index";
import Modal from "../../UI-items/Modal";
import Button from "../../UI-items/Button";
import { Link } from "react-router-dom";
import { useDeleteDataMutation } from "../../Redux/Query/dataSlice";

interface DataProps {
    data: IData;
    index: number;
}

const BodyOfTable = ({ data, index }: DataProps) => {
    const [deleteData, { isLoading: isDeleting, isSuccess }] = useDeleteDataMutation();

    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

    const closeConfirmModal = () => setIsOpenConfirmModal(false);

    const removeProductHandler = (id: number) => {
        console.log('Removing product with ID:', id);
        deleteData(id); // Assuming deleteData expects an ID to delete the product
        closeConfirmModal(); // Close the confirmation modal after deletion
        console.log(isSuccess);


        // try to use useEffect
        
    };

    const openConfirmModal = () => setIsOpenConfirmModal(true);

    return (
        <tr key={data.id} className="text-center border-b border-gray-700">
            <td className="py-2 px-4">{index + 1}</td>
            <td className="py-2 px-4">{data.attributes.title}</td>
            <td className="py-2 px-4">{data.attributes.Category.data.attributes.title}</td>
            <td className="py-2 px-4">
                <img
                    src={data.attributes.thumbnail.data.attributes.formats.medium.url}
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
                    <Button onClick={openConfirmModal} className="p-2 bg-pink-600 rounded hover:bg-pink-700">
                        <i className="fa-solid fa-trash-can"></i>
                    </Button>
                    <Button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
                        <i className="fa-solid fa-pencil"></i>
                    </Button>
                </div>
            </td>
            <Modal
                isOpen={isOpenConfirmModal}
                closeModal={closeConfirmModal}
                title="Are you sure you want to remove this Product from your Store?"
                description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
            >
                <div className="flex items-center space-x-3">
                    <Button className="bg-[#c2344d] hover:bg-red-800 py-2 px-3" onClick={() => removeProductHandler(50)}>
                        Yes, remove
                    </Button>
                    <Button type="button" className="bg-[#f5f5fa] hover:bg-gray-300 !text-black py-2 px-3" onClick={closeConfirmModal}>
                        Cancel
                    </Button>
                </div>
            </Modal>
        </tr>
    );
};

export default BodyOfTable;
