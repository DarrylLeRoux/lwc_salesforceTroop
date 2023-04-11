import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  // store the answers
  selected = {}; // store answers

  correctAnswers = 0; // set a default

  isSubmitted = false; // use to show the result

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

  // disable the button if not all answers are selected
  get notAllSelected() {
    // if there are not enough keys in the selected object then it is disabled
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }
  // apply styling classes according to score
  get fullScore() {
    return `slds-m-around_medium slds-text-heading_large ${
      this.myQuestions.length === this.correctAnswers
        ? `slds-text-color_success`
        : `slds-text-color_error`
    }`;
  }
  // changeHandler gets called on every click on the options
  changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }
  // submit the form
  submitHandler(event) {
    event.preventDefault();
    let correct = this.myQuestions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
  }
  // reset the form
  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
}
