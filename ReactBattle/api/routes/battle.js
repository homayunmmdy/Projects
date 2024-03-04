const router = require("express").Router();

const Battle = require("../model/battleModel");

// app battles
router.get("/", async (req, res) => {
  try {
    let query = {}
    if(req.query.title) {
      query['name'] = {$regex : req.query.title , $options: "i"}
    }
    if(req.query.desc) {
      query['desc'] = {$regex : req.query.desc , $options: "i"}
    }
    const battles = await Battle.find(query);
    res.json(battles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// single battle 
router.get("/:id", async (req, res) => {
  try {
    const battle = await Battle.findById(req.params.id);
    if (!battle) {
      return res.status(404).json({ message: 'Battle not found' });
    }
    res.json(battle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Add battle
router.post("/", async (req, res) => {
  const battle = new Battle({
    name: req.body.name,
    desc : req.body.desc,
    imgUrl: req.body.imgUrl,
    videoUrl : req.body.videoUrl,
  });
  try {
    const newBattle = await battle.save();
    res.status(201).json(newBattle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit battle

router.put("/:id", async (req, res) => {
  try {
    const battle = await Battle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(battle);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//Delete battle
router.delete("/:id", async (req, res) => {
  try {
    const battle = await Battle.findByIdAndDelete(req.params.id);
    res.json({ message: "Battle deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
