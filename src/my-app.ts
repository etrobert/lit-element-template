import {
  LitElement,
  html,
  TemplateResult,
  customElement,
  unsafeCSS,
} from 'lit-element';

import style from './my-app.css';

@customElement('my-app')
class MyApp extends LitElement {
  static get styles() {
    return unsafeCSS(style.toString());
  }
  render(): TemplateResult {
    return html`<h1 class="blue">Hello World!</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
