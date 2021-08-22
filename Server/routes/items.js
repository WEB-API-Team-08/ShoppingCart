const { Router } = require("express");
const Item = require("../models/item");
const router = Router();

router.get("/:itemId", async (req, res) => {
    let itemId = req.params.itemId;
    try {
        let item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).send("Given ID does not exist");
        }

        return res.send(item);
    }
    catch (e) {
        return res.status(500).send("Database/Server Error");
    }

});

module.exports = router;

