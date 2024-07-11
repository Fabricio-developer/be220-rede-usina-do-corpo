import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { workout } from 'src/app/interfaces/workout';



@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private _notes = new BehaviorSubject<workout[]>([]);
  items$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor(
  ) {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }
}
