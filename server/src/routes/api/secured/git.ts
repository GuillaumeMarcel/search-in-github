import { Router } from "express";
import axios from "axios";

const api = Router();

/* ::GET/:username Find a git user by his username */
api.get("/:username", async ({ prisma, params }, response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        login: params.username.toLowerCase(),
      },
    });

    if (!user) {
      console.log("User not found in BDD, searching on github API ... :");
      let { data } = await axios.get(
        `https://api.github.com/users/${params.username.toLowerCase()}`
      );
      data.login = params.username.toLowerCase();
      await prisma.user.create({ data: { ...data } });
      response.status(200).json({ data });
    } else {
      response.status(200).json({ data: user });
    }
  } catch (error) {
    console.log(error);
    response
      .status(404)
      .json({ error: `user not found with ${params.username}` });
  }
});

api.get("/", async ({ prisma }, response) => {
  try {
    const user = await prisma.user.findMany();
    if (user && user.length < 1) {
      response.status(404).json({ error: "no user saved in database" });
    } else {
      response.status(200).json({ data: user });
    }
  } catch (error) {
    console.log(error);
    response.status(404).json({ error: "Not Found" });
  }
});

export default api;
