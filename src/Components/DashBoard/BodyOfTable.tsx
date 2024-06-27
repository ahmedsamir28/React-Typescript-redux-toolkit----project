import { useState, useEffect, FormEvent } from "react";
import { ICategory, IData, IProduct } from "../../Interface/Index";
import Modal from "../../UI-items/Modal";
import Button from "../../UI-items/Button";
import { Link } from "react-router-dom";
import { useDeleteDataMutation, useUpdateDataMutation } from "../../Redux/Query/dataSlice";
import toast, { Toaster } from "react-hot-toast";
import Input from "../../UI-items/Input";
import { useGetCategoriesQuery } from "../../Redux/Query/categoriesSlice";
import { TProductName } from "../../types";

interface DataProps {
    data: IData;
    index: number;
}

const BodyOfTable = ({ data, index }: DataProps) => {
    const [putData, { isLoading: isPosting, isSuccess:updateIsSuccess }] = useUpdateDataMutation();
    const [deleteData, { isLoading, isSuccess, isError }] = useDeleteDataMutation();
    const { data: categoriesData, isError: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery();

    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    const defaultProduct: IProduct = {
        title: '',
        description: '',
        price: 0,
    };

    const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
    const [Category, setEditCategory] = useState<string>('');

    const [selectedEditFile, setSelectedEditFile] = useState<File | null>(null);

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedEditFile(event.target.files[0]);
        }
    };

    
    const onSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEditCategory(e.target.value);
    };

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
            setIsOpenConfirmModal(false);
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

    const openEditModal = () => {
        setProductToEdit(data.attributes);
        setIsOpenEditModal(true);
    };

    const handleChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProductToEdit({
            ...productToEdit,
            [name]: value,
        }
        );
    };


    const handleSubmitEdit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, description, price } = productToEdit;
        if (!title || !description || price <= 0 || !Category || !selectedEditFile) {
            toast.error("Please complete all fields", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
            return;
        }

        const formData = new FormData();
        formData.append('data', JSON.stringify({
            title,
            description,
            price: price.toString(),
            Category
        }));

        formData.append('files.thumbnail', selectedEditFile);

        try {
            await putData({id:data.id, formData}).unwrap();
            toast.success("Product updated successfully!", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
            resetForm();
            setIsOpenEditModal(false);

        } catch (error) {
            toast.error("Failed to update product!", {
                position: "bottom-center",
                duration: 2000,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
        }
        
        
        // Handle edit form submission logic
    };

    const resetForm = () => {
        setProductToEdit(defaultProduct);
        setSelectedEditFile(null);
        setEditCategory('');
    };

    useEffect(() => {
        if (updateIsSuccess) {
            resetForm();
        }
    }, [updateIsSuccess]);

    const removeProductHandler = (id: number) => {
        deleteData(id);
    };

    const renderProductEdit = (id: string, label: string, name: TProductName, type: string) => {
        return (
            <div className="flex flex-col">
                <label htmlFor={id} className="mb-2 text-sm font-medium">
                    {label}
                </label>
                <Input className="w-96" type={type} id={id} name={id} value={productToEdit[name]} onChange={handleChangeEdit} />
            </div>
        );
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
                    <Button onClick={openEditModal} className="p-2 bg-warning rounded hover:bg-amber-500">
                        <i className="fa-solid fa-pencil"></i>
                    </Button>
                </div>
            </td>

            <Modal isOpen={isOpenEditModal} closeModal={() => setIsOpenEditModal(false)} title="Edit Product">
                <form className='space-y-3' onSubmit={handleSubmitEdit}>
                    <label htmlFor="upload-photo" className="capitalize text-sm font-medium mb-2">
                        Product image
                    </label>
                    <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                        className="file-input file-input-bordered file-input-warning w-96 "
                        onChange={onImageChange}
                    />
                    <div className="flex flex-col gap-5 items-start mt-5">
                        {renderProductEdit('title', 'Title', 'title', 'text')}
                        {renderProductEdit('description', 'Description', 'description', 'text')}
                        {renderProductEdit('price', 'price', 'price', 'number')}

                        <div className="mt-5">
                            <select className="select select-warning w-96" onChange={onSelectCategory} defaultValue="">
                                <option disabled value="">Pick a category</option>
                                {!categoriesLoading && !categoriesError && categoriesData && categoriesData.data.map((category: ICategory, index: number) => (
                                    <option key={index} value={category.id}>{category.attributes.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2" disabled={isPosting}>
                        {isPosting ? 'Updating...' : 'Save update'}

                        </Button>
                        <Button type="button" onClick={() => setIsOpenEditModal(false)} className="bg-[#f5f5fa] hover:bg-gray-300 font-medium capitalize px-3 py-2 !text-black">Cancel</Button>
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
                        {isLoading ? (
                            <>
                                <span className="loading loading-spinner loading-xs"></span> Yes, remove
                            </>
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
