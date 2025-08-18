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

const baseUrl =  'http://localhost:6006';

const thresholds = {
    'AppLink - PrimaryDark': 0.02,
    'AppLink - Primary': 0.02,
    'AboutPage - Dark': 0.02,
    'AboutPage - Normal': 0.02,
    'MainPage - Dark': 0.02,
    'MainPage - Normal': 0.02,
    'NotFoundPage - Dark': 0.02,
    'NotFoundPage - Normal': 0.02,
    'Button - Primary': 0.02,
    'Button - Clear': 0.02,
    'Button - Outline': 0.02,
    'Button - OutlineDark': 0.02,
    'Loader - Dark': 0.02,
    'Loader - Normal': 0.02,
    'Navbar - Dark': 0.02,
    'Navbar - Lighty': 0.02,
    'PageError - Dark': 0.02,
    'PageError - Lighty': 0.02,
    
};

const scenarios = components.map((component) => {
    const label = `${component.name} - ${component.theme}`;
    const url = `${baseUrl}/iframe.html?id=${component.path.replace(/^\//, '')}&viewMode=story`;

    const misMatchThreshold = thresholds[label] || 0.005;

    return {
        label,
        url,
        selectors: ['#storybook-root'],
        delay: 2000,
        misMatchThreshold,

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
    asyncCaptureLimit: 2,
    asyncCompareLimit: 50,
    debugWindow: false,
    report: ['browser'],
    debug: false,
    onReadyScript: 'onReady.cjs',
};

fs.writeFileSync('backstop.json', JSON.stringify(backstopConfig, null, 2));
console.log('✅ backstop.json generated successfully');