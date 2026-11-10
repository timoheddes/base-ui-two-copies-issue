# Base UI: document-level marks break with two copies on one page

`host.js` and `embed.js` are bundled separately, so each has its own copy of React and
Base UI, like an app plus an injected widget. Both render a `modal` Popover.

```sh
npm install
npm start   # builds the three bundles and serves http://localhost:4173
```

- `index.html`: two copies. Click **Run scenario**. After the host popover closes, `#other`
  loses `aria-hidden` and `data-base-ui-inert` although the embed's modal popover is still open.
- `single.html`: control with one shared copy (`single.js`). `#other` stays hidden until both close.

The scenario opens and closes the popovers programmatically, because any click into the other
app is an outside press.
