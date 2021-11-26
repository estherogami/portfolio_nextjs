import dbConnect from "../../lib/dbConnect";
import Profile from "../../models/Profile";

export default async function handler(req, res) {
  const { method } = req;

  //Connect to db
  await dbConnect().catch((error) =>
    res.status(500).json({ message: "Failed to connect to Database" })
  );

  switch (method) {
    case "GET": //Get
      try {
        const profile = await Profile.find({});
        res.status(200).json({ message: "Got profile data", data: profile });
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Could not get profile data" });
      }
      break;

    case "POST": //Create
      //Validate req.body
      try {
        const profile = await Profile.create(req.body);
        res.status(201).json({ message: "Profile created", data: profile });
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Couldnt create profile" });
      }
      break;

    case "PATCH": //Update
      //Valdidate req.body  (req.body.id, req.body.profile)
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
