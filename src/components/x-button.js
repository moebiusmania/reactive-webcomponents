'use strict';

import HyperHTMLElement from 'hyperhtml-element';
import { Observable} from 'rxjs-es/Observable';
import 'rxjs-es/add/observable/fromEvent';
import 'rxjs-es/add/operator/map';

class XButton extends HyperHTMLElement {

  created(){
    this.attachShadow({mode: 'open'});
    this.render();
  }

  render(){
    return this.html`<button><slot></slot></button>`;
  }


  connectedCallback(){
    Observable.fromEvent(this, 'click')
      .map(evt => {
        console.log(evt);
        return { x: evt.clientX , y: evt.clientY }
      })
      .forEach(data => console.log(JSON.stringify(data)));
  }

}

XButton.define('x-button');