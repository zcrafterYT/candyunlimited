export const registerNewUser = async (formData) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const finalData = await response.json();

    return finalData;
  } catch (e) {
<<<<<<< HEAD
    ("error", e);
=======
    console.log("error", e);
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
  }
};