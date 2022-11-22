import mongoose from "mongoose";

const ChatIdSchema = mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  createdAt: {
    type: Date,
    defalut: new Date(),
  },
});

export default mongoose.model("ChatId", ChatIdSchema);
