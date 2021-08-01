import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent {

  submit(infoForm:NgForm){
    console.log(infoForm.value);
  }
}
