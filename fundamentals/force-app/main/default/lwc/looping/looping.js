import { LightningElement } from "lwc";

export default class Looping extends LightningElement {
  carList = ["Ford", "Audi", "BMW", "Mercedes", "Hyundai"];

  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "Sundar Pichai"
    },
    {
      id: 2,
      company: "Apple Inc.",
      name: "Tim Cook"
    },
    {
      id: 3,
      company: "Meta",
      name: "Mark Zuckerberg"
    },
    {
      id: 3,
      company: "Amazon",
      name: "Jeff Bezos"
    }
  ];
}
