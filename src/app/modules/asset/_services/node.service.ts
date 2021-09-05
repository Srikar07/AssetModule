import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NodeService {
    //private node = new BehaviorSubject<any[]>([]);
    private node: BehaviorSubject<Node[]> = new BehaviorSubject<Node[]>([]);
    get node$() {
        return this.node.asObservable().pipe(filter((node: any) => !!node));
    }

    addNode(data: any) {
        this.node.next(data);
    }
}
