/* eslint-disable */
module.exports = async (page, scenario) => {
  console.log('Running onReady.js');

  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
      }
    `;
    document.head.appendChild(style);
  });
};
