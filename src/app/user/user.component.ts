import {Component, computed, signal,Input,input,Output,output,EventEmitter} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
import{User} from './user.model';
import {CardComponent} from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 // selectedUser=signal(DUMMY_USERS[randomIndex]);
@Input({required:true}) user!:User;
@Input({required:true}) selected!:boolean;
@Output() select=new EventEmitter();

  // avatar=input.required<string>();
  // name=input.required<string>();
  //select=output<string>();

  // imagePath=computed(()=>'/assets/users/'+this.avatar());

  get imagePath(){
    return  'assets/users/'+this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
    //const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

}
