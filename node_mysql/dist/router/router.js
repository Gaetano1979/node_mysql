// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/clientes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo Bien'
    });
});
router.get('/clientes/:id', (req, res) => {
    const id_params = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Todo Bien en Id',
        id: id_params
    });
});
exports.default = router;