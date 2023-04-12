import { LightningElement } from "lwc";

export default class DynamicStyling extends LightningElement {
  percent = 10;

  handleOnChange(event) {
    this.percent = event.target.value;
  }

  get percentage() {
    return `width: ${this.percent}%;`;
  }
}
