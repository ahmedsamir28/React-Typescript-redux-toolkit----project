import { useParams } from "react-router-dom";
import DetailsCard from "../Components/Product/DetailsCard"
import { useGetDataByIdQuery } from "../Redux/Query/dataSlice";



const PageDetails = () => {
  const { id } = useParams();
  
  const { data,isLoading } = useGetDataByIdQuery(id)

  

  return (
    <>
      <DetailsCard data={data} isLoading={isLoading} />
    </>
  )
}

export default PageDetails