import {Schema, model, models, Model} from "mongoose";
import { IProject } from "./types";


export const ProjectSchema = new Schema<IProject>({
    title: {type: String, required: true},
    category: {type: String, required: true},
    featured_picture: {type: String, required: true},
    link: String
})



//const Project = models.Project || model<IProject>("Projects",ProjectSchema) ;
//export default Project;

export default models?.Projects || model<IProject>("Projects", ProjectSchema);
