exports.config = {
  //  seleniumAddress: 'http://localhost:4444/wd/hub',

    baseURL: 'https://jobs.jnj.com/',
    loginEmailValue: '<email>',
    loginPasswordValue: 'Pass123!',
    getPageTimeout: 35000,
    allScriptsTimeout: 50000,
    defaultTimeoutInterval: 60000,
    slowSpecTimeout: 2500000,
    regularTimeout: 5000
};
