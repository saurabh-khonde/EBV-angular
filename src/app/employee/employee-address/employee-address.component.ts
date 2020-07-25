import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-address',
  templateUrl: './employee-address.component.html',
  styleUrls: ['./employee-address.component.scss']
})
export class EmployeeAddressComponent implements OnInit {

  constructor(private route:Router) { }
  
  show:boolean 
  ngOnInit(): void {
    this.show = true;
  }

  regiForm = new FormGroup({  
    'Type' : new FormControl('Current'),  
    'Line1' : new FormControl(null, Validators.required),  
    'Line2' : new FormControl(null, Validators.required), 
    'Area' : new FormControl(null,Validators.required),
    'City':new FormControl(null, Validators.required),
    'pincode':new FormControl(null, Validators.required),
    'State':new FormControl(null, Validators.required),
    'Country':new FormControl(null, Validators.required),
    'IsCPsame':new FormControl('true',Validators.required)
} ) 
 

staus:string; 
disableRadio:boolean
addressArray = []
count:number=0
onFormSubmit(form:NgForm) 
{
  this.count=this.count+1
  this.show=!this.show;
  this.staus =  this.regiForm.get('IsCPsame').value; 
  console.log("Status ---->"+this.staus);

  this.addressArray.push(form);

  console.log("Count ---->"+this.count);
  if(this.count==2)
  {
    console.log(this.addressArray);    // If Both Current & Permanant fill differently. END HERE.
    this.route.navigate(['/empHomePage/empEducation']); 
  }
  else if(this.staus=='true' && this.count<2)
  {
    this.regiForm.patchValue({
      Type : 'Permanant'
    });

    this.addressArray.push(this.regiForm.value)
    console.log(this.addressArray)  // If Current & Permanant Same -- End Here.
    this.route.navigate(['/empHomePage/empEducation']); 
  }
  else if(this.staus=='false')
  {
    console.log(this.addressArray); 
    this.regiForm.reset();
    this.disableRadio=true;
  
    this.regiForm.patchValue({
      Type : 'Permanant', 
      IsCPsame : 'true'
    });
  }

}
}
