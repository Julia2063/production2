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
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }
    `;
        document.head.appendChild(style);
    });
};
