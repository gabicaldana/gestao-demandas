# Sistema de Gestão de Demandas Técnicas

Este projeto é uma aplicação web simples desenvolvida como parte de um processo seletivo. O objetivo é permitir o registro, listagem e gerenciamento de status de demandas internas de uma equipe técnica.

## Funcionalidades

- **Cadastro de Demandas**: Registro de título, descrição detalhada, responsável, status inicial e data.
- **Listagem Dinâmica**: Visualização clara de todas as solicitações cadastradas.
- **Alteração de Status**: Atualização em tempo real do progresso da demanda (Em aberto, Em andamento ou Concluído) com feedback visual por cores.
- **Exclusão de Registros**: Opção para remover demandas da listagem.
- **Persistência Local**: Os dados são salvos no `localStorage` do navegador, permitindo que as informações permaneçam salvas mesmo após atualizar a página.
- **Interface Responsiva**: Layout adaptável para diferentes tamanhos de tela.


## Como Rodar o Projeto Localmente

Como a aplicação foi desenvolvida utilizando tecnologias nativas do navegador, não é necessário instalar dependências ou configurar um servidor complexo.

1.  **Baixe os arquivos**: Certifique-se de ter os arquivos `index.html`, `style.css` e `script.js` na mesma pasta.
2.  **Abra o Navegador**:
    - Clique duas vezes no arquivo `index.html`.
    - Ou arraste o arquivo `index.html` para dentro de uma aba do seu navegador preferido (Chrome, Firefox, Edge, etc).
3.  **Uso**: A aplicação estará pronta para uso imediato.


## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica.
- **CSS3**: Estilização moderna com foco em usabilidade e feedback visual.
- **JavaScript**: Lógica de manipulação de dados e DOM, sem dependência de frameworks externos.


## Possibilidades de Melhorias Futuras

Embora a aplicação atual atenda a todos os requisitos propostos de forma simples e funcional, em um cenário de produção real, as seguintes melhorias poderiam ser implementadas:

1.  **Autenticação de Usuários:** Implementação de login e níveis de acesso (ex: apenas administradores podem excluir demandas).
2.  **Filtros e Busca:** Adição de um campo de busca por título e filtros por status ou responsável para facilitar a navegação em grandes volumes de dados.
3.  **Persistência em Banco de Dados:** Migração do `localStorage` para uma API com banco de dados (SQLite ou PostgreSQL) para garantir a segurança e sincronização dos dados entre diferentes dispositivos.
4.  **Notificações:** Sistema de alertas (e-mail ou push) quando o status de uma demanda for alterado para "Concluído".
5.  **Ordenação:** Possibilidade de ordenar a listagem por data de abertura ou prioridade.

---
*Desenvolvido para fins de avaliação técnica.*
