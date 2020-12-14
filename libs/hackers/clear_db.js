"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("dotenv");
var typeorm_1 = require("typeorm");
//import { Installer } from './lib/installer'
var User_1 = require("../../entity/User");
var Instance_1 = require("../../entity/Instance");
var InstanceRelation_1 = require("../../entity/InstanceRelation");
var wait = true;
console.log("clear init");
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var cors, app, del, _a, _b, _i, x, data, a, _c, _d, _e, x, data, a, _f, _g, _h, x, data, a, e_1;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _j.trys.push([0, 16, , 17]);
                cors = require('cors');
                app = express_1.default();
                app.use('/', express_1.default.static(__dirname + '/../public'));
                app.use(express_1.default.static("./../public"));
                app.use(cors());
                app.use(express_1.default.json());
                return [4 /*yield*/, connection.manager.getRepository(InstanceRelation_1.InstanceRelation).find()];
            case 1:
                del = _j.sent();
                _a = [];
                for (_b in del)
                    _a.push(_b);
                _i = 0;
                _j.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                x = _a[_i];
                data = del[x];
                console.log("deleted", data);
                return [4 /*yield*/, connection.manager.getRepository(InstanceRelation_1.InstanceRelation).delete(data.id)];
            case 3:
                a = _j.sent();
                _j.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [4 /*yield*/, connection.manager.getRepository(Instance_1.Instance).find()];
            case 6:
                del = _j.sent();
                _c = [];
                for (_d in del)
                    _c.push(_d);
                _e = 0;
                _j.label = 7;
            case 7:
                if (!(_e < _c.length)) return [3 /*break*/, 10];
                x = _c[_e];
                data = del[x];
                console.log("deleted", data);
                return [4 /*yield*/, connection.manager.getRepository(Instance_1.Instance).delete(data.id)];
            case 8:
                a = _j.sent();
                _j.label = 9;
            case 9:
                _e++;
                return [3 /*break*/, 7];
            case 10: return [4 /*yield*/, connection.manager.getRepository(User_1.User).find()];
            case 11:
                del = _j.sent();
                _f = [];
                for (_g in del)
                    _f.push(_g);
                _h = 0;
                _j.label = 12;
            case 12:
                if (!(_h < _f.length)) return [3 /*break*/, 15];
                x = _f[_h];
                data = del[x];
                console.log("deleted", data);
                return [4 /*yield*/, connection.manager.getRepository(User_1.User).delete(data.id)];
            case 13:
                a = _j.sent();
                _j.label = 14;
            case 14:
                _h++;
                return [3 /*break*/, 12];
            case 15: return [3 /*break*/, 17];
            case 16:
                e_1 = _j.sent();
                console.log(e_1);
                return [3 /*break*/, 17];
            case 17:
                wait = false;
                console.log("clear");
                return [2 /*return*/];
        }
    });
}); });
console.log("clearning");
//ts-node ./src/tests_local/clear_db.ts && ts-node src/index.ts
//# sourceMappingURL=clear_db.js.map