let express = require("express");
const router = express.Router();
let {list,show,create} = require("../controllers/PostController");

router.get("/posts", list);
router.get("/post/:id", show);
router.post("/posts", create);
// router.put("/posts/:id", update);
// router.delete("/posts/:id", remove);

module.exports = router;
