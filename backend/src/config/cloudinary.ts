import { v2 as cloudinary } from "cloudinary";

import { env } from "./env";

cloudinary.config(
  env.CLOUDINARY_URL,
);

export default cloudinary;