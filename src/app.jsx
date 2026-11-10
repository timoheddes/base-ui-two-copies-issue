import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Popover } from '@base-ui/react/popover';


function App({ name }) {
  const [open, setOpen] = React.useState(false);
  const modal = true;
  React.useEffect(() => {
    window[name] = { open: () => setOpen(true), close: () => setOpen(false) };
  }, [name]);
  return (
    <section className="app">
      <h2>{name} copy of Base UI</h2>
      <Popover.Root
        open={open}
        modal={modal}
        onOpenChange={(next, details) => {
          console.log(`[${name}] onOpenChange(${next}, ${details.reason})`);
          setOpen(next);
        }}
      >
        <Popover.Trigger>{name} popover</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner sideOffset={8}>
            <Popover.Popup className="popup" data-testid={`${name}-popup`}>
              {name} popup
              <Popover.Close>Close</Popover.Close>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
      <p className="content">Plain {name} content (click me)</p>
    </section>
  );
}

export function mount(name) {
  createRoot(document.getElementById(name)).render(<App name={name} />);
}
