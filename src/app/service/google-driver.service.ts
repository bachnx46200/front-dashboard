import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from './baseService';
import { v4 as uuidv4 } from 'uuid';
import { BaseRequest } from '../model/request/BaseRequest';
import { DeleteFileByIdDrive } from '../model/request/DeleteFileByIdDrive';
import { GetListFileDrive } from '../model/GetListFileDrive';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriverService {
  baseRequest!: BaseRequest;

  constructor(private httpClient: HttpClient) { }

  public getAllFileDrive(request: BaseRequest): Observable<GetListFileDrive> {
    return this.httpClient.post<GetListFileDrive>(BaseService.API_ENDPOINT + '/getAllFile', request);
  }

  public deleteFilebyId(request: DeleteFileByIdDrive): Observable<any> {
    return this.httpClient.post<any>(BaseService.API_ENDPOINT + '/delete/file', request);
  }

  public deleteFilebyListId(request: DeleteFileByIdDrive): Observable<any> {
    console.log(request)
    return this.httpClient.post<any>(BaseService.API_ENDPOINT + '/delete/listfile', request);
  }

  public upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('fileUpload', file);
    formData.append('filePath', '');
    formData.append('shared', 'true');
    const req = new HttpRequest('POST', `${BaseService.API_ENDPOINT}/upload/file/v2`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }
  public uploadList(files: FileList): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();  
    for (let i = 0; i < files.length; i++) {
      formData.append('fileUpload', files[i]);
    }
    formData.append('filePath', '');
    formData.append('shared', 'true');
    const req = new HttpRequest('POST', `${BaseService.API_ENDPOINT}/upload/file/v2`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }

  public getAllDrive(request: BaseRequest): Observable<any> {
    return this.httpClient.post<any>(BaseService.API_ENDPOINT + '/getAll', request);
  }
}
