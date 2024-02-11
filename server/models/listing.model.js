import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    modelYear: {
      type: Number,
      required: true,
    },
    mileage: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    bodyType: {
      type: String,
      required: true,
    },
    imageURLs: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
