import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const { DB_NAME, DB_USERNAME, DB_PASSWORD,DB_HOST, APP_SECRET, GMAIL_USER, GMAIL_PASS, fromAdminMail, userSubject, FRONTEND_BASE_URL, GOOGLE_CLIENT_ID} = process.env;

export const db = new Sequelize(
  DB_NAME!,
  DB_USERNAME!,
  DB_PASSWORD!,

  {
    host: DB_HOST,
    port: 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      encrypt: true,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);

export const APP_SECRETE = APP_SECRET!;
export const GMAIL_USERE = GMAIL_USER!;
export const GMAIL_PASSE = GMAIL_PASS!;
export const fromAdminMaill = fromAdminMail!;
export const userSubjectt = userSubject!
export const FRONTEND_BASE_URLE = FRONTEND_BASE_URL!;
export const GOOGLE_CLIENT_IDE = GOOGLE_CLIENT_ID;