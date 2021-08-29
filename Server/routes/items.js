const { Router } = require("express");
const Item = require("../models/item");
const { idValidation } = require("../validations/idValidation");
const router = Router();


// GET ALL
router.get("/", async (req, res) => {
    try {
      let item = await Item.find().sort({ itemName: "desc" });
      res.send(item);
    } catch (ex) {
      return res.status(500).send("Error", ex.message);
    }
  });


router.get("/:itemId", async (req, res) => {
    let itemId = req.params.itemId;

    //Validate the data before we create a link
    const { error } = idValidation({ _id: itemId });
    if (error) return res.status(400).send({ message: error.details[0].message });

    try {
        let item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).send("Given ID does not exist");
        }

        return res.status(200).send(item);
    }
    catch (e) {
        return res.status(500).send("Database/Server Error");
    }

});



module.exports = router;

