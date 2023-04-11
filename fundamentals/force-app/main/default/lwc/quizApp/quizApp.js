import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  // store the answers
  selected = {};
  myQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template loop?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question:
        "Which of the following is an invalid file in a LWC component folder?",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".js"
      },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "Which of the following is not a directive?",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  get notAllSelected() {
    // if there are not enough keys in the selected object then it is disabled
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }

  changeHandler(event) {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }

  submitHandler(event) {}

  resethandler(event) {}
}
