"use client";

<<<<<<< HEAD
<<<<<<< HEAD
import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment, useContext, useEffect } from "react";
import CommonModal from "../commonModal";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { AccountBox, AdminPanelSettings, Login, Logout, ShoppingCart } from "@mui/icons-material";

function NavItems({ isModalView = false, isAdminView, router }) {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${
        isModalView ? "" : "hidden"
      }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? "border-none" : "border border-gray-100"
        }`}
      >
        {isAdminView
=======
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment } from "react";

const isAdminView = true;
const isAuthUser = true;
const user = {
  role: "admin",
};
const styles = {
    button: 'mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white',
  }

function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
      {isAdminView
>>>>>>> bb43738 (WIP)
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
<<<<<<< HEAD
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))}
=======
              >
                {item.label}
              </li>
            )):navOptions.map((item) => (
                <li
                  className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                  key={item.id}
=======
import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment, useContext } from "react";
import CommonModal from "../commonModal";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const isAdminView = false;

  function NavItems({ isModalView = false, isAdminView, router }) {
    return (
      <div
        className={`items-center justify-between w-full md:flex md:w-auto ${
          isModalView ? "" : "hidden"
        }`}
        id="nav-items"
      >
        <ul
          className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
            isModalView ? "border-none" : "border border-gray-100"
          }`}
        >
          {isAdminView
            ? adminNavOptions.map((item) => (
                <li
                  className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                  key={item.id}
                  onClick={() => router.push(item.path)}
                >
                  {item.label}
                </li>
              ))
            : navOptions.map((item) => (
                <li
                  className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                  key={item.id}
                  onClick={() => router.push(item.path)}
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
                >
                  {item.label}
                </li>
              ))}
<<<<<<< HEAD
>>>>>>> bb43738 (WIP)
      </ul>
    </div>
  );
}

export default function Navbar() {
<<<<<<< HEAD
  const { showNavModal, setShowNavModal, currentUpdatedProduct , setCurrentUpdatedProduct } = useContext(GlobalContext);
  const { user, isAuthUser, setIsAuthUser, setUser } =
    useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();


  useEffect(()=>{

    if(pathName !== '/adminView/add-product' && currentUpdatedProduct !== null) setCurrentUpdatedProduct(null)

  },[pathName])

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  }

  const isAdminView = pathName.includes("adminView");

=======
>>>>>>> bb43738 (WIP)
=======
        </ul>
      </div>
    );
  }
  

export default function Navbar() {

  const {showNavModal , setShowNavModal} = useContext(GlobalContext)
  const {user, isAuthUser, setIsAuthUser, setUser} = useContext(GlobalContext)
  const router = useRouter()

  function handleLogout(){
    setIsAuthUser(false)
    setUser(null)
    Cookies.remove('token')
    localStorage.clear()
    router.push('/')
  }

>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<<<<<<< HEAD
<<<<<<< HEAD
          <div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
          >
            <span className="slef-center text-2xl whitespace-nowrap font-pacifico">
              Dieter's Candy Shop
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? 
              <Fragment>
                <button
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                  onClick={() => router.push("/account")}
                > 
                <AccountBox></AccountBox>
                </button>
                <button
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                  onClick={() => setShowCartModal(true)}
                >
                  
                  <ShoppingCart></ShoppingCart>
                </button>
              </Fragment>
             : null}
            {user?.role === "admin" ? (
              isAdminView ? (
                <button
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                  onClick={() => router.push("/")}
                >
                  Client View
                </button>
              ) : (
                <button
                  onClick={() => router.push("/adminView")}
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                >
                  <AdminPanelSettings></AdminPanelSettings>
                </button>
              )
            ) : null}
            {isAuthUser ? (
              <button
                onClick={handleLogout}
                className={
                  "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                }
              >
                <Logout></Logout>
              </button>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className={
                  "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                }
              >
                <Login></Login>
              </button>
            )}
=======
=======
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
          <div className="flex items-center cursor-pointer">
            <span className="slef-center text-2x1 font-semibold whitespace-nowrap">
              placeholder
            </span>
          </div>
          <div className="flex md:order-2 gap-2 ">
<<<<<<< HEAD
            {isAdminView && isAuthUser ? (
              <Fragment>
                <button className={styles.button}>Account</button>
                <button className={styles.button}>Cart</button>
=======
            {isAuthUser ? (
              <Fragment>
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Account</button>
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Cart</button>
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
              </Fragment>
            ) : null}
            {user?.role === "admin" ? (
              isAdminView ? (
<<<<<<< HEAD
                <button className={styles.button}>CLient View</button>
              ) : (
                <button className={styles.button} >Admin View</button>
              )
            ) : null}
            {isAuthUser ? <button className={styles.button}>Logout</button> : <button className={styles.button}>Login</button>}
>>>>>>> bb43738 (WIP)
=======
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">CLient View</button>
              ) : (
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white" >Admin View</button>
              )
            ) : null}
            {isAuthUser ? <button onClick={handleLogout}className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Logout</button> : <button onClick={()=> router.push('/login')}className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Login</button>}
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowNavModal(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <NavItems router={router} isAdminView={isAdminView} />
        </div>
      </nav>
      <CommonModal
        showModalTitle={false}
        mainContent={<NavItems router={router} isAdminView={isAdminView} />}
        show={showNavModal}
        setShow={setShowNavModal}
      />
=======
          <NavItems/>
        </div>
      </nav>
>>>>>>> bb43738 (WIP)
=======
          <NavItems isModal={false}/>
        </div>
      </nav>
      <CommonModal 
      showModalTitle={false}
      mainContent={<NavItems isModalView = {true}/>}
      show={showNavModal} setShow={setShowNavModal} />
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
    </>
  );
}
