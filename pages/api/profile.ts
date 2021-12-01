import dbConnect from "../../lib/dbConnect";
import Profile from "../../models/profile/Profile";
import { IProfile } from "../../models/profile/types";

import type { NextApiRequest, NextApiResponse } from "next";

// interface ExtendedNextApiRequest extends NextApiRequest {
//   //Request body types validator
//   body: {
//     id?: number;
//     profile?: IProfile;
//   };
// }


//Response model
interface ResponseData {
  message: string;
  data?: IProfile;
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
      try {
        const profile = await Profile.find({});
        // @ts-ignore
        res.status(200).json({ message: "Got profile data", data: profile });
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Could not get profile data" });
      }
      break;

    // case "POST":
    //   //Add checks for body request type

    //   //Create
    //   try {
    //     const profile = await Profile.create(req.body.profile);
    //     res.status(201).json({ message: "Profile created", data: profile });
    //   } catch (err) {
    //     console.log(err);
    //     res.status(400).json({ message: "Couldnt create profile" });
    //   }
    //   break;

    case "PATCH":
      //Add checks for body request type
      try {
        const profile = await Profile.findByIdAndUpdate(
          req.body.id,
          req.body.profile
        );
        res.status(200).json({ message: "Profile updated" });
      } catch (err) {
        res.status(400).json({ message: "Could not update profile" });
      }
      break;

    default:
      //Bad request
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
