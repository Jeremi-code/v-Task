import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    text : {
        type: String,
        required: true
    },
    day : {
        type: String,
        required: true
    },
    reminder : {
        type: Boolean,
        required: true
    }
})
const Task = mongoose.model('Task', taskSchema)
export default Task