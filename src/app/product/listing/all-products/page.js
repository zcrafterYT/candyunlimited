import CommonListing from "@/components/commonListing";
import { getAllProducts } from "@/services/product";





export default async function getAllClientProducts(){

  const allProducts = await getAllProducts()
       console.log(allProducts.category);

 return <CommonListing data={allProducts && allProducts.data}/>

}