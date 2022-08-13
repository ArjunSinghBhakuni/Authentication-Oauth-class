const express = require("express");

const { connection } = require("./config");
const UserModel = require("./Model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(process.env.password)
  res.send(`<a href="https://github.com/login/oauth/authorize?client_id=471d2f4139b9480dfb7f">Login via Github</a>`);
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { email, password, age } = req.body;
  bcrypt.hash(password, 8, function (err, hash) {
    console.log(hash);
    // Store hash in your password DB.
    if (err) {
      return res.send(err);
    }
    const user = new UserModel({ email, password: hash, age });
    user.save();
    return res.send("sign up successfull");
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("invaild credentials");
  }
  console.log(user);
  const hashed_password = user.password;
  console.log(hashed_password);
  await bcrypt.compare(password, hashed_password, function (err, result) {
    // result == true

    if (err) {
      return res.send("please try again later ");
    }
    console.log(result);
    if (result) {
      const token = jwt.sign(
        { email: user.email, app: user.age, _id: user._id },
        "secret"
      );

      return res.send({ message: "Login succesfull", token: token });
    } else {
      res.send("Invalid creditials");
    }
  });
});

app.get("/profile/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id)
    const user_token = req.headers.authorization;
    const new_token = user_token.split(" ")[1];
   // console.log(new_token);
    jwt.verify(new_token, "secret", function (err, decoded) {
      if (err) {
        return res.send("Please login again");
      }
      console.log(decoded);
      //   return res.send("<h1>Dashboard</h1>");
    });
    const user = await UserModel.find({ _id: id });
    return res.send(user);
  } catch {
    return res.send("not found");
  }
});

app.get("/dashboard",(req,res)=>{
  return res.send("Dashboard")
})

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (err) {
    console.log(err);
  }

  console.log("server at 8080");
});


// client - 471d2f4139b9480dfb7f