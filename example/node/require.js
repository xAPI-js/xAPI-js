const XAPI = require("../../dist/XAPI.cjs.js");

require("dotenv").config();

const endpoint = process.env.LRS_ENDPOINT || "";
const username = process.env.LRS_USERNAME || "";
const password = process.env.LRS_PASSWORD || "";
const auth = XAPI.toBasicAuth(username, password);
const xapi = new XAPI(endpoint, auth);

xapi.getAbout().then((result) => {
  console.log(result.data);
});
