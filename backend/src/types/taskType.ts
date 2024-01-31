import {Document} from "mongoose"
export interface DTask extends Document {
    text : string,
    day : string,
    reminder : boolean,
    isCompleted : boolean
}