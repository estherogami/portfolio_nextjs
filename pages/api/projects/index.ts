import dbConnect from "../../../lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import Projects from "../../../models/project/Project";
import { IProject } from "../../../models/project/types";


//Response model
interface ResponseData {
  message: string;
  data?: IProject | IProject[];
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;

  //Connect to db
  await dbConnect().catch((err) =>
    res.status(500).json({ message: "Failed to connect to Database" })
  );

  switch (method) {
    case "GET":
      try{
        const projects = await Projects.find({});
        res.status(200).json({ message: "Got projects data", data: projects });
      }catch(err){
        console.log(err)
        res.status(400).json({ message: "Could not retrieve projects list" });
      }
      //code
      break;


    case "POST":
      //Add checks for body request type   
      //req.body.project try creating a generic function
 
      try {
        const project = await Projects.create(req.body.project);
        res
          .status(201)
          .json({ message: "Project succesfully created", data: project });
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Couldnt create profile" });
      }
      break;

      
    case "PATCH":
      //code
      break;
  }
}
