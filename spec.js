const commonactions = require('./Actions/commonactions');

describe('Login and click on cart', function()
{
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('It should take the user to his Review Order page', function()
    {
        browser.ignoreSynchronization = true; 
        browser.driver.manage().window().maximize();
        browser.get('http://qa.marykayintouch.ca');
        
        element(by.id('txtConsultantID')).sendKeys('BU6865');
        element(by.id('txtPassword')).sendKeys('MKqa2015');
        element(by.id('btnSubmit')).click();

        var header = element(by.className('welcome page-header'));
        expect(header.getText()).toContain("Lucie");
        element(by.css('div#shopping-bag')).click();

        console.log("Successfully completed the test case");
        
    });
});