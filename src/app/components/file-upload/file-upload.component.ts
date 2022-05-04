import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Doc } from 'src/app/doc';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

  export class FileUploadComponent implements OnInit {

    selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
    id?:string;
    fileInfos?: Observable<any>;

    // DocumentName:string ='';
    
    constructor(private uploadService: FileUploadService) { }

    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }
    
    desc:Doc=this.uploadService.dc
    upload(): void {
      this.progress = 0;
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
        if (file) {
          this.currentFile = file;
          
          this.uploadService.upload(this.currentFile).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } 
              if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.uploadService.getFiles();
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress = 0;
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            }
          });
        }
        this.selectedFiles = undefined;
      }
    }

    deletepost(id:string){
      console.log("delete");

      this.uploadService.delval(id).subscribe(data=>{
        document.location.reload();
      })
      // this.fileInfos;
    }

    edit(id:string){
      console.log("edited");
      console.log(id);
      // this.showPrompt(id);
      var DocumentName = prompt("Rename the Document : ");
      console.log(DocumentName);
      // this.uploadService.update(id,this.DocumentName);
    }

  
    
    ngOnInit(): void {
      this.fileInfos = this.uploadService.getFiles();
    }
  
}

  
