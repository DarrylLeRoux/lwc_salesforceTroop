import { LightningElement, api } from "lwc";

export default class ParentToChildProgress extends LightningElement {
  @api progressValue;
}
