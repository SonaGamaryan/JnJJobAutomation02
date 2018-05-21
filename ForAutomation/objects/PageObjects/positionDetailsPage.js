'use strict';

const config = require('../../config/config.js'),
    consentFormPage = require('./consentFormPage.js'),
    pdl = require("../locators/positionDetailsPageLocators.json"),
    EC = protractor.ExpectedConditions;

let PositionDetailsPage = function() {
    //page elements locators
    this.lblJobAlert = element(by.xpath("//*[@id='job-alerts-container']//label"));
    this.lblJobTitle = element(by.id('label-job-title'));
    this.lblLocations = element(by.xpath("//*[@class='meta-data__label'][contains(text(), 'Locations:')]"));
    this.lblFunctions = element(by.xpath("//*[@class='meta-data__label'][contains(text(), 'Functions:')]"));
    this.lblJobDescription = element(by.xpath("//*[@class='job-description-header'][contains(text(), 'Job Description')]"));
    this.applyButton = element(by.xpath("//*[@id='link-apply']"));
    this.fieldAlertEmail = element(by.id('jibe-trackif-email'));
    this.getAlertButton = element(by.id('jibe-trackif-button'));
    this.emailAlertErrorMessage = element(by.id('jibe-trackif-error-noemail'));
    this.alertSuccessMessage = element(by.id('jibe-trackif-success-process'));
    this.loginEmailValue = pdl.pageElement.loginEmailValue;

    this.enterfieldAlertEmail  = async function(email)  {
        await this.fieldAlertEmail.clear().sendKeys(email);
    };

    this.clickAlertEmail  = async function(message)  {
        await this.getAlertButton.click();
        await browser.wait(EC.visibilityOf(message), config.config.regularTimeout)
    };

    this.clickApplyButton  = async function() {
        await this.applyButton.click();
        await browser.wait(EC.visibilityOf(consentFormPage.lblConsentHeader), config.config.regularTimeout)
    };
};

module.exports = new PositionDetailsPage();
