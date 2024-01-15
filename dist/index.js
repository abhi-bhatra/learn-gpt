"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openai_1 = require("./openai");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Welcome to the OpenAI API!');
});
app.get('/chat', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, openai_1.completion)();
        res.send(`This is your response: ${response}`);
    });
});
app.listen(PORT, () => {
    console.log(`Open AI app listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map