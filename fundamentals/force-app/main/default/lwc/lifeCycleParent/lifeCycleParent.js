import { LightningElement } from "lwc";

export default class LifeCycleParent extends LightningElement {
  constructor() {
    super();
    console.log("Parent Constructor Called");
  }
}
