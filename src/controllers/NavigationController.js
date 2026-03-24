/**
 * NavigationController
 * Responsável por decidir para onde o usuário vai após uma ação.
 */

function gerenciarRota(acao) {
    if (acao === "FINALIZAR_CADASTRO") {
        // Lógica: Validar dados -> Salvar no Model -> Redirecionar
        return "Exibindo tela de Sucesso";
    } else {
        return "Permanecer na página atual";
    }
}

// Exemplo de lógica de processamento
console.log("Controller pronto para gerenciar rotas de navegação.");