import Router from "koa-joi-router";
import crypto from "crypto";

import TeacherLicense from "../models/teacherlicense.js";

const router = Router();
router.prefix("/teacher-license");

router.route({
  method: "post",
  path: "/",
  validate: {
    body: {
      transactionHash: Router.Joi.string().required(),
      citizenId: Router.Joi.string().required(),
    },
    type: "json",
  },
  handler: async (ctx) => {
    const { transactionHash, citizenId } = ctx.request.body;

    const hashedCitizenId = crypto
      .createHash("sha256")
      .update(citizenId)
      .digest("hex");

    const payload = new TeacherLicense({
      transaction_hash: transactionHash,
      citizen_id_hash: hashedCitizenId,
    });

    try {
      await TeacherLicense.create(payload);

      ctx.body = {
        success: true,
      };
    } catch (error) {
      console.error(JSON.stringify(error));
      ctx.throw(400, { success: "false", message: JSON.stringify(error) });
    }
  },
});

router.route({
  method: "get",
  path: "/",
  validate: {
    query: {
      citizenId: Router.Joi.string().required(),
    },
  },
  handler: async (ctx) => {
    const { citizenId } = ctx.request.query;

    const hashedCitizenId = crypto
      .createHash("sha256")
      .update(citizenId)
      .digest("hex");

    try {
      const teacherLicense = await TeacherLicense.findOne({
        citizen_id_hash: hashedCitizenId,
      });

      ctx.body = {
        data: {
          id: teacherLicense._id,
          citizenIdHash: teacherLicense.citizen_id_hash,
          transactionHash: teacherLicense.transaction_hash,
          createdAt: teacherLicense.created_at,
          expireAt: teacherLicense.expire_at,
        },
      };
    } catch (error) {
      console.error(JSON.stringify(error));
      ctx.throw(400, { success: "false", message: JSON.stringify(error) });
    }
  },
});

export default router;
