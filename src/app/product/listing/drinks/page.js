import CommonListing from "@/components/commonListing";
import { getAllDrinks } from "@/services/product";





export default async function getAllClientDrinks(){

  const allDrinks = await getAllDrinks()
       console.log(allDrinks.category);

 return <CommonListing data={allDrinks && allDrinks.data}/>
}