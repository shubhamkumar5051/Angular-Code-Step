import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
 @Input() temp : {name : String, age: number, email :any } = {name : " ", age: 0 , email : " "};
}
