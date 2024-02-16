import CommonListing from "@/components/commonListing";
import { getAllSnacks } from "@/services/product";






export default async function getAllClientSnacks(){

  const allProducts = await getAllSnacks()
       console.log(allProducts.category);

 return <CommonListing data={allProducts && allProducts.data}/>
}