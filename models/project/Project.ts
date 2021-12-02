import {Schema, model, models} from "mongoose";
import { IProject } from "./types";


export const ProjectSchema = new Schema<IProject>({
    title: {type: String, required: true},
    category: {type: String, required: true},
    featured_picture: {type: String, required: true},
    link: String
})

const Project = models.Profile || model<IProject>("Projects",ProjectSchema);
export default Project;