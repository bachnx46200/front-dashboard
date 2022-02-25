import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleDriverService } from 'src/app/service/google-driver.service';
import { BaseRequest } from 'src/app/model/request/BaseRequest';
import { v4 as uuidv4 } from 'uuid';
import { GetListFolder } from 'src/app/model/GetListFolder';
import { BaseService } from 'src/app/service/baseService';
import { CommonService } from 'src/app/service/common.service';
import { GetListFileDrive } from 'src/app/model/GetListFileDrive';
import { DeleteFileByIdDrive } from 'src/app/model/request/DeleteFileByIdDrive';
@Component({
  selector: 'app-google-driver',
  templateUrl: './google-driver.component.html',
  styleUrls: ['./google-driver.component.css']
})
export class GoogleDriverComponent implements OnInit {
  baseRequest = new BaseRequest();
  response!: any;
  listFolder: GetListFolder[] = [];
  dataSize = new Set<number>();
  listOfData: GetListFileDrive[] = [];
  isVisible = false;

  constructor(private http: HttpClient,
    private driver: GoogleDriverService,
    private messageNotification: CommonService) { }

  ngOnInit(): void {
    this.baseRequest.requestId = uuidv4();
    this.driver.getAllDrive(this.baseRequest).subscribe(
      data => {
        this.response = data
        if (this.response.status.code == BaseService.SUCCESS) {
          this.listFolder = this.response.listFolder;
          this.listOfData = this.response.listFiles;
          this.dataSize = this.response.size;
          // this.isSpinning = false;
        } else if (this.response.status.code == BaseService.FAIL) {
          // this.isSpinning = false;
          this.listFolder = [];
          this.messageNotification.createNotification(this.response.status.code, this.response.status.message);
        }
      },
      err => {
        this.messageNotification.createNotification(this.response.status.code, this.response.status.message);
      }
    );
  }
  //xoa file
  sendRequest(id : string): void {
    const deleteByIdRequest = new DeleteFileByIdDrive;
    deleteByIdRequest.requestId = uuidv4();
    deleteByIdRequest.fileId=id;
    this.driver.deleteFilebyId(deleteByIdRequest).subscribe(
      data => {
        this.response = data
        if (this.response.status.code == BaseService.SUCCESS) {
          this.listOfData = this.response.listFiles;
          this.dataSize = this.response.size;
          
        } else if (this.response.status.code == BaseService.FAIL) {
          
          this.listOfData = [];
          this.messageNotification.createNotification(this.response.status.code, this.response.status.message);
        }
      },
      err => {
        this.listOfData = [];
        this.messageNotification.createNotification(this.response.status.code, this.response.status.message);
      }
    )
    setTimeout(() => {
    
    }, 1000);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
