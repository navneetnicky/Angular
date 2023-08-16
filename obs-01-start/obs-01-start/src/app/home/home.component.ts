import { Component, OnDestroy, OnInit, Output } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy
{
  @Output()

  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater 3!'));
        }
        count++;
      }, 1000);
    });

    // customIntervalObservable.pipe( map( ( data: number ) =>
    // {
    //   return 'Round:' + (data+1);
    // }));


    this.firstObsSubscription = customIntervalObservable.pipe( filter( ( data: number ) =>
    {
      return data > 0;
    }), map( ( data: number ) =>
    {
      return 'Round:' + (data+1);
    })).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        //when error() call
        console.log(error);
        alert(error.message);
      },
      () => {
        // when complete() call
        console.log('complete');
      }
    );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
