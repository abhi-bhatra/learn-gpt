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
exports.completion = void 0;
const openai_1 = require("@azure/openai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function completion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('This is console response: ', process.env.AZURE_OPENAI_ENDPOINT);
            console.log('This is console response: ', process.env.AZURE_OPENAI_KEY);
            const deploymentId = "openai-model-demo";
            const client = new openai_1.OpenAIClient(process.env.AZURE_OPENAI_ENDPOINT, new openai_1.AzureKeyCredential(process.env.AZURE_OPENAI_KEY));
            const { choices } = yield client.getChatCompletions(deploymentId, [
                { role: 'system', content: 'You are a friendly AI assisstant' },
                { role: 'user', content: 'What is capital of India ?' }
            ]);
            console.log('This is console response: ', choices[0].message);
            return choices[0].message.content;
        }
        catch (error) {
            console.error("The sample encountered an error:", error);
        }
    });
}
exports.completion = completion;
//# sourceMappingURL=openai.js.map