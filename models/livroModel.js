// model tem as funções que fazem parte operações no banco de dados como inserir e buscar livros
const { sql, getConnection } = require("../config/database");

const LivrosModel = {
    async criarLivro(titulo, ano, quantidade) {
        const pool = await getConnection();
        return await pool.request()
            .input('titulo', sql.VarChar, titulo)
            .input('ano', sql.Int, ano)
            .input('quantidade', sql.Int, quantidade)
            .query(`INSERT INTO Livros (titulo, ano_publicacao, quantidade_exemplares) VALUES (@titulo, @ano, @quantidade)`);
    },

    async ListarTodos() {
        try {
            const pool = await getConnection();
            const querySQL = "SELECT * FROM Livros";
            const result = await pool.request().query(querySQL);
            return result.recordset;
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
            throw error;
        }
    },

    async BuscarPorTitulo(titulo) {
        try {
            const pool = await getConnection();
            const querySQL = "SELECT * FROM Livros WHERE titulo = @titulo";
            const result = await pool.request()
                .input('titulo', sql.VarChar, titulo)
                .query(querySQL);
            return result.recordset;
        } catch (error) {
            console.error("Erro ao buscar livro por título", error);
            throw error;
        }
    }
};

module.exports = { LivrosModel };


   