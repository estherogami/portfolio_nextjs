import mongoose, { Schema } from 'mongoose';



//Schema
const ProfileSchema = new mongoose.Schema({
  name: {type: String, required: true },
  description: { type: String, required: true },
  age: Number,
  skills: [
    {
      skillname: String,
      mastery: Number,
    },
  ],
  contact: [
    {
      type: String, 
      content: String,
    },
  ],
});

module.exports = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
