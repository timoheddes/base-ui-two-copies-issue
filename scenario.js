// Opens both modal popovers programmatically (any click would be an outside press),
// closes the first one, and reports the state of an unrelated element (#other).
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (line) => (document.getElementById('log').textContent += line + '\n');
const state = () => {
  const el = document.getElementById('other');
  return `#other aria-hidden=${el.getAttribute('aria-hidden')} data-base-ui-inert=${el.hasAttribute('data-base-ui-inert')}`;
};
document.getElementById('run').addEventListener('click', async () => {
  document.getElementById('log').textContent = '';
  await wait(50);
  window.host.open(); await wait(300);
  window.embed.open(); await wait(300);
  log(`1. host + embed modal popovers open  -> ${state()}`);
  window.host.close(); await wait(500);
  const embedOpen = !!document.querySelector('[data-testid=embed-popup]');
  log(`2. host closed, embed still open=${embedOpen} -> ${state()}`);
  log(`   expected: aria-hidden=true data-base-ui-inert=true (embed's modal popover is still open)`);
  window.embed.close(); await wait(500);
  log(`3. both closed                       -> ${state()}`);
});
