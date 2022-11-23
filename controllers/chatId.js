import chatId from "../models/chatId.js";

export const createChatId = async (req, res) => {
    const post = req.body;
    const newChatId = new chatId({ ...post, createdAt: new Date().toISOString() });  
    try {
      await newChatId.save();
      res.status(201).json(newChatId);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
export const getChatId = async (req, res) => {
    const post = req.body;
    const newChatId =  await chatId.findOne({...post});  
    try {      
      res.status(201).json(newChatId);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
export const getAllChatId = async (req, res) => {
    const post = req.body;
    const newChatId =  await chatId.find({...post});  
    try {      
      res.status(201).json(newChatId);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };