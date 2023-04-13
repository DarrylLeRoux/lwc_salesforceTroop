import { LightningElement } from "lwc";
import signinTemplate from "./signinTemplate.html";
import signupTemplate from "./signupTemplate.html";
import renderTemplate from "./renderMethod.html";

export default class RenderMethod extends LightningElement {
  selectedBtn = "";

  render() {
    return this.selectedBtn === "SignIn"
      ? signinTemplate
      : this.selectedBtn === "SignUp"
      ? signupTemplate
      : renderTemplate;
  }

  handleOnClick(event) {
    this.selectedBtn = event.target.label;
    console.log(event.target.value);
  }

  submitHandler(event) {
    console.log(`${event.target.label} successfully submitted`);
  }
}
