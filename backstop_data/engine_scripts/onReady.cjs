// eslint-disable-next-line no-undef
module.exports = async (page, scenario) => {
    console.log('Running onReady.js');

    await page.evaluate(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });

    await page.evaluate(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      *, *::before, *::after {
        line-height: 1 !important;
        text-rendering: geometricPrecision !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }

      html, body {
        margin: 0 !important;
        padding: 0 !important;
      }

      #storybook-root {
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
        document.head.appendChild(style);
    });
};
