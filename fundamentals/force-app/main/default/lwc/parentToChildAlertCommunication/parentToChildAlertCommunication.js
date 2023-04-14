import { LightningElement, api } from "lwc";

export default class ParentToChildAlertCommunication extends LightningElement {
  @api message;
  @api cardHeading;
}
