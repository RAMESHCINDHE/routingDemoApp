import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingAppDemo';


    AddButtonCSSStyles() {
      let CssStyles = {        
          'color':'Blue',
          'font-weight': 'bold',
          'font-size.px': 40
          
      };
      return CssStyles;
    }


  }