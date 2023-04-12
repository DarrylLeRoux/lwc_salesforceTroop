import { LightningElement } from "lwc";

export default class QuerySelector extends LightningElement {
  userNames = ["John", "Jane", "Joe", "Jill"];

  fetchDetailHandler() {
    const elem = this.template.querySelector("h1");
    elem.style.border = "1px solid red";
    console.log(elem.innerText);

    const userElements = this.template.querySelectorAll(".name");
    // create a new array from the node list
    Array.from(userElements).forEach((item) => {
      // print the text of each element
      console.log(item.innerText);
      // set the title attribute of each element
      item.setAttribute("title", item.innerText);
    });

    // lwc:dom="manual" is required for this to work
    const childElem = this.template.querySelector(".child");
    // set the innerHTML of the child element
    // eslint-disable-next-line @lwc/lwc/no-inner-html
    childElem.innerHTML = `<p>Child Element</p>`;
  }
}
