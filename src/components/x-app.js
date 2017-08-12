'use strict';

import HyperHTMLElement from 'hyperhtml-element';
import './x-button';
import './x-fakedata';

class XApp extends HyperHTMLElement {

  static get observedAttributes() { return ['number']; }

  created() {
    this.number = Math.random() * 100;
  }

  attributeChangedCallback(name, prev, curr) {
    this.render();
  }

  random(value = 100){
    this.number = Math.random() * value;
  }

  render(){
    return this.html`<section>
      <p>Test with some random number: <strong>${this.number}</strong></p>
      <x-button>Click me!</x-button>
      <fake-data></fake-data>
    </section>`;
  }

}

XApp.define('x-app');