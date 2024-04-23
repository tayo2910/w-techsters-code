import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
    studentId: {type: String},
    grade: {type: Number},
    instructorId: { type: String},
    date: { type: Date},
    course: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
        required: true
    }

})

export default mongoose.model("Grade", GradeSchema)