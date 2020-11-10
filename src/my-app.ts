import {
  LitElement,
  html,
  TemplateResult,
  customElement,
  css,
} from 'lit-element';

@customElement('my-app')
class MyApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        place-content: center;
        height: 100%;
        background: lightpink;
      }

      h1 {
        margin: 0;
        font-size: 4rem;
      }
    `;
  }

  render(): TemplateResult {
    return html`<h1>Hello World!</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
