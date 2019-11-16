"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
try {
    mongoose_1.default.connect(`mongodb://${process.env.MONGODBURI}:27017/myapp`, { useNewUrlParser: true });
}
catch (error) {
    console.log(error);
}
mongoose_1.default.connection.on('connected', () => {
    console.log('MongoDB Connected');
});
const port = 3000;
const user = new mongoose_1.default.Schema({
    name: String
});
const userModel = mongoose_1.default.model('user', user);
app.get('/', (request, response) => {
    userModel.create({
        name: 'David'
    });
    response.send('Me twice!!!!');
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=app.js.map