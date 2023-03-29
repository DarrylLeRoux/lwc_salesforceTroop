import { LightningElement } from "lwc";

export default class HelloWorld extends LightningElement {
  fullName = "Darryl Le Roux";
  title = "Developer";

  // change title handler
  handleTitleChange(event) {
    this.title = event.target.value;
  }
}
