import CommonListing from "@/components/commonListing";
import { getAllJP } from "@/services/product";







export default async function getAllCLientJP(){

  const allJP = await getAllJP()
  console.log(allJP.category);

  return <CommonListing data={allJP && allJP.data}/>
}