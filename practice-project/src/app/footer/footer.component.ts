import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 

  redirect() {
    window.alert('You will now  be redirected');
  }
  constructor() { }

  ngOnInit() {
    
  }

}
