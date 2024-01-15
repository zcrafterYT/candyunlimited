import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function PUT(req){
  try{
      await connectToDB();
      const extractData = await req.json();

      const {
        _id,name,price,description,category,deliveryInfo,onSale,priceDrop,imageUrl
      } = extractData

      const updateProduct = await Product.findByIdAndUpdate({
        _id : _id
      },{
        name,price,description,category,deliveryInfo,onSale,priceDrop,imageUrl
      },{
        new: true
      })

      if(updateProduct){
        return NextResponse.json({
          success: 'true',
          message: 'product updated'
        })
      } else {
        return NextResponse.json({
          success: 'false',
          message: 'failed to update product'
        })
      }

  }catch(e){
    console.log(error);
    return NextResponse.json({
      success: 'false',
      message: 'Something went wrong'
    })
  }
  
}