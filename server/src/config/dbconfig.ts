import merge from "lodash.merge"
import dotenv from "dotenv";
dotenv.config();

const stage = process.env.STAGE || "production"

let config;

if(stage === "production"){
    config = require("./prod").default
}else{
    config = require("./local").default
}

export default merge({
   stage
}, config)

