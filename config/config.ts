import { browser, promise } from "protractor/built";
import "reflect-metadata";

const specReporter: any = require("jasmine-spec-reporter").SpecReporter;
const Jasmine2HtmlReporter: any = require("protractor-jasmine2-html-reporter");

export let config: any = {
    capabilities: {
        browserName: "chrome",
        loggingPrefs: {
            browser: "SEVERE",
            driver: "SEVERE",
            server: "SEVERE",
          },
        chromeOptions: {
            args: [
                "--start-maximized",
                "--disable-infobars",
                "--disable-extensions",
            ],
        },
    },

    baseUrl: "https://www.tiendanube.com/",
    directConnect: true,
    framework: "jasmine2",

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        silent: true,
        defaultTimeoutInterval: 30000,
    },

    params: {
        wait_element_timeout: 30000,
    },
    allScriptsTimeout: 30000,

    onPrepare: () => {
        browser.waitForAngularEnabled(false);

        // image comparison
        const protractorImageComparison: any = require("protractor-image-comparison");
        browser.protractorImageComparison = new protractorImageComparison({
            baselineFolder: "./comparison/baseline/",
            screenshotPath: "./comparison/screenshot/",
        });

        // html report
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "reports/html",
            takeScreenshots: false,
            takeScreenshotsOnlyOnFailures: false,
            fixedScreenshotName: false,
            cleanDestination: true,
        }));

        // console Spec Report
        jasmine.getEnv().addReporter(new specReporter({
            suite: {
                displayNumber: true,
            },
            spec: {
                displayErrorMessages: false,
                displayStacktrace: false,
                displaySuccessful: true,
                displayFailed: true,
                displayPending: true,
                displayDuration: true,
            },
            summary: {
                displayErrorMessages: true,
                displayStacktrace: false,
                displaySuccessful: false,
                displayFailed: true,
                displayDuration: false,
            },
        }));
    },

    suites: {
        test: [
            "../e2e/tests/sampletest.spec.js",
        ],
    },
};
