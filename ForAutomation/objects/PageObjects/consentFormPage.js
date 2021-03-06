'use strict';

const config = require('../../config/config.js'),
    cfpl = require("../locators/consentFormPageLocators.json"),
    EC = protractor.ExpectedConditions,
    loginPage = require('./loginPage.js');

require("babel-core/register");
require("babel-polyfill");

let ConsentFormPage = function() {
    //page elements locators
    this.lblConsentHeader = element(by.xpath("//h1[@class='privacy-header-title']"));
    this.lblInformationYouProvide = element(by.xpath("//strong[contains(text(), 'Information You Provide')]"));
    this.lblPassiveInformation = element(by.xpath("//strong[contains(text(), 'Passive Information Collection and Use')]"));
    this.lblThroughBrowser = element(by.xpath("//strong[contains(text(), 'Through your browser:')]"));
    this.lblUsingCookies = element(by.xpath("//strong[contains(text(), 'Using cookies:')]"));
    this.lblUsingFlashCookies = element(by.xpath("//strong[contains(text(), 'Using Flash cookies')]"));
    this.lblUsingPixel = element(by.xpath("//strong[contains(text(), 'Using pixel tags, web beacons, ')]"));
    this.lblOnlineAdv = element(by.xpath("//strong[contains(text(), 'Online behavioral advertising:')]"));
    this.agreeButton = element(by.xpath("//button[contains(text(), 'Agree')]"));

    this.clickAgreeButton  = async function() {
        await this.agreeButton.click();
        await browser.wait(EC.visibilityOf(loginPage.labelLogin), config.config.regularTimeout)
    };
};

module.exports = new ConsentFormPage();
