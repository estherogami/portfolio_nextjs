import { Schema, model } from "mongoose";
import {IContact, IProfile, ISkill } from "./types";

//Subdocuments -------------------
//Skill Schema
const SkillSchema = new Schema<ISkill>({
  skillname: { type: String, required: true },
  mastery: { type: String, required: true, enum: ['basic','middle','advanced'] },
});

//Contact Schema
const ContactSchema = new Schema<IContact>({
type: { type: String, required: true },
content: { type: String, required: true },
})


//Main Document -------------------
//Profile Schema
export const ProfileSchema = new Schema<IProfile>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  age: Number,
  skills: {type: [SkillSchema]},
  contact: {type: [ContactSchema]},
});



//module.exports = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
const Profile = model<IProfile>("Profile", ProfileSchema);
export default Profile;
