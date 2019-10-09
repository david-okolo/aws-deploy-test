import express from "express";
import mongoose from "mongoose";

const app = express();

try {
    mongoose.connect('mongodb://localhost:27018/myapp', {useNewUrlParser: true})
} catch (error) {
    console.log(error)
}

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
})

const port: number = 3000;

app.get('/', (request, response) => {

    const user = new mongoose.Schema({
        name: String
    });

    const userModel = mongoose.model('user', user);

    userModel.create({
        name: 'David'
    });
    
    response.send('Me');
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})

