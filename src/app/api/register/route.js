import connectToDB from "@/database";
import User from "@/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectToDB();

  const { name, email, password, role } = await req.json();
  //validate the schema

  const { error } = schema.validate({ name, email, password, role });

  if (error) {
<<<<<<< HEAD
    (error);
=======
    console.log(error);
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    //check if the user is exists or not

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User is already exists. Please try with different email.",
      });
    } else {
      const hashPassword = await hash(password, 12);

      const newlyCreatedUser = await User.create({
        name,
        email,
        password: hashPassword,
        role,
      });

      if (newlyCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account created successfully.",
        });
      }
    }
  } catch (error) {
<<<<<<< HEAD
    ("Error while new user registration. Please try again" , error);
=======
    console.log("Error while new user registration. Please try again" , error);
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
