import { LitElement, html, TemplateResult, customElement } from 'lit-element';

@customElement('my-app')
class MyApp extends LitElement {
  render(): TemplateResult {
    return html`<h1>Hello World!</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
