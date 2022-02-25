import { BaseRequest } from "./BaseRequest";

export class DeleteFileByIdDrive extends BaseRequest{
    fileId!: string;
    listFileId :Array<string> = [];
}