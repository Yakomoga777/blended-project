require("dotenv").config();

const { app } = require("./app");
const connectDB = require("./db/connectDB");

const { PORT, DB_URI } = process.env;

(async function () {
  await connectDB(DB_URI);

  console.log("DataBase is connected");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
