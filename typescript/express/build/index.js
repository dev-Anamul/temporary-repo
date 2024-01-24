"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouter_1 = __importDefault(require("./loginRouter"));
const app = (0, express_1.default)();
app.use("/login", loginRouter_1.default);
app.listen(3500, () => {
    console.log("Server started on port 3500");
});
