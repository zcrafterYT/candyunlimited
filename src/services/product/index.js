// add new product service

import Cookies from "js-cookie";

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch("/api/admin/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/allProducts", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllDrinks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/drinks", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSnacks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/snacks", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUS = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/American", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllZH = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/Chinese", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getAllJP = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/Japanese", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (formData) => {
  try {
    const res = await fetch("/api/admin/updateProduct", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAProduct = async(id)=>{
  try {
    const res = await fetch(`/api/admin/deleteProduct?id=${id}`,{
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    })

    const data = await res.json()

    return data

  } catch (e) {
    console.log(e);
  }
}


export const productById = async(id) => {
  try {
    
    const res = await fetch(`http://localhost:3000/api/admin/productByCategory?id=${id}`,{
      method:'Get',
      cache:'no-store'
    })

    const data = await res.json()

    return data

  } catch (e) {
   console.log(e); 
  }
}