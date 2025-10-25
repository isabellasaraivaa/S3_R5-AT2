const sql = require("mssql");

const CONFIG = {
    user:"sa",
    passaword:"123456789",
    server: "localhost",
    database:"Biblioteca",
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
};
async function getConnection() {
    try {
        const pool = await sql.connect(CONFIG);
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