import express from "express";
import AttController from "./attr.controller";
const router = express.Router();

router.delete("/attrdelete/:id",AttController.AttrDeletes);
router.get("/attributes",AttController.Attributes);
router.get("/all/attributes",AttController.AllAttributes);
router.post("/add/attributes",AttController.AddAttr);

export default router;