import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

      const extractZH = await Product.find({origin: "ZH"});

      if (extractZH) {
        return NextResponse.json({
          success: true,
          data: extractZH,
        });
      } else {
        return NextResponse.json({
          success: false,
          status: 204,
          message: "No Products found",
        });
      }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}