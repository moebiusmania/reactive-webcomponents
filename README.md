# reactive-webcomponents
POC demonstrating how to build standard **Web Components** using some reactive programming concepts.

### Objective
The idea is to build custom elements (with or without Shadow DOM) using [HyperHTML](https://github.com/WebReflection/hyperhtml) as template rendering engine and [RxJS](http://reactivex.io/rxjs/) to handle the few behaviors inside of them.

The result should be a mix of performance and best practice, since:

* scoped styles are handled by Shadow DOM (Web standard)
* element registration is done using Custom Elements APIs (Web standard)
* data bind and templating provided by HyperHTML is obtained via template literals (another Web standard)
<!-- * Code is easier to test and reuse, Components offers an encapsulation of minimal functionality and inside of them RxJS   -->

### How to use
As usual, on terminal:

```
$ npm install 
--- then ---
$ npm start
```

then open browser at ```http://localhost:8081/```.

That's all.

### License
Released under [MIT license](LICENSE).
