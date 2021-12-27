export default class BaseComponent extends HTMLElement {
  constructor(template: string, css: string) {
    super();
    const style = document.createElement('style');
    style.innerHTML = css;

    this.attachShadow({mode: 'open'});
    
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;
      this.shadowRoot.append(style);
    }
  }
}