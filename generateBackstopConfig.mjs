import fs from 'fs';

const components = [
    { name: 'AboutPage', path: '/pages-aboutpage--dark', theme: 'Dark' },
    { name: 'AboutPage', path: '/pages-aboutpage--normal', theme: 'Normal' },
    { name: 'MainPage', path: '/pages-mainpage--dark', theme: 'Dark' },
    { name: 'MainPage', path: '/pages-mainpage--normal', theme: 'Normal' },
    { name: 'NotFoundPage', path: '/pages-notfoundpage--dark', theme: 'Dark' },
    { name: 'NotFoundPage', path: '/pages-notfoundpage--normal', theme: 'Normal' },

    { name: 'AppLink', path: '/shared-applink--primary', theme: 'Primary' },
    { name: 'AppLink', path: '/shared-applink--secondary', theme: 'Secondary' },
    { name: 'AppLink', path: '/shared-applink--red', theme: 'Red' },
    { name: 'AppLink', path: '/shared-applink--primary-dark', theme: 'PrimaryDark' },
    { name: 'AppLink', path: '/shared-applink--secondary-dark', theme: 'SecondaryDark' },
    { name: 'AppLink', path: '/shared-applink--red-dark', theme: 'RedDark' },

    { name: 'Button', path: '/shared-button--primary', theme: 'Primary' },
    { name: 'Button', path: '/shared-button--clear', theme: 'Clear' },
    { name: 'Button', path: '/shared-button--outline', theme: 'Outline' },
    { name: 'Button', path: '/shared-button--outline-dark', theme: 'OutlineDark' },

    { name: 'Loader', path: '/shared-loader--dark', theme: 'Dark' },
    { name: 'Loader', path: '/shared-loader--normal', theme: 'Normal' },

    { name: 'Navbar', path: '/widgets-navbar--dark', theme: 'Dark' },
    { name: 'Navbar', path: '/widgets-navbar--lighty', theme: 'Lighty' },

    { name: 'PageError', path: '/widgets-pageerror--dark', theme: 'Dark' },
    { name: 'PageError', path: '/widgets-pageerror--prima-lighty', theme: 'Lighty' },

    { name: 'Sidebar', path: '/widgets-sidebar--dark', theme: 'Dark' },
    { name: 'Sidebar', path: '/widgets-sidebar--prima-lighty', theme: 'Lighty' },

    { name: 'ThemeSwitcher', path: '/widgets-themeswitcher--dark', theme: 'Dark' },
    { name: 'ThemeSwitcher', path: '/widgets-themeswitcher--normal', theme: 'Normal' },
];

const viewports = [
    { label: 'desktop', width: 1366, height: 768, deviceScaleFactor: 1 },
    { label: 'mobile', width: 375, height: 667, deviceScaleFactor: 2 },
];

// eslint-disable-next-line no-undef
const isCI = process.env.CI === 'true';
const baseUrl = isCI ? 'http://host.docker.internal:6006' : 'http://localhost:6006';

const scenarios = components.map((component) => {
    const label = `${component.name} - ${component.theme}`;
    const url = `${baseUrl}/iframe.html?id=${component.path.replace(/^\//, '')}&viewMode=story`;

    return {
        label,
        url,
        selectors: ['#storybook-root'],
        delay: 1500,
        misMatchThreshold: 0.1, 
        requireSameDimensions: false,
    };
});

const backstopConfig = {
    id: 'storybook-visual-tests',
    viewports,
    scenarios,
    fileNameTemplate: '{scenarioLabel}_{viewportLabel}_{selectorIndex}',
    paths: {
        bitmaps_reference: 'backstop_data/bitmaps_reference',
        bitmaps_test: 'backstop_data/bitmaps_test',
        engine_scripts: 'backstop_data/engine_scripts',
        html_report: 'backstop_data/html_report',
        ci_report: 'backstop_data/ci_report',
    },
    engine: 'puppeteer',
    engineOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    report: ['browser'],
    debug: false,
    onReadyScript: 'onReady.cjs',
};

fs.writeFileSync('backstop.json', JSON.stringify(backstopConfig, null, 2));
console.log('✅ backstop.json generated successfully');
