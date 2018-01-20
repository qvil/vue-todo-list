# [Vue Todo List](https://github.com/qvil/vue-todo-list)
Demo : https://qvil.github.io/vue-todo-list/

## Q & A
- 왜 script load를 body 태그의 끝에 하면 동작하고 head태그나 body태그의 위에 선언하면 vue가 동작하지 않는가?
  - >스크립트가 실행되는 시점에 태그가 브라우저에 로드되지않아서그래용 body영역이 읽혀야 DOM 객체가 만들어지는데 그전에 스크립트가 로드되서 그렇죠 - 카톡 오픈채팅 vuue님 -
- Not showing dev tools vue panel
  >1. If you using CDN **not using min.js**
  >1. then Add this code `Vue.config.devtools = true;`