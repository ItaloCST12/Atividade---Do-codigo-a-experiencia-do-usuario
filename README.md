# Projeto MVC — TCC

Projeto desenvolvido seguindo o padrao de arquitetura **MVC** (_Model-View-Controller_).
A pagina inicial (`index.html`) serve como ponto de entrada da aplicacao, com uma navbar e um botao de acao principal que demonstra a comunicacao entre View e Controller.

---

## Estrutura do Projeto

### Pastas principais

- `src/views/` — telas HTML da aplicacao
- `src/views/css/` — folhas de estilo externas
- `src/views/js/` — scripts JavaScript (logica de interacao)
- `src/controllers/` — logica de controle e redirecionamento
- `src/models/` — camada de dados (a ser implementada)
- `src/config/` — configuracao do sistema (conexao com banco)

### Arquivos do projeto

| Arquivo                                   | Descricao                                   |
| ----------------------------------------- | ------------------------------------------- |
| `src/views/index.html`                    | Pagina inicial com navbar e botao de acao   |
| `src/views/cadastro.html`                 | Formulario de cadastro (estrutura pendente) |
| `src/views/contatos.html`                 | Lista de contatos (estrutura pendente)      |
| `src/views/produto.html`                  | Exibicao de produtos (estrutura pendente)   |
| `src/views/css/style.css`                 | Estilos com contraste e efeito hover        |
| `src/views/js/main.js`                    | Logica de clique e feedback visual          |
| `src/controllers/NavigationController.js` | Controller que gerencia rotas de navegacao  |
| `src/config/database.php`                 | Classe Database para conexao com o banco    |

---

## Como funciona a Pagina Inicial

A tela `index.html` carrega o arquivo **`css/style.css`** para estilizacao e o **`js/main.js`** para interatividade.

### Navbar atual

A navbar possui dois links ("Inicio" e "Perfil") e um botao "Realizar Acao":

```html
<nav>
  <ul>
    <li><a href="#">Início</a></li>
    <li><a href="#">Perfil</a></li>
    <li><button id="btn-acao-principal">Realizar Ação</button></li>
  </ul>
</nav>
```

### Fluxo de interacao

1. O usuario acessa `index.html` no navegador.
2. Visualiza o menu superior e o botao "Realizar Acao".
3. Ao clicar no botao, o `js/main.js` captura o evento e exibe uma mensagem de feedback na tela.
4. No lado do Controller, o `NavigationController.js` possui a funcao `gerenciarRota()` que decide o redirecionamento com base na acao recebida.

---

## Progresso do Desenvolvimento

### Status das Rotas

Quando o usuario clica no botao "Realizar Acao", o evento e capturado pelo `js/main.js`, que simula uma chamada ao `NavigationController.js`. O Controller possui a funcao `gerenciarRota(acao)` que verifica a acao recebida: se for "FINALIZAR_CADASTRO", exibe a tela de sucesso; caso contrario, permanece na pagina atual.

### Feedback ao Usuario

O sistema utiliza feedback visual para informar o usuario que uma acao foi concluida:

- Uma mensagem de texto e exibida na tela ("Processando sua solicitacao...") com mudanca de cor para azul.
- O efeito `:hover` no CSS indica que o botao e clicavel antes mesmo do clique (muda de cor e aumenta levemente de tamanho).
- O botao possui contraste de cores (fundo escuro `#0056b3`, letra branca `#ffffff`) para facilitar a leitura e acessibilidade.

### Dificuldades Tecnicas

Um desafio encontrado foi manter a separacao entre a logica de interacao (JavaScript) e a estrutura da pagina (HTML). A tentacao inicial era colocar scripts inline direto no HTML, mas para seguir o padrao MVC foi necessario mover toda a logica para o arquivo `js/main.js` externo e referencia-lo com a tag `<script src>`. Isso exigiu cuidado com os caminhos relativos dos arquivos e com a ordem de carregamento dos scripts.

---

## Links Uteis

- [Pagina Inicial do Projeto](src/views/index.html)
- [Guia de Markdown](https://www.markdownguide.org)
