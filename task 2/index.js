let arr = ["html", "css", "js"];
// const ul = document.createElement("ul");
// document.body.append(ul);

// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement("li");
//   ul.append(li);
//   li.append(arr[i]);
// }

const render = (arr) => {
    for ( let i = 0; i < arr.length; i++){
  let li = document.createElement("li");
  ul.append(li);
  li.append(arr[i]);
  document.body.prepend(li);
    }

};

const arr1 = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const render1 = (arr1) => {
    const ul1 = document.createElement('ul')
    for (let i = 0; i < arr1.length; i++){
        const li = document.createElement('li')
        const a = document.createElement('a')
        ul1.append(li)
        a.textContent = arr1[i].name
        li.append(a)
        a.href = arr1[i].url
        document.body.prepend(ul1)

    }
};
