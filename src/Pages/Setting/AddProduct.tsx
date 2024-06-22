import { FormEvent, useState } from "react"
import { usePostDataMutation } from "../../Redux/Query/dataSlice"
import { useGetCategoriesQuery } from "../../Redux/Query/categoriesSlice"

import Button from "../../UI-items/Button"
import Header from "../../UI-items/Header"
import PageDescription from "../../UI-items/PageDescription"
import SideMenu from "../../Utils/SideMenu"
import avatar from '../../assets/avatar.png'
import Input from "../../UI-items/Input"
import { formInputsList } from "../../data"
import { ICategory, IProduct } from "../../Interface/Index"

const AddProduct = () => {
    const defaultProduct: IProduct = {
        title: '',
        description: '',
        price: 0,
    }
    const [postData, { isLoading, isError, isSuccess }] = usePostDataMutation();
    const { data, isError: error, isLoading: loading } = useGetCategoriesQuery();

    if (isLoading) {
        console.log("Loading...");
    } else if (isError) {
        console.log("Error occurred.");
    } else if (isSuccess) {
        console.log("Success!");
    } else {
        console.log("Idle");
    }
    // const [productName, setProductName] = useState('');
    // const [productDescription, setProductDescription] = useState('');
    // const [productPrice, setProductPrice] = useState('');
    // const [productImage, setProductImage] = useState<File | null>(null);

    const [product, setProduct] = useState<IProduct>(defaultProduct)
    const [img, setImg] = useState(avatar);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [category, setCategory] = useState('');

    //When image change save it 
    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    //when select category store id
    const onSelectCategory = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        // if (e.target.value !== 0) {
        //     await dispatch(getOneCategory(e.target.value))
        // }
        setCategory(e.target.value)
        console.log('====================================');
        console.log(e.target.value);
        console.log('====================================');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })


    }

    // ** Render Form Inputs
    const renderFormInputs = formInputsList.map(input => (
        <div key={input.id} className="flex flex-col w-[700px]">
            <label htmlFor={input.id} className=" text-sm font-medium  mb-2">
                {input.label}
            </label>
            <Input
                type={input.type}
                name={input.name}
                id={input.id}
                onChange={handleChange}
                placeholder={input.placeholder}
            />
        </div>
    ))

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, description, price } = product
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description)
        formData.append('price', price.toString())
        if (selectedFile) {
            formData.append('thumbnail', selectedFile); // Only append if selectedFile is not null
        }
        formData.append('category', category);

        try {
            await postData(formData).unwrap();
            alert('Product posted successfully!');
        } catch (error) {
            console.error('Failed to post product:', error);
        }
    }

    return (
        <div className="flex items-start gap-5">
            <div className="my-5">
                <SideMenu />
            </div>

            <div className="mt-5 ">
                <div>
                    <Header>add a new product ...</Header>
                    <PageDescription >Here you can add a new product to the product list</PageDescription>
                </div>

                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="capitalize text-sm font-medium mb-2">Product image</div>
                    <label htmlFor="upload-photo">
                        <img
                            src={img}
                            alt="fzx"
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
                        {/* <input type="text" placeholder="Name of the meal" className=" input input-bordered input-warning capitalize w-[700px] " />
                        <textarea className="textarea textarea-warning w-[700px] capitalize" placeholder="Description of the meal"></textarea>
                        <input type="number" placeholder="Price of the meal" className="input input-bordered input-warning w-[700px]" /> */}
                        <div className="mt-5">
                            <select className="select select-warning w-[700px]" onChange={onSelectCategory}>
                                <option disabled selected>Pick a pizza</option>
                                {!loading && !error && data && data.data.map((data: ICategory, index: number) => (
                                    <option key={index} >{data.attributes.title}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className="flex justify-end mt-5 w-[800] ">
                        <Button className="bg-warning hover:bg-amber-500 font-medium capitalize px-3 py-2 ">
                            save edits
                        </Button>
                    </div>
                </form>



            </div>

        </div>
    )
}

export default AddProduct
