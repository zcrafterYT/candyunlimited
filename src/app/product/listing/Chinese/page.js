import CommonListing from "@/components/commonListing";
import { getAllZH } from "@/services/product";







export default async function getAllCLientZH(){

  const allZH = await getAllZH()
  console.log(allZH.category);

  return <CommonListing data={allZH && allZH.data}/>

}