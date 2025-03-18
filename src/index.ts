import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt-ts";
import { string, z } from "zod";
const app = express();
app.use(express());

app.post("api/v1/signup", (req, res) => {
  const requireBody = z.object({
    email: z.string().min(5).max(50).email(),
    name: z.string().min(3).max(100),
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

  const parsedDataWithSuccess = requireBody.safeParse;

  if (!parsedDataWithSuccess) {
    res.json({
      message: "invalid format",
      error: parsedDataWithSuccess.error || "unknown validation error",
    });
    return;
  }

  const { email, name, password } = req.body;

  const hashedPassword = bcrypt.hash(password, 5);
});

app.post("api/v1/signin", (req, res) => {
  const { email, password } = req.body;
});

app.post("api/v1/content", (req, res) => {});

app.get("api/v1/content", (req, res) => {});

app.delete("api/v1/content", (req, res) => {});

app.post("api/v1/brain/share", (req, res) => {});

app.get("api/v1/brain/:shareLink", (req, res) => {});
