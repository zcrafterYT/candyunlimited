import CommonListing from "@/components/commonListing";
import { getAllProducts } from "@/services/product";





export default async function AdminAddNewProduct(){

  const allProducts = await getAllProducts()
  console.log(allProducts);

  return <CommonListing data={allProducts && allProducts.data}/>

}