const getDataBtn = document.querySelector("button");
const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");

getDataBtn.addEventListener("click", getData);

function getData() {
  let getToDos = (callback) => {
    const data = new XMLHttpRequest();

    data.addEventListener("readystatechange", function () {
      if (this.status === 200 && this.readyState === 4) {
        const dataRetrieved = JSON.parse(data.responseText); // 转换为有效的js值
        callback(undefined, dataRetrieved); // 没有错误并取回数据
      } else if (this.readyState === 4) {
        callback("Error Fetching Data", undefined);
      }
    });

    data.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    // data.open("GET", "https://jsonplaceholder.typicode.com/qwertytodos/", true);

    data.send();
  };

  cat.classList.add("show");

  getToDos((error, toDoData) => {
    if (error) {
      console.log(error);
    } else {
      console.log(toDoData);
    }
  });
  // 放入回调函数的两个参数

  dog.classList.add("show");
}
