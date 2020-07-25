import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html', 
  styleUrls: ['./employee-home-page.component.scss']
})
export class EmployeeHomePageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  
  public logout()
  {
    window.confirm("Want to Log-Out ?");
    this.route.navigate(['/home']);
  }
}
