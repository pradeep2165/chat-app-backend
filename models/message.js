import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  chatId: { type: String, required: true },
  userId: { type: String, required: true },
  userMsg: { type: String, required: true },
  createdAt: {
    type: Date,
    defalut: new Date(),
  },
});

export default mongoose.model("Message", messageSchema);
