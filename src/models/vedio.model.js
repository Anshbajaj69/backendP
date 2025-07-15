import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the Video schema
const videoSchema = new Schema(
  {
    // Cloudinary URL for the video file
    videoFile: {
      type: String,
      required: true
    },

    // Cloudinary URL for the video thumbnail
    thumbNail: {
      type: String,
      required: true
    },

    // Title of the video
    title: {
      type: String,
      required: true
    },

    // Description of the video content
    description: {
      type: String,
      required: true
    },

    // Duration of the video in HH:MM:SS or MM:SS format
    duration: {
      type: String,
      required: true
    },

    // Number of views — default is 0
    views: {
      type: Number,
      default: 0
    },

    // If the video is publicly published or not
    isPublished: {
      type: Boolean,
      default: true
    },

    // Reference to the User who owns the video
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true
  }
);

// Add pagination plugin for aggregation queries
videoSchema.plugin(mongooseAggregatePaginate);

// Export the model
export const Video = mongoose.model("Video", videoSchema);
