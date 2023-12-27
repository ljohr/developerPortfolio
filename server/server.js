import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import PostModel from "./models/Post.js";

const nameFromSlug = (slug) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// const nameToSlug = (name) => {
//   return name.toLowerCase().split(" ").join("-");
// };

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/api/blog/:title", async (req, res, next) => {
  try {
    let post = await PostModel.find({ slug: req.params.title });

    res.json({ post });
  } catch (error) {
    next(error);
  }
});

// app.get("/api/blog/:title", async (req, res, next) => {
//   try {
//     // console.log(req.params.title);
//     const title = req.params.title;
//     // let post = await PostModel.find({ title: title });
//     // console.log("creating post");
//     // if (!post) {
//     const post = await PostModel.create({
//       title: "Attending Hack the Heights",
//       subtitle: "My experience at the annual Boston College Hackathon",
//       topics: ["reflections", "dev-logs"],
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Tellus at urna condimentum mattis pellentesque id nibh. Et ultrices neque ornare aenean euismod elementum. Amet est placerat in egestas erat imperdiet sed. Nulla facilisi cras fermentum odio. Ac auctor augue mauris augue neque gravida in fermentum et. Sed cras ornare arcu dui. Commodo ullamcorper a lacus vestibulum. Morbi tristique senectus et netus et. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Metus aliquam eleifend mi in. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Et tortor at risus viverra adipiscing at in tellus. Ut placerat orci nulla pellentesque. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Magna sit amet purus gravida. Quam quisque id diam vel. Adipiscing vitae proin sagittis nisl rhoncus mattis. Dui nunc mattis enim ut tellus. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. \n Vestibulum morbi blandit cursus risus at ultrices. Phasellus egestas tellus rutrum tellus pellentesque eu. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Nisl purus in mollis nunc sed id semper risus. Leo vel orci porta non pulvinar neque laoreet. Magna sit amet purus gravida quis. Odio facilisis mauris sit amet. Ac tortor vitae purus faucibus ornare. Fermentum et sollicitudin ac orci. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet justo donec enim diam vulputate. Nibh tellus molestie nunc non blandit massa enim. Iaculis eu non diam phasellus vestibulum. At in tellus integer feugiat scelerisque varius morbi enim. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Egestas congue quisque egestas diam in arcu cursus. Risus feugiat in ante metus dictum at. Non blandit massa enim nec dui nunc. \n In ornare quam viverra orci sagittis eu volutpat. Sapien eget mi proin sed libero enim. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Sapien pellentesque habitant morbi tristique senectus et netus. Proin nibh nisl condimentum id venenatis a.",
//       image: [
//         "https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148973053.jpg?w=1800&t=st=1703630331~exp=1703630931~hmac=08d77a0f73aeea23d2e8acc6da81db8af23ba78ee6769c428009fe4844c82003",
//       ],
//       slug: title,
//     });
//     await post.save();
//     // }

//     res.json({ post });
//   } catch (error) {
//     next(error);
//   }
// });

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Connection error: ", error);
    throw error;
  }
};

startServer();
