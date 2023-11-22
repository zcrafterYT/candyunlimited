import mongoose from "mongoose";

<<<<<<< HEAD
const   configOptions = {
=======
const configOptions = {
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = process.env.DB_URL;

  mongoose
    .connect(connectionUrl, configOptions)
<<<<<<< HEAD
    .then(() => ("Ecommerce database connected successfully!"))
    .catch((err) =>
      (`Getting Error from DB connection ${err.message}`)
=======
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
>>>>>>> 7abc6a7 (feat(auth)Added Login and Registration)
    );
};

export default connectToDB;
