import { FormEvent, useEffect, useState } from "react";
import { usePostDataMutation } from "../../Redux/Query/dataSlice";
import { useGetCategoriesQuery } from "../../Redux/Query/categoriesSlice";
import Button from "../../UI-items/Button";
import Header from "../../UI-items/Header";
import PageDescription from "../../UI-items/PageDescription";
import SideMenu from "../../Layouts/SideMenu";
import avatar from '../../assets/avatar.png';
import Input from "../../UI-items/Input";
import { formInputsList } from "../../data";
import { ICategory, IProduct } from "../../Interface/Index";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
    const defaultProduct: IProduct = {
        title: '',
        description: '',
        price: 0,
    };

    const [postData, { isLoading: isPosting, isSuccess }] = usePostDataMutation();
    const { data: categoriesData, isError: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery();

    const [product, setProduct] = useState<IProduct>(defaultProduct);
    const [img, setImg] = useState(avatar);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [Category, setCategory] = useState<string>('');

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0]);
        }
    };

    const onSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, description, price } = product;

        if (!title || !description || price <= 0 || !Category || !selectedFile) {
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

        formData.append('files.thumbnail', selectedFile);

        try {
            await postData(formData).unwrap();
            toast.success("Product posted successfully!", {
                position: "bottom-center",
                duration: 1500,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
            resetForm();
        } catch (error) {
            toast.error("Failed to post product!", {
                position: "bottom-center",
                duration: 2000,
                style: {
                    backgroundColor: "black",
                    color: "white",
                    width: "fit-content",
                },
            });
        }
    };

    const resetForm = () => {
        setProduct(defaultProduct);
        setImg(avatar);
        setSelectedFile(null);
        setCategory('');
    };

    useEffect(() => {
        if (isSuccess) {
            resetForm();
        }
    }, [isSuccess]);

    const renderFormInputs = formInputsList.map(input => (
        <div key={input.id} className="flex flex-col w-[700px]">
            <label htmlFor={input.id} className="text-sm font-medium mb-2">
                {input.label}
            </label>
            <Input
                type={input.type}
                name={input.name}
                value={product[input.name  as keyof IProduct]} 
                id={input.id}
                onChange={handleChange}
                placeholder={input.placeholder}
            />
        </div>
    ));
    

    return (
        <div className="flex items-start gap-5" style={{ minHeight: '800px' }}>
            <div className="my-5">
                <SideMenu />
            </div>
            <div className="mt-5">
                <div>
                    <Header>Add a new product</Header>
                    <PageDescription>Here you can add a new product to the product list</PageDescription>
                </div>

                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="capitalize text-sm font-medium mb-2">Product image</div>
                    <label htmlFor="upload-photo">
                        <img
                            src={img}
                            alt="Product"
                            height="100px"
                            width="120px"
                            style={{ cursor: "pointer" }}
                        />
                    </label>
                    <input className="hidden"
                        type="file"
                        name="photo"
                        id="upload-photo"
                        onChange={onImageChange}
                    />
                    <div className="flex flex-col gap-5 items-start mt-5">
                        {renderFormInputs}
                        <div className="mt-5">
                            <select className="select select-warning w-[700px]" onChange={onSelectCategory} defaultValue="">
                                <option disabled value="">Pick a category</option>
                                {!categoriesLoading && !categoriesError && categoriesData && categoriesData.data.map((category: ICategory, index: number) => (
                                    <option key={index} value={category.id}>{category.attributes.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end mt-5 w-[800px]">
                        <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2" type="submit" disabled={isPosting}>
                            {isPosting ? 'Saving...' : 'Save Edits'}
                        </Button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default AddProduct;
