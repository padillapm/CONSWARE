const express = require("express");
const router = express.Router();

const plato = require("../controllers/plato.controller");

router.get("/", plato.getPlatos);

router.post("/", plato.createPlato);

router.get("/:id", plato.getPlato);

router.put("/:id", plato.editPlato);

router.delete("/:id", plato.deletePlato);

module.exports = router;
