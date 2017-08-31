import { LoginPage } from './login.po';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should have <app-login>', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);
  });
  it('should have title', () => {
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);
    expect(page.getTitle().getText()).toEqual("LOGIN");
  });

  it('should login the page',()=>{
      page.navigateTo();
      expect(page.getLoginComponent().isPresent()).toEqual(true);

      var email = page.getInputEmail();
      expect(email.isPresent()).toEqual(true);
      email.sendKeys('jcyovera');

      var passwd= page.getInputPassword();
      expect(passwd.isPresent()).toEqual(true);
      passwd.sendKeys('123456');

      var btnLogin = page.getBtnLogin();
      expect(btnLogin.isPresent()).toEqual(true);

      btnLogin.click().then(()=>{
          expect(page.getHome()).toBe(true);
      });

  });
  it('should show error message if the credentials are wrong',()=>{
    page.navigateTo();
    expect(page.getLoginComponent().isPresent()).toEqual(true);

    var email = page.getInputEmail();
    expect(email.isPresent()).toEqual(true);
    email.sendKeys('jcyovera');

    var passwd= page.getInputPassword();
    expect(passwd.isPresent()).toEqual(true);
    passwd.sendKeys('32423423');

    var btnLogin = page.getBtnLogin();
    expect(btnLogin.isPresent()).toEqual(true);

    btnLogin.click().then(()=>{
       var message= page.getErrorMessage();
       expect(message.isPresent()).toBe(true);
    });

});

});
