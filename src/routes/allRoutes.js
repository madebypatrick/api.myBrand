import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import messageRoute from "./messageRoute.js"
import swaggerui from "swagger-ui-express"
import apiDoc from "../docs/basicInfos.js"

const router = express.Router()

// all routes

router.use("/blogs",blogRoute)
router.use("/signup",signupRoute)
router.use("/login",loginRoute)
router.use("/message",messageRoute)

router.use("/apiDoc", swaggerui.serve, swaggerui.setup(apiDoc),)
export default router