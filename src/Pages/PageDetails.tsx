import { useParams } from "react-router-dom";
import DetailsCard from "../Components/Product/DetailsCard"
import { useGetDataByIdQuery } from "../Redux/Query/dataSlice";
import { useEffect } from "react";



const PageDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetDataByIdQuery(id)


  useEffect(() => {
    if (data && !isLoading) {
      document.title = `${data.data.attributes.title}`;
    }
  }, [data, isLoading]);
  return (
    <>
      <DetailsCard data={data} isLoading={isLoading} />
    </>
  )
}

export default PageDetails