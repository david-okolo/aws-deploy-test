import express from "express";
import mySingleton from "./emitter";
import { reportIt } from "./reciever";

const app = express();

const port = 4000;

mySingleton.addEventListener("reject", reportIt);

app.get("/", (request, response) => {
    response.send("Okay")
    mySingleton.pushNotification("reject")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}....`)
})



