var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import { product } from "../schemas/schemas.js";
import { filterProductsById, filterProductsByName } from "../services/postService.js";
function checkProduct(req, res, next) {
    var _a = req.body, name = _a.name, price = _a.price, description = _a.description;
    var productObj = {
        name: name,
        price: price,
        description: description
    };
    var validation = product.validate(productObj);
    if (validation.error) {
        var errors = validation.error.details.map(function (detail) { return detail.message; });
        return res.status(422).send(errors);
    }
    next();
}
function verifyFilterProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var name, checkName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.query.name;
                    if (!name) return [3 /*break*/, 2];
                    return [4 /*yield*/, filterProductsByName(name)];
                case 1:
                    checkName = _a.sent();
                    if (checkName.rowCount === 0) {
                        return [2 /*return*/, res.status(400).send({ message: "Não foi encontrado produto com esse nome!" })];
                    }
                    _a.label = 2;
                case 2:
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
function checkUpdate(req, res, next) {
    var price = req.query.price;
    if (!price) {
        return res.sendStatus(400).send({ message: "Insira algum valor!" });
    }
    next();
}
function checkDel(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var checkExist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, filterProductsById(Number(req.query.id))];
                case 1:
                    checkExist = _a.sent();
                    if (checkExist.rowCount === 0) {
                        return [2 /*return*/, res.sendStatus(400).send({ message: "Não existe nenhum produto com esse ID" })];
                    }
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
export { checkProduct, verifyFilterProduct, checkUpdate, checkDel };
