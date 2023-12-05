


// add new product service

import { NextResponse } from "next/server"

export const addNewProduct = async(FormData)=>{

  try {
    
    const response = await fetch('/api/admin/add-product',{
        method: "POST",
        headers: {
          'content-type': 'application/json',
          Authorization : `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify(FormData)
    })

    const data = await response.json()

  } catch (error) {
    return NextResponse.json({
      success: 'false',
      message: error
    })
  }

} 