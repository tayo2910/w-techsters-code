// const mongoose = require("mongoose");

// const courseSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   level: {
//     type: String,
//     required: true,
//     enum: ["beginner", "intermediate", "advanced"],
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   image: String,
//   courseType: {
//     type: String,
//     required: true,
//     enum: ["video", "audio", "document"],
//   },
//   hour: {
//     type: String, // Store price as a string
//     required: true
//   },
//   price: {
//     type: String, // Store price as a string
//     required: true
//   },
//   courseContent: String,

//   whatIsIncluded: {
//     type: [String],
//     default: [],
//   },
//   curriculum: [
//     {
//       courseName: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   requirement: [
//     {
//       name: String,
//     },
//   ],
//   totalNumberOfEnrolledStudent: {
//     type: Number,
//     default: 0
//   },
//   status: {
//     type: String,
//     enum: ["pending", "live", "reject", "approved"],
//     default: "pending",

//   },

//   Agent: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Instructors",
//     required: true,
//   },
//   //createdAt: { type: Date, default: Date.now },
// });
// module.exports = mongoose.model("Course", courseSchema);
