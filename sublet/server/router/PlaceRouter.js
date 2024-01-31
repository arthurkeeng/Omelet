const express = require("express");
const Place = require("../model/Place.model");
const jwt = require("jsonwebtoken");
const { getPlace, addNewPlaces } = require("../controllers/PlaceController");
const router = express.Router();
const jwtSecret = "fjdslo3dsfewo32sdlfowqdsfew";

// router.route("/places", (req, res) => {
//   const { token } = req.cookies;
//   try {
//     jwt.verify(token, jwtSecret, {}, async (err, token) => {
//       if (err) throw err;
//       const places = await Place.create({
//         owner: token.id,
//         ...req.body,
//       });
//       res.json({ places });
//     });
//   } catch (error) {}
// });

router.route("/:placeId").get(getPlace);
router.route("/add").post(addNewPlaces);

module.exports = router;
