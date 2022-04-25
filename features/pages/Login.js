import { Selector, t } from 'testcafe'

class Login {
    constructor(){

        this.inputUser = Selector("#user")
        this.btnContinue = Selector("#continue")
        this.msg = Selector("#user-error-message > p")
        
    }

    async doLogin(user) {
        await t.typeText(this.inputUser, user)
        await t.click(this.btnContinue)
    }
}

export default Login