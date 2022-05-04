import { Component, OnInit } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Doc } from 'src/app/doc';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public name:string = '';
  public desc:string = '';
  types = ["pdf","excel","word"];
  
  // public dc = {} as Doc
 
  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  getForm(name:string,desc:string){
    console.log(name);
    console.log(desc);
  
    this.uploadService.dc.docName=name;
    this.uploadService.dc.docDesc=desc;
    console.log(this.uploadService.dc)

    // this.uploadService.doc(this.uploadService.dc).subscribe({
    // this.dm.docArr.push(this.dc);
    // console.log(this.dm.docArr);   
  // })
  }

}
