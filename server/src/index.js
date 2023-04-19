import Koa from "koa";
import Router from "koa-joi-router";
import cors from "koa-cors";
import bodyParser from "koa-bodyparser";

import api from "./apis/index.js";
import connectDatabase from "./database.js";
import { PORT } from "./config.js";

const app = new Koa();
const healthCheck = Router();

healthCheck.get("/", (ctx) => {
  ctx.body = "OK";
});

app.use(bodyParser());
app.use(cors());
app.use(healthCheck.middleware());
app.use(api.middleware());

connectDatabase()
  .then(console.log("MongoDB Connected"))
  .then(app.listen(PORT, () => console.log(`Server start on port : ${PORT}`)));

export default app;
