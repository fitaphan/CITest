var assert = require('assert');

describe('App Index', function() {
  context('content', function() {
    it('login', function() {
        browser.url('https://tinhte.vn/login');
        var user = "#pageLogin input#ctrl_pageLogin_login";
        var pass ="#pageLogin input#ctrl_pageLogin_password";
        var loginBtn = "#pageLogin input.primary";
        $(user).setValue('loanlk');
        $(pass).setValue('loanlk1');
        $(loginBtn).click();

    });


  });
});
