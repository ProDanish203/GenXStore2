import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
    },
    desc: String,
    cat: {
      type: String,
      required: [true, "Please Provide a category"],
    },
    images: [
      {
        type: String,
      },
    ],
    price: [
      {
        ct: String,
        rate: String,
        oldRate: String,
      },
    ],
  },
  { timestamps: true }
);

const User =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default User;
