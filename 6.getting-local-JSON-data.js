// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const questionsBtn = document.querySelector("button");
const questionsContainer = document.querySelector(".questions-container");

questionsBtn.addEventListener("click", getQuestions);

function getQuestions() {
  const newXhrObj = new XMLHttpRequest();

  newXhrObj.open("GET", "6.questions.json", true);

  newXhrObj.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      let questions = JSON.parse(this.responseText);
      let questionsResult = "";
      questions.forEach((question) => {
        questionsResult += `
                          <ul>
                          <p>${question.question}</p>
                          <li>${question.choiceA}</li>
                          <li>${question.choiceB}</li>
                          <li>${question.choiceC}</li>
                          <li>${question.choiceD}</li>
                          </ul>
        `;
      });
      // 用+=之后后面的内容会覆盖前面的内容，前面的question是参数，后面的是对象的属性
      questionsContainer.innerHTML = questionsResult;
    }
  };

  newXhrObj.send();
}
