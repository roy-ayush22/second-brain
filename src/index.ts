import express from "express";
import jwt from "jsonwebtoken";
import dbConnection from "./db-server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { userModel } from "./schema";
import { JWT_SECRET } from "./config";
const app = express();
// const jwt = require("jsonwebtoken")
const port = 3000;
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  const requireBody = z.object({
    username: z.string().min(5).max(50).email(),
    password: z
      .string()
      .min(5)
      .max(30)
      .regex(/[A-Z]/, "password must contain upper case letter")
      .regex(/[a-z]/, "password must contain lower case letter")
      .regex(
        /[!@#$%^&*()_<>?:]/,
        "password must contain any special character"
      ),
  });

  const parsedData = requireBody.safeParse(req.body);
  if (!parsedData) {
    res.json({
      message: "Invalid Format",
      error: "unknown validation error",
    });
    return;
  }

  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await userModel.create({
      username,
      password: hashedPassword,
    });
  } catch (e) {
    res.json({
      message: "user already exists",
    });
  }
  res.status(403).json({
    message: "you are signed up",
  });
});

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  const findUser = await userModel.findOne({
    username,
  });
  if (findUser && findUser.password) {
    const matchPassword = await bcrypt.compare(password, findUser.password);
    if (matchPassword) {
      const token = jwt.sign(
        {
          id: findUser._id.toString(),
        },
        JWT_SECRET
      );
      res.status(202).json({
        token,
      });
    } else {
      res.status(401).json({
        message: "incorrect password",
      });
    }
  } else {
    res.status(404).json({
      message: "user not signed up",
    });
  }
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
