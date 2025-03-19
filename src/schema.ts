import mongoose from "mongoose";
import { string } from "zod";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema({
  userId: ObjectId,
  username: { type: string, required: true, unique: true },
  password: { type: string, required: true },
});

const ContentSchema = new mongoose.Schema({
  _id: ObjectId,
  link: string,
  type: string,
  title: string,
  tags: string,
  userId: string,
});

const TagSchema = new mongoose.Schema({
  _id: ObjectId,
  title: string,
});

const LinkSchema = new mongoose.Schema({
  _id: ObjectId,
  hash: string,
  userId: string,
});

export const userModel = mongoose.model("users", UserSchema);
export const contentModel = mongoose.model("content", ContentSchema);
export const tagsModel = mongoose.model("tags", TagSchema);
export const linkModel = mongoose.model("links", LinkSchema);

// export = {
  // userModel,
  // contentModel,
  // tagsModel,
  // linkModel,
// };
