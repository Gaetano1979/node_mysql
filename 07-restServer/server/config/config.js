// ==================
// PUERTO
// ==================

process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// Vencimineto Toke
// ==================

process.env.CAUDUCIDAD_TOKE = 60 * 60 * 24 * 30;

// ==================
// SEED de autenticacion
// ==================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarollo';

// ==================
// Base de datos
// ==================

let urlBD;
if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URI;
}
process.env.URLDB = urlBD;