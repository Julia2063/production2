// eslint-disable-next-line no-undef
module.exports = async (page, scenario) => {
    console.log('✅ Running refined onReady.js with button alignment fix');

    await page.evaluate(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });

    await page.evaluate(() => {
        const style = document.createElement('style');
        style.innerHTML = `
        *, *::before, *::after {
          line-height: 1.25 !important;
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

        /* Key elements that often suffer vertical misalignment */
        button, a, .txt14x21, .txt16x24, .title, .link {
          line-height: 1.25 !important;
          vertical-align: middle !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `;
        document.head.appendChild(style);
    });
};
