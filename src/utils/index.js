const apiKey =  process.env.NEXT_PUBLIC_API_KEY
const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
const  projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const storageBucket =  process.env.NEXT_PUBLIC_STORAGE_BUCKET
const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID
const appId =  process.env.NEXT_PUBLIC_APP_ID
const measurementId = process.env.NEXT_PUBLIC_MEASURMENT_ID

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
      id:"origin",
      type:"",
      placeholder:"",
      label:"origin",
      componentType: "select",
      options:[
        {
          id:"US",
          label:"America"
        },
        {
          id:"EU",
          label:"Europe",
        },
        {
          id:"JP",
          label:"Japan"
        },
        {
          id:"ZH",
          label:"China"
        }
      ]
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

 export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
