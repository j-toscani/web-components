import template from "./template.html";
import css from "./style.css";
import BaseComponent from "../../BaseComponent";

class CustomTable extends BaseComponent {
  constructor() {
    super(template, css);

    const headers = this.getAttribute("header")?.split(",");
  }
}

customElements.define("custom-table", CustomTable);
