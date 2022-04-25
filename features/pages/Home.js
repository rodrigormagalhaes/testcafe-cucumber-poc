import { Selector, t } from 'testcafe'

class Home {
    constructor(){

        this.btnEntrar = Selector("#entrar")

    }

    async accessLogin() {
        await t.click(this.btnEntrar)
    }
}

export default Home