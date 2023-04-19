import Router from "koa-joi-router";

import teacherLicense from "../routes/teacher-license.js";

const api = Router();
api.prefix("/apis");

const routes = [teacherLicense];

routes.forEach((route) => {
  api.use(route.middleware());
});

export default api;
