<?php
// Exemplo de Model para conexão
class Database {
    private $host = "localhost";
    private $db_name = "tcc_projeto";

    public function conectar() {
        // Aqui viria a lógica de PDO ou conexão com banco
        echo "Conexão com o banco de dados preparada.";
    }
}
?>