// eslint-disable-next-line no-undef
module.exports = async (page, scenario) => {
    console.log('✅ Running adjusted onReady.js for vertical alignment fix');

    await page.evaluate(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });
    
    await page.evaluate(async () => {
        await document.fonts.ready;
    });

    await page.evaluate(() => {
        const style = document.createElement('style');
        style.innerHTML = `
        *, *::before, *::after {
          text-rendering: geometricPrecision !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          animation: none !important;
          transition: none !important;
        }

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1 !important;
        }

        #storybook-root {
          margin: 0 !important;
          padding: 0 !important;
        }

        a, span, p, h1, h2, h3, h4, h5, h6, button {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1 !important;
        }
      `;
        document.head.appendChild(style);
    });
};
