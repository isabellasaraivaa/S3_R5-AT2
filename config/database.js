//db.js serve para fazer conexões com banco de dados 
const sql = require("mssql");

const CONFIG = {
    user:"sa",
    password:"123456789",
    server: "localhost",
    database:"Biblioteca",
    options:{
        encrypt: false,
        trustServerCertificate: true
    }
};
async function getConnection() {
    try {
        const pool = await sql.connect(CONFIG);
        console.log("Conectado ao SQL Server com sucesso!")
        return pool;
    } catch (error) {
        console.error("Error na conexão SQL Server", error);
        throw error;
        
    }
}
module.exports = {
    sql,
    getConnection
};