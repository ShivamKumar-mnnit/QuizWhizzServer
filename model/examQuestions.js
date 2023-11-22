import mongoose from "mongoose";

const ExamQuestionsSchema = new mongoose.Schema({
    examId: {
        type:  String,
        ref: 'exam'
    },
    questionTitle: {
        type: String,
    },
    questionMarks: {
        type: Number,
    },
    questionCategory:{
        type: String,
        default: "MCQ"
    },
    userResponse:{
        type: String,
        default:""
    },

    options: [{
        option: {
            type: String,
        },
        isCorrect: {
            type: Boolean,
            default: false
        }
    }],
},
    {
        timestamps: true,
    }
)

// Use the singular form 'examquestion' for the model name
export default mongoose.model('examquestion', ExamQuestionsSchema);
