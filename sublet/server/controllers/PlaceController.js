const Place = require("../model/Place.model");

const addNewPlaces = async (req, res) => {
  try {
    const places = await Place.create(req.body);
    res.send("place created successfully");
  } catch (error) {
    console.log("something happened");
  }
};
const getPlace = async (req, res) => {
  const { placeId } = req.params;

  try {
    const place = await Place.find({ placeId });
    res.json({ place });
  } catch (error) {
    res.send("something happened");
  }
};

module.exports = { addNewPlaces, getPlace };
