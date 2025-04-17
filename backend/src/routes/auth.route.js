import express from "express"
import { checkAuth,login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.put("/update-profile",protectRoute, updateProfile);
//check auth--if refresh occurs check auth

router.get("/check", protectRoute, checkAuth);





export default router;