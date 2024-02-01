import {Document} from "mongoose"
export interface task extends Document {
    text : string,
    day : string,
    reminder : boolean,
    isCompleted : boolean
}