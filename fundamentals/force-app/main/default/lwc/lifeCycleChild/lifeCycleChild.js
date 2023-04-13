import { LightningElement } from "lwc";

export default class LifeCycleChild extends LightningElement {
  // fires when a component is added to the DOM
  // don't add attributes to the host element in the constructor
  constructor() {
    super();
    console.log("Child Constructor Called");
  }

  // use to perform any initialization
  // use to fetch data or listen for events
  // don't use to change state or update property of a component - use getters and setters
  connectedCallback() {
    console.log("Child Connected Callback Called");

    // throw an error to test error handling
    throw new Error("Loading of child component failed");
  }

  // fires when a components rendering is done
  // do not use to change state or update property of a component
  // don't update a wire adapter configuration property
  renderedCallback() {
    console.log("Child Rendered Callback Called");
  }

  // fires when a component is removed from the DOM
  disconnectedCallback() {
    // eslint-disable-next-line no-alert
    alert("Child disconnectedCallback called");
  }
}
