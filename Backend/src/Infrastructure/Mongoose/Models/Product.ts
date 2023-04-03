import { Schema, model } from "mongoose"

const ProductSchema = new Schema(
  {
    ref: { type: String, require: true, trim: true },
    name: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
    quantity: { type: Number, require: true, trim: true },
    cost: { type: Number, require: true, trim: true },
    price: { type: Number, require: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model("Product", ProductSchema)
