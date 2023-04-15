import express from "express";
import { createFutsal, deleteFutsal, getFutsal, getFutsals, updateFutsal } from "../controllers/futsal.js";
import Futsal from "../models/Futsal.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createFutsal);
//UPDATE
router.put("/:id", verifyAdmin, updateFutsal);
//DELETE
router.delete("/:id", verifyAdmin, deleteFutsal);
//GET
router.get("/:id", getFutsal);
//GET ALL
router.get("/", getFutsals);

export default router;