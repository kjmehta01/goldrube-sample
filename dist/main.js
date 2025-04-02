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
const goldrube_1 = require("goldrube");
const axios_1 = __importDefault(require("axios"));
let l1 = new goldrube_1.Lambda((input) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        sex: "M",
        birth: "01/01/" + (2025 - input.age)
    };
    l2.trigger(params);
    return true;
}));
function testFunc(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts/' + input.sex);
            console.log(response.data); // Logs the response data
            return true;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            return false;
        }
    });
}
let l2 = new goldrube_1.Lambda(testFunc);
