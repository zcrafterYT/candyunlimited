import { Fragment, useContext } from "react";
import CommonModal from "../commonModal";
import { GlobalContext } from "@/context";


export default function CartModal(){

  const  {
    showCartModal,setShowCartModal,showNavModal,setShowNavModal} = useContext(GlobalContext)

  return(
    <CommonModal
    showButtons={true}
    show={showNavModal}
    setShow={setShowNavModal}
    buttonComponent={
      <Fragment>
        <button>Go To Cart</button>
        <button>Go To Checkout</button>
      </Fragment>
    }
    />
  )

}