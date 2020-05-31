## 로컬 npm server를 통해 enz-design install

- verdaccio를 사용하여 local에서 오픈한 npm server에서 npm install하여 사용. install했을시 webpack에서 node_modules excludes하는 부부분에서 enz-design을 includes하도록 변경 필요.

```
 npm install enz-design --registry http://localhost:4873
```