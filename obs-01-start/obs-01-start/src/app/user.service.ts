import {Injectable } from "@angular/core";
import {Subject} from 'rxjs'

// we can add in provider in the app module using provideIn:root
@Injectable({providedIn: 'root'})
export class UserService{
  activatedEmitter = new Subject<boolean>();  
 }