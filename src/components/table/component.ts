import template from "./template.html";
import css from "./style.css";
import BaseComponent from "../../BaseComponent";

class CustomTable extends BaseComponent {
  constructor() {
    super(template, css);
  }
}

customElements.define("custom-table", CustomTable);
