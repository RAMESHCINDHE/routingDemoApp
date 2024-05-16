import { Component } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent {
  public dropDownValue='';

  setDropDownValue(drpvalue:any)
  {
    this.dropDownValue=drpvalue.target.value;
  }

}
