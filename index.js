const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();
Mongoose.connect("mongodb://songs_path_db:27017/songs",{ useNewUrlParser: true });
const PathModel = Mongoose.model("song_path", {
  path: String,
  song_name: String,
  artist: String
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/song-path", async (request, response) => {
  try {
    var path = new PathModel(request.body);
    var result = await path.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(3003, () => {
    console.log("Listening at :3003...");
});