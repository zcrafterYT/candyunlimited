import CommonListing from "@/components/commonListing";
import { getAllUS } from "@/services/product";







export default async function getAllCLientUS(){

  const allUS = await getAllUS()
  console.log(allUS.category);

  return <CommonListing data={allUS && allUS.data}/>

}