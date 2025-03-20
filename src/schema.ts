import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema({
  userId: ObjectId,
  username: { type: String },
  password: { type: String },
});

const ContentSchema = new mongoose.Schema({
  _id: ObjectId,
  link: String,
  type: String,
  title: String,
  tags: String,
  userId: String,
});

const TagSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
});

const LinkSchema = new mongoose.Schema({
  _id: ObjectId,
  hash: String,
  userId: String,
});

export const userModel = mongoose.model("users", UserSchema);
export const contentModel = mongoose.model("content", ContentSchema);
export const tagsModel = mongoose.model("tags", TagSchema);
export const linkModel = mongoose.model("links", LinkSchema);
