import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
export interface FileModel {
    File: File;
    name: string;
    // Add any other properties you need
  }

@Injectable({ providedIn: 'root' })
export class MessageService {
    public messageSubject = new Subject<any>();
    public message$ = this.messageSubject.asObservable()

    private selectedFileSubject: BehaviorSubject<FileModel[] | null> = new BehaviorSubject<FileModel[] | null>([]);

    setSelectedFile(file: FileModel[]) {
        this.selectedFileSubject.next(file);
    }

    getSelectedFile(): Observable<FileModel[] | null> {
        return this.selectedFileSubject.asObservable();
    }
}