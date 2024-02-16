import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    //spoiler it doesn't do anything but hide the banner
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className=" bg-white rounded-lg">
       <p>This website uses cookies to improve your browsing experience.</p>
       <p>Please click Accept to continue.</p>
       <button className=" rounded-md bg-green-400 "onClick={handleAccept}>Accept</button>
       <p> </p>
       <button className="rounded-md bg-red-600"onClick={handleReject}>Reject</button>
    </div>
  );
};

export default CookieConsentBanner;