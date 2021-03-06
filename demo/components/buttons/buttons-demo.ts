/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES
} from 'angular2/angular2';

import {ButtonCheckbox, ButtonRadio} from '../../../ng2-bootstrap';

// webpack html imports
let template = require('./buttons-demo.html');

@Component({
  selector: 'buttons-demo'
})
@View({
  template: template,
  directives: [
    ButtonCheckbox, ButtonRadio,
    CORE_DIRECTIVES, FORM_DIRECTIVES
  ]
})
export class ButtonsDemo {
  private singleModel:string = '1';
  private radioModel:string = 'Middle';
  public checkModel:any = {left: false, middle: true, right: false};
}
