"use client";

import { GlobalContext } from "@/context";
import { deleteProduct } from "@/services/product";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ProductButtons({item}) {
  const pathName = usePathname();
  const {setCurrentUpdatedProduct, setComponentLevelLoader, componentLevelLoader} = useContext(GlobalContext)
  const router = useRouter()

  const isAdminView = pathName.includes("adminView");

  async function handleDeleteProduct(item) {
    setComponentLevelLoader({ loading: true, id: item._id });

    const res = await deleteProduct(item._id);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.refresh();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  return isAdminView ? (
    <>
      <button 
      onClick={()=>{
        setCurrentUpdatedProduct(item)
      router.push('./add-product')
      }
      }
      className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
        update
      </button>{" "}
      <button 
      onClick={()=> handleDeleteProduct(item)}
      className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
        {
          componentLevelLoader && componentLevelLoader.loading && item._id === componentLevelLoader.id ?
          <componentLevelLoader
          text={'Deleting product'}
          color={'#ffffff'}
          loading={componentLevelLoader &&componentLevelLoader.loading}
          /> : 'delete'
        }
      </button>
    </>
  ) : (
    <>
      <button className=" mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
        Add To Cart
      </button>
    </>
  );
}
