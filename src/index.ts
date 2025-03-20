import express from "express";
import jwt from "jsonwebtoken";
import dbConnection from "./db-server";
import * as bcrypt from "bcrypt-ts";
import { z } from "zod";
import { userModel } from "./schema";
const app = express();
const port = 3000;
app.use(express.json());

app.post("/api/v1/signup",async (req, res) => {
  const {username, password} = req.body;

  await userModel.create({
    username,
    password
  })
  res.json({
    message: "signed in"
  })


  // const requireBody = z.object({
  //   email: z.string().min(5).max(50).email(),
  //   name: z.string().min(3).max(100),
  //   password: z
  //     .string()
  //     .min(5)
  //     .max(30)
  //     .regex(/[A-Z]/, "password must contain upper case letter")
  //     .regex(/[a-z]/, "password must contain lower case letter")
  //     .regex(
  //       /[!@#$%^&*()_<>?:]/,
  //       "password must contain any special character"
  //     ),
  // });

  // const parsedData = requireBody.safeParse(req.body);

  // if (!parsedData) {
  //   res.json({
  //     message: "invalid format",
  //     error: "unknown validation error",  
  //   });
  //   return;
  // }

  // const { email, name, password } = req.body;

  // try {
  //   const hashedPassword = bcrypt.hash(password, 5);

  //   userModel.create({
  //     email,
  //     name,
  //     password: hashedPassword,
  //   });

  //   res.status(201).json({
  //     message: "you are signed up",
  //   });
  // } catch (error) {
  //   console.error("Signup error:", error);
  //   res.status(409).json({
  //     message: "user already exists",
  //   });
  // }
});

app.post("/api/v1/signin", (req, res) => {
  const { email, password } = req.body;
});

app.post("/api/v1/content", (req, res) => {});

app.get("api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

dbConnection();

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
