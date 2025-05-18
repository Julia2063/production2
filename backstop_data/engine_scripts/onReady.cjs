 
// eslint-disable-next-line no-undef
module.exports = async (page, scenario) => {
    console.log('Running onReady.js');

    // Сброс скролла
    await page.evaluate(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });

    // Фиксация стилей, шрифта и сглаживания
    await page.evaluate(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
        font-family: Arial, sans-serif !important;
        font-kerning: none !important;
        letter-spacing: 0 !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }

      html, body {
        zoom: 1 !important;
        text-rendering: optimizeLegibility !important;
      }

      #storybook-root {
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
        document.head.appendChild(style);
    });
};

