import express from "express";
import mongoose from "mongoose";

const app = express();

try {
    mongoose.connect(`mongodb://${process.env.MONGODBURI}:27017/myapp`, {useNewUrlParser: true})
} catch (error) {
    console.log(error)
}

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
})

const port: number = 3000;

const user = new mongoose.Schema({
    name: String
});

const userModel = mongoose.model('user', user);

app.get('/', (request, response) => {

    userModel.create({
        name: 'David'
    });

    response.send('Me twice!!!!');
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})

