const { Router } = require("express");
const { 
    findAll, 
    findOne, 
    createContact 
} = require("../controllers/contacts");

const router = Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", createContact);

module.exports = router;
