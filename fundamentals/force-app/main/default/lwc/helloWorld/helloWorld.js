import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  fullName = "Darryl Le Roux";
  title = "Developer";

  // change title handler for the profession example
  handleTitleChange(event) {
    this.title = event.target.value;
  }

  // address object for @track example
  // @track allows you to go into nested values
  @track address = {
    city: "Johannesburg",
    postcode: 1929,
    country: "South Africa"
  };

  // change the city handler for @track example
  handleCityChange(event) {
    this.address.city = event.target.value;
    // example for not using @track
    // this.address = {...this.address, "city": event.target.value}
  }

  // getter example
  // allows the method to update dynamically
  users = ["John", "Peter", "Paul"];
  num1 = 10;
  num2 = 20;

  get firstUser() {
    return this.users[0];
  }

  get multiply() {
    return this.num1 * this.num2;
  }
}
