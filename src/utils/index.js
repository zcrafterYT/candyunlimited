const apiKey =  process.env.API_KEY
const authDomain = process.env.AUTH_DOMAIN
const  projectId = process.env.PROJECT_ID
const storageBucket =  process.env.STORAGE_BUCKET
const messagingSenderId = process.env.MESSAGING_SENDER_ID
const appId =  process.env.APP_ID
const measurementId = process.env.MEASURMENT_ID

export const navOptions = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "listing",
      label: "All Products",
      path: "/product/listing/all-products",
    },
    {
      id: "listingCandy",
      label: "Candy",
      path: "/product/listing/candy",
    },
    {
      id: "listingDrinks",
      label: "Drinks",
      path: "/product/listing/drinks",
    },
  ];
  
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "Manage All Products",
      path: "/adminView/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/adminView/add-product",
    },
  ];

  export const registrationFormControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter your name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
    {
      id: "role",
      type: "",
      placeholder: "",
      label: "Role",
      componentType: "select",
      options: [
        {
          id: "admin",
          label: "Admin",
        },
        {
          id: "customer",
          label: "customer",
        },
      ],
    },
  ];

  export const loginFormControls = [
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
  ];

  export const adminAddProductformControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "price",
      type: "number",
      placeholder: "Enter price",
      label: "Price",
      componentType: "input",
    },
    {
      id: "description",
      type: "text",
      placeholder: "Enter description",
      label: "Description",
      componentType: "input",
    },
    {
      id: "category",
      type: "",
      placeholder: "",
      label: "Category",
      componentType: "select",
      options: [
        {
          id: "Snacks",
          label: "Snacks",
        },
        {
          id: "Drinks",
          label: "Drinks",
        },
      ],
    },
    {
      id: "deliveryInfo",
      type: "text",
      placeholder: "Enter deliveryInfo",
      label: "Delivery Info",
      componentType: "input",
    },
    {
      id: "onSale",
      type: "",
      placeholder: "",
      label: "On Sale",
      componentType: "select",
      options: [
        {
          id: "yes",
          label: "Yes",
        },
        {
          id: "no",
          label: "No",
        },
      ],
    },
    {
      id: "priceDrop",
      type: "number",
      placeholder: "Enter Price Drop",
      label: "Price Drop",
      componentType: "input",
    },
  ];



  export const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
  };


 export const firebaseStorageUrl = process.env.FIREBASE_STORAG_URL
