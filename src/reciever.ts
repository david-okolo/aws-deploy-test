import mySingleton from "./emitter";


export const reportIt = () => {
    mySingleton.addData("I Noticed...")
}