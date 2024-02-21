import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function DELETE(req){
  try{
    await connectToDB();
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id');

    if(!id) return NextResponse.json({success: false, message:"something went wrong"});

    const deleteProduct = await Product.findByIdAndDelete(id)

    if(deleteProduct){
      return NextResponse.json({
        success: true,
        message: "product deleted"
      })
    }else{
      return NextResponse.json({
        success:false,
        message: "failed to delete product"
      })
    }

  }catch(e){
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong"
    })
  }
}