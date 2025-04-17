import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

// get
router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
// post
router.post("/players", PlayerController.postPlayer);
// delete
router.delete("/players/:id", PlayerController.deletePlayer);
// patch
router.patch("/players/:id", PlayerController.updatePlayer);

export default router;