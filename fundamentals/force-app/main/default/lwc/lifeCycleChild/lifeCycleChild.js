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
  }

  // fires when a components rendering is done
  // do not use to change state or update property of a component
  // don't update a wire adapter configuration property
  renderedCallback() {
    console.log("Child Rendered Callback Called");
  }
}
