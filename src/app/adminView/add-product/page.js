"use client";

import {
  adminAddProductformControls,
  firebaseStorageUrl,
  firebaseConfig,
} from "@/utils";
import InputComponent from "@/components/formElements/inputComponent";
import SelectComponent from "@/components/formElements/selectComponent";
import { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { addNewProduct, updateProduct } from "@/services/product";
import { GlobalContext } from "@/context";
import { toast } from "react-toastify";
import Notification from "@/components/Notification";
import { useRouter } from "next/navigation";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageUrl);

const initialFormData = {
  name: "",
  price: 0,
  description: "",
  category: "Snacks",
  origin: "",
  deliveryInfo: "",
  onSale: "no",
  imageUrl: "",
  priceDrop: 0,
};

const createUniqueFileName = (getFile) => {
  const timeStamp = Date.now();
  const randomStringValue = Math.random().toString(36).substring(2, 12);

  return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function helperForUploadingImageToFireBase(file) {
  const getFileName = createUniqueFileName(file);
  const storageReference = ref(storage, `candyunlimited/${getFileName}`);
  const uploadImage = uploadBytesResumable(storageReference, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((downloadUrl) => resolve(downloadUrl))
          .catch((error) => reject(error));
      }
    );
  });
}

export default function AdminAddNewProduct() {
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

  const {
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);

  useEffect(()=>{

    if(currentUpdatedProduct !== null) setFormData(currentUpdatedProduct)

  },{currentUpdatedProduct})

  async function handleImage(event) {
    const exctractImageUrl = await helperForUploadingImageToFireBase(
      event.target.files[0]
    );

    if (exctractImageUrl !== "") {
      setFormData({
        ...formData,
        imageUrl: exctractImageUrl,
      });
    }
  }

  async function handleAddProduct() {
    setComponentLevelLoader({ loading: true, id: "" });

    const res = await currentUpdatedProduct !== null ? await updateProduct(formData) : await addNewProduct(formData)

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setFormData(initialFormData);
      setTimeout(() => {
        //router.push("/adminView/all-products");
      }, 1000);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialFormData);
    }
  }

  return (
    <div className="w-full mt-5 mr-0 mb-0 ml-0 relative">
      <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-2xl relative">
        <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          <input
            accept="image/*"
            max="100000"
            type="file"
            onChange={handleImage}
          />
          {adminAddProductformControls.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}
          <button
            onClick={handleAddProduct}
            className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-tighter"
          >
            {
              componentLevelLoader && componentLevelLoader.loading ? (
                <componentLevelLoader
                text = {'adding product'}
                color ={'#ffffff'}
                loading={componentLevelLoader && componentLevelLoader.loading}/>
              ) : (
                currentUpdatedProduct !== null ? 'update Product' : 'add product'
              )
            }
          </button>
          {componentLevelLoader && componentLevelLoader.loading ? (
            <componentLevelLoader
              text={"adding product"}
              color={"#ffffff"}
              loading={componentLevelLoader && componentLevelLoader.loading}
            />
          ) : (
            "add product"
          )}
        </div>
      </div>
      <Notification />
    </div>
  );
}
