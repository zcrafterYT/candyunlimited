<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  const [pageLevelLoader, setPageLevelLoader] = useState(false);
  const [componentsLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: " ",
  });
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState(null);
<<<<<<< HEAD
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);

  useEffect(() => {
    Cookies.get("token");
=======

  useEffect(() => {
    console.log(Cookies.get("token"));
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)

    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      const userData = JSON.parse(localStorage.getItem("user")) || {};
<<<<<<< HEAD
      setUser(userData);
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
    } else {
      setIsAuthUser(false);
    }
  }, [Cookies]);

  return (
    <GlobalContext.Provider
      value={{
        showNavModal,
        setShowNavModal,
        pageLevelLoader,
        setPageLevelLoader,
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        componentsLevelLoader,
        setComponentLevelLoader,
<<<<<<< HEAD
        currentUpdatedProduct,
        setCurrentUpdatedProduct,
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
<<<<<<< HEAD
=======
'use client'

import { createContext } from "react";



export const GlobalContext = createContext(null);




export default function GlobalState({children}){

    return(
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
}
>>>>>>> bb43738 (WIP)
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
