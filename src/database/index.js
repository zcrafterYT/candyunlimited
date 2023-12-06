import mongoose from "mongoose";

const   configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = process.env.DB_URL;

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => ("Ecommerce database connected successfully!"))
    .catch((err) =>
      (`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
