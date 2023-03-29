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
  // if this method = true, then the if:true{} will render
  // It takes in the handleOnChange as the input, and then evaluates it to the helloMethod to check
  get helloMethod() {
    return this.name == "hello";
  }

  // falsy values will render false with if:true{}
  // 0, false, undefined, null, ''
}
