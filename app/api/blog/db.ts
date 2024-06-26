import mongoose, { Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://thrishankkalluru16:BLuHxonFqKr755Om@cluster0.rxhivru.mongodb.net/blog"
);

const blogSchema = new Schema({
  title: String,
  author: String,
  content: String,
  date: { type: Date, default: Date.now },
  cover_image: String,
});

export default mongoose.models.BlogTable ||
  mongoose.model("BlogTable", blogSchema);
