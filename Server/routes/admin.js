const express = require('express');
const Item = require('../models/item');
const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  try {
    console.log("fired")
    let item = await Item.find().sort({ itemName: "desc" });
    res.send(item);
  } catch (ex) {
    return res.status(500).send("Error", ex.message);
  }
});



// GET With Params
// router.get("/:productId", (req, res) => {
//     let bearId = req.params.bearId;
//     let bear = bearArray.find(b => b.id == bearId);
//     if (!bear){
//         return res.status(404).send("Given ID does not exist");
//     }
//     res.send(bear);
// });
router.get("/:itemId", async (req, res) => {
  let _id = req.params.itemId;
  try {
    let item = await Item.findOne({ _id });
    res.send(item);
  } catch (ex) {
    return res.status(500).send("Error", ex.message);
  }
});

// POST
router.post("/create", async (req, res) => {
  const { itemName, price } = req.body;

  console.log("checkpoint")

  if (!itemName) {
    return res.status(400).send("Name can not be Empty!");
  } else if (!price) {
    return res.status(400).send("Price can not be Empty!");
  }

  console.log("checkpoint2")

  let item = new Item({
    itemName: req.body.itemName,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
  });

  item = await item.save();
  res.json({
    _id: item._id,
    name: item.itemName,
    imgUrl: item.imgUrl,
    price: item.price
  });
});


// router.post("/", async (req, res) => {

//     if (!req.body.name) {
//         return res.status(400).send("Not all mandatory values are sent");
//     }

//     let bear = new Bear({
//         name: req.body.name,
//         type: req.body.type,
//         movies: req.body.movies,
//         likeCount: req.body.likeCount,
//         imgUrl: req.body.imgUrl,
//         isScary: req.body.isScary
//     })

//     bear = await bear.save();
//     res.send(bear);
// });

//PUT
router.put('/update/:id', async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Product content can not be empty"
    });
  }
  console.log("item")
  const _id = req.params.id;

  const {itemName, imgUrl, price} = req.body

  
  let updatedItem = {}

  if(itemName){
    updatedItem.itemName = itemName;
  }

  if(imgUrl){
    updatedItem.imgUrl = imgUrl;
  }
      
  if(price){
    updatedItem.price = price;
  }


  if(updatedItem){
    const item = await Item.findByIdAndUpdate(_id, {updatedItem});
        return res
          .status(200)
          .send({ message: 'Item Updated', item: updatedItem });
  }
  
  return res.status(500).send({ message: ' Error in Updating Item.' });
});


//DELETE
router.delete('/delete/:id', async (req, res) => {
  const deletedProduct = await Item.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product deleted successfully!' });
  } else {
    res.send('Error in Deletion.');
  }
});

module.exports = router;