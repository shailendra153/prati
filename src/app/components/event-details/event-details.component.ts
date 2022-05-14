import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any;

  constructor(private _activeRouter:ActivatedRoute,private _userAuth:UserAuthService, private _router:Router) {
     this._userAuth.viewTournamentById(this._activeRouter.snapshot.params['eventId']).subscribe(data=>{
       console.log(data);
           this.event=data;
     })
    
  }
  public register(eventId:string){
    this._router.navigate(['registration-form/'+eventId+"/"+localStorage.getItem('UserLoginId')]);
  }
  ngOnInit(): void {
  }

}
