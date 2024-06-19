import { useParams } from "react-router-dom";
import DetailsCard from "../Components/Product/DetailsCard"
import { useGetDataByIdQuery } from "../Redux/Query/dataSlice";



const PageDetails = () => {
  const { id } = useParams();
  
  const { data,error,isLoading } = useGetDataByIdQuery(id)

  


      if (isLoading) {
        console.log('Loading...');
    } else if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data.data);
        if (data && data.data) {
            console.log('Products:', data.data);
        } else {
            console.log('No products found in data.');
        }
    }

  return (
    <>
      <DetailsCard data={data} isLoading={isLoading} />
    </>
  )
}

export default PageDetails