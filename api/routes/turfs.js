import express from "express";
import { createTurf, deleteTurf, getTurf, getTurfs, updateTurf } from "../controllers/turf.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/:futsalid", verifyAdmin, createTurf);
//UPDATE
router.put("/:id", verifyAdmin, updateTurf);
//DELETE
router.delete("/:id/:futsalid", verifyAdmin, deleteTurf);
//GET
router.get("/:id", getTurf);
//GET ALL
router.get("/", getTurfs);

export default router;