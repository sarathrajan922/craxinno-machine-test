import dotenv from "dotenv";
dotenv.config();

const configKeys = {
  MONGO_DB_URL: process.env.DATABASE as string,

  PORT: process.env.PORT,

  DB_NAME: process.env.DB_NAME,

  JWT_SECRET: process.env.JWT_SECRET as string,
};

export default configKeys;
