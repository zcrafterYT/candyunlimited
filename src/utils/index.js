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
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/admin-view/add-product",
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