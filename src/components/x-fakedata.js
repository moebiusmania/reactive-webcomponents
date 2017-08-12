'use strict';

import HyperHTMLElement from 'hyperhtml-element';
import { Observable} from 'rxjs-es/Observable';
import 'rxjs-es/add/observable/fromEvent';
import 'rxjs-es/add/operator/map';

class FakeData extends HyperHTMLElement {

  static get observedAttributes() { return ['items']; }

  created(){
    this.attachShadow({mode: 'open'});
    this.endpoint = 'http://jsonplaceholder.typicode.com/users';
    this.items = [];

    this.render();
  }

  attributeChangedCallback(name, prev, curr) {
    console.log(name, prev, curr);
    this.render();
  }

  printItems(items){
    if(items !== ''){
      const json = JSON.parse(items);
      return json.map((e,i) => `<li>${e.name} | ${e.username}</li>` );
    } else {
      return '';
    }
  }

  render(){
    return this.html`<ul>${this.printItems(this.items)}</ul>`;
  }


  connectedCallback(){
    fetch(this.endpoint).then(r => r.json())
      .then(data => {
        this.items = JSON.stringify(data);
        console.log(this.items);
      });
  }

}

FakeData.define('fake-data');