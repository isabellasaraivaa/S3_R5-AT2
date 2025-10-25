const { sql, getConnection } = require("../config/database");

const ClienteModel = {
    async criarCliente(nome, email, telefone){
        const pool = await getConnection();
        return await pool.request()
        .input('nome', sql.VarChar, nome)
        .input('email', sql.VarChar, email)
        .input('telefone', sql.VarChar, telefone)
        .query(`INSERT INTO Cliente (nome, email, telefone) VALUES (@nome, @email, @telefone)`);
    },

    async listarTodos() {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM Cliente");
        return result.recordset;
    },

    async buscarPorEmail(email) {
        const pool = await getConnection();
        const result = await pool.request()
          .input('email', sql.VarChar, email)
          .query("SELECT * FROM Cliente WHERE email = @email");
     return result.recordset;
    }
};
 module.exports = {ClienteModel};

