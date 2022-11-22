import message from "../models/message.js";

export const getPosts = async (req, res) => {
    const post = req.body;
    const newPost = await message.find({...post});
    try {
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new message({ ...post, createdAt: new Date().toISOString() });
  
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };