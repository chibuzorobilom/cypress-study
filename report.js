const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/reports/json/",
    reportPath: "./cypress/reports/html/cucumber-report/",
    metadata: {
        browser: {
            name: "chrome",
            version: "125",
        },
        device: "Windows",
        platform: {
            name: "Windows 11",
            version: "10.0.22631 Build 22631",
        },
    },
});