const { Router } = require("express");
const { 
    findAll, 
    findOne, 
    createContact, 
    deleteContact,
    updateContact
} = require("../controllers/contacts");

const router = Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", createContact);
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);

module.exports = router;
