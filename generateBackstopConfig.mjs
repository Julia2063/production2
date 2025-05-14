import fs from 'fs';

const components = [
    {
        name: 'AboutPage - Dark',
        path: '/pages-aboutpage--dark',
    },
    {
        name: 'AboutPage - Normal',
        path: '/pages-aboutpage--normal',
    },

    {
        name: 'MainPage - Dark',
        path: '/pages-mainpage--dark',
    },
    {
        name: 'MainPage - Normal',
        path: '/pages-mainpage--normal',
    },

    {
        name: 'NotFoundPage - Dark',
        path: '/pages-notfoundpage--dark',
    },
    {
        name: 'NotFoundPage - Normal',
        path: '/pages-notfoundpage--normal',
    },

    {
        name: 'AppLink - Primary',
        path: '/shared-applink--primary',
    },
    {
        name: 'AppLink - Secondary',
        path: '/shared-applink--secondary',
    },
    {
        name: 'AppLink - Red',
        path: '/shared-applink--red',
    },
    {
        name: 'AppLink - PrimaryDark',
        path: '/shared-applink--primary-dark',
    },
    {
        name: 'AppLink - SecondaryDark',
        path: '/shared-applink--secondary-dark',
    },
    {
        name: 'AppLink - RedDark',
        path: '/shared-applink--red-dark',
    },

    {
        name: 'Button - Primary',
        path: '/shared-button--primary',
    },
    {
        name: 'Button - Clear',
        path: '/shared-button--clear',
    },
    {
        name: 'Button - Outline',
        path: '/shared-button--outline',
    },
    {
        name: 'Button - Outline Dark',
        path: '/shared-button--outline-dark',
    },

    {
        name: 'Loader - Dark',
        path: '/shared-loader--dark',
    },
    {
        name: 'Loader - Normal',
        path: '/shared-loader--normal',
    },

    {
        name: 'Navbar - Dark',
        path: '/widgets-navbar--dark',
    },
    {
        name: 'Navbar - Lighty',
        path: '/widgets-navbar--lighty',
    },

    {
        name: 'PageError - Dark',
        path: '/widgets-pageerror--dark',
    },
    {
        name: 'PageError - Lighty',
        path: '/widgets-pageerror--prima-lighty',
    },

    {
        name: 'Sidebar - Dark',
        path: '/widgets-sidebar--dark',
    },
    {
        name: 'Sidebar - Lighty',
        path: '/widgets-sidebar--prima-lighty',
    },
    
    {
        name: 'ThemeSwitcher - Dark',
        path: '/widgets-themeswitcher--dark',
    },
    {
        name: 'ThemeSwitcher - Normal',
        path: '/widgets-themeswitcher--normal',
    },

];

const viewports = [
    { label: 'desktop', width: 1366, height: 768 },
    { label: 'mobile', width: 375, height: 667 },
];

const scenarios = components.flatMap((component) =>
    viewports.map((viewport) => ({
        label: `${component.name} - ${viewport.label}`,
        url: 
        `http://localhost:6006/iframe.html?id=${component.path.replace(/^\//, '')}&viewMode=story`,

        selectors: ['#storybook-root'],
        delay: 1000,
        misMatchThreshold: viewport.label === 'mobile' ? 0.35 : 0.1,
        requireSameDimensions: false,
    }))
);

const backstopConfig = {
    id: 'storybook-visual-tests',
    viewports,
    scenarios,
    paths: {
        bitmaps_reference: 'backstop_data/bitmaps_reference',
        bitmaps_test: 'backstop_data/bitmaps_test',
        engine_scripts: 'backstop_data/engine_scripts',
        html_report: 'backstop_data/html_report',
        ci_report: 'backstop_data/ci_report'
    },
    engine: 'puppeteer',
    engineOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    report: ['browser'],
    debug: false,
    "onReadyScript": "backstop_data/engine_scripts/onReady.cjs",
};

fs.writeFileSync('backstop.json', JSON.stringify(backstopConfig, null, 2));
console.log('backstop.json generated successfull');
