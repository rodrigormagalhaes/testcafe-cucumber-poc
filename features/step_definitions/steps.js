const { Given, When, Then } = require('cucumber')

import Home from '../pages/Home'
import Login from '../pages/Login'

const home = new Home()
const login = new Login()


Given(/^que acesso a pagina home$/, async (t) => {
    await t.navigateTo("https://pagseguro.uol.com.br/")
})

When(/^clico no botão Entrar$/, async (t) => {
    home.accessLogin()
})

When(/^preencho o campo com "([^"]*)" inválido$/, async (t, [user]) => {
    await login.doLogin(user)
})

Then(/^é exibida mensagem de erro correspondente$/, async (t) => {
    await t.expect(login.msg.textContent).eql("Usuário inválido. Confira os dados.")
})