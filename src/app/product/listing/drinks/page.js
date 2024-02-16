import CommonListing from "@/components/commonListing";
import { getAllDrinks } from "@/services/product";





export default async function getAllClientDrinks(){

  const allProducts = await getAllDrinks()
       console.log(allProducts.category);

 return <CommonListing data={allProducts && allProducts.data}/>
}