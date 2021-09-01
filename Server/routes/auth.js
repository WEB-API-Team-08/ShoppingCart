




// POST
router.post("/", async (req, res) => {
    const token = req.header("x-jwt-token");
    if (!token) {
      return res.status(401).send("Access denied. No token available");
    }
    try {
      jwt.verify(token, SECRET_KEY);
    } catch (e) {
      return res.status(400).send("Invalid token");
    }
  
    if (!req.body.name) {
      return res.status(400).send("Not all mandatory values are sent");
    }
  
    let bear = new Bear({
      name: req.body.name,
      type: req.body.type,
      movies: req.body.movies,
      likeCount: req.body.likeCount,
      imgUrl: req.body.imgUrl,
      isScary: req.body.isScary,
    });
  
    bear = await bear.save();
    res.send(bear);
  });