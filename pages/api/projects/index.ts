import dbConnect from "../../../lib/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import Project from "../../../models/project/Project";
import { IProject } from "../../../models/project/types";


//Response model
interface ResponseData {
  message: string;
  data?: IProject;
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
      //code
      break;
    case "POST":
      //Add checks for body request type   
      //req.body.project try creating a generic function
 
      try {
        const project = await Project.create(req.body.project);
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
