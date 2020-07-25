import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-employee-documents',
  templateUrl: './employee-documents.component.html',
  styleUrls: ['./employee-documents.component.scss']
})
export class EmployeeDocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;
  files  = [];  

  // private upload() {  
  //   this.fileInput.nativeElement.value = '';  
  //   this.files.forEach(file => {  
  //     this.callUploadService(file);  
  //   });     
//}

onClick(){  
  const fileInput = this.fileInput.nativeElement;
  fileInput .onchange = () => {  
      for (let index = 0; index < fileInput .files.length; index++)  
      {  
           const file = fileInput .files[index];  
           this.files.push({ data: file, inProgress: false, progress: 0});  
      }  
        // this.upload();  
  };  
  fileInput.click();  
}

}
