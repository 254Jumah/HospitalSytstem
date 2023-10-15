import Hospital from "../models/hospital.models.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
export const create = async (req, res, next) => {
  const { name ,username, email, password} =req.body;
  const hashedPassword = bcryptjs.hashSync(password,10);
const newHospital =new Hospital({name,username,email,password: hashedPassword});
try {
await newHospital.save()
res.status(201).json("Hospital added succesfully");
} catch(error) {
next(errorhandler(650, 'error from function'));
}

}; 