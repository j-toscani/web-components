export default class BaseComponent extends HTMLElement {
  constructor(template, css) {
    super();
    const style = document.createElement('style');
    style.innerHTML = css;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.shadowRoot.append(style);
  }
}