Feature: Login

    @rodrigo
    Scenario: Tentativa de login com dados inválidos
    Given que acesso a pagina home
    When clico no botão Entrar
    When preencho o campo com "<user>" inválido
    Then é exibida mensagem de erro correspondente
    Examples:
        | user     |
        | Rodrigo   |
        | Magalhaes |
        | 123       |