const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    console.log("**** CONECTANDO  ****");
    await mongoose.connect(process.env.URI_DB);
    console.log("**** CONEXION CORRECTA ****");
  } catch (error) {
    console.error("**** ERROR DE CONEXION ****", error);
  }
};

module.exports = dbConnect;
