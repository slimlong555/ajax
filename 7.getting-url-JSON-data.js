// https://jsonplaceholder.typicode.com/
// 从网址获取

const getDataBtn = document.querySelector("button");

getDataBtn.addEventListener("click", getData);

function getData() {
  const data = new XMLHttpRequest(); // 实例化

  data.addEventListener("readystatechange", function () {
    if (this.status === 200 && this.readyState === 4) {
      // console.log(this.responseText);

      let users = JSON.parse(this.responseText);
      // 转换为有效的js值
      console.log(users);
    }
  });

  data.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  data.send();
}
