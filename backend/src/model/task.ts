import mongoose, {Document} from "mongoose";
import {DTask} from "../types/taskType";
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
const Task = mongoose.model<DTask>('Task', taskSchema)
export default Task