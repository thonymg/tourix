import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createCustomElement } from '@angular/elements';

import { MaterialButton, MaterialButtonModule } from './app/material-button';
import { MaterialCard, MaterialCardModule } from './app/material-card';
import { MaterialInput, MaterialInputModule } from './app/material-input';

import { environment } from './environments/environment';

@NgModule({
  imports: [MaterialButtonModule, MaterialCardModule, MaterialInputModule],
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(CustomElementsModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    customElements.define('material-button', createCustomElement(MaterialButton, { injector: ref.injector }));
    customElements.define('material-card', createCustomElement(MaterialCard, { injector: ref.injector }));
    customElements.define('material-input', createCustomElement(MaterialInput, { injector: ref.injector }));

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
