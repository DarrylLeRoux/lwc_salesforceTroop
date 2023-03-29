import { LightningElement } from "lwc";

export default class ConditionalRendering extends LightningElement {
  isVisible = false;
  name; // used in handleOnChange

  handleOnClick() {
    this.isVisible = true;
  }

  // change handler for the hello input
  handleOnChange(event) {
    this.name = event.target.value;
  }

  // getter for the hello input
  get helloMethod() {
    return this.name == "hello";
  }

  // falsy values will render false with if:true{}
  // 0, false, undefined, null, ''
}
