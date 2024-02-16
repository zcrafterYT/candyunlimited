import connectToDB from "@/database";
import Product from "@/models/product";
import Joi from "joi";
import { NextResponse } from "next/server";

const addNewProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  origin: Joi.string().required(),
  deliveryInfo: Joi.string().required(),
  onSale: Joi.string().required(),
  priceDrop: Joi.number().required(),
  imageUrl: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const user = "admin";
    if (user === "admin") {
      const extractData = await req.json();

      const {
        name,
        description,
        price,
        imageUrl,
        category,
        origin,
        deliveryInfo,
        onSale,
        priceDrop,
      } = extractData;

      const { error } = addNewProductSchema.validate({
        name,
        description,
        price,
        imageUrl,
        category,
        origin,
        deliveryInfo,
        onSale,
        priceDrop,
      });

      if (error){
        return NextResponse.json({
          success: "false",
          message: error,
        });
      }

      const newlyCreatedProduct = await Product.create(extractData)

      if (newlyCreatedProduct){
        return NextResponse.json({
          success: "true",
          message: 'product added',
        });
      } else {
        return NextResponse.json({
          success: "false",
          message: 'failed to add product',
        });
      }

    } else {
      return NextResponse.json({
        success: "false",
        message: "user is not authorized",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: "false",
      message: "something went wrong please try again later",
    });
  }
}
