import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Team } from '../model/team';
import { User } from '../model/user';
 
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 serverUrl:string="https://spardhaa.herokuapp.com"
 
  constructor(private _http:HttpClient) { }
 
  public register(user:User):Observable<User> {
    let url=this.serverUrl + "/signup"
   return this._http.post<any>(url, user);
  }
 
  public login(user:User):Observable<any>{
    let url=this.serverUrl + "/signin"
    return this._http.post<any>(url,user);
  }
  public signinWithGoogle(email:String):Observable<any>{
    let url=this.serverUrl + "/signin-with-google"
    return this._http.post<any>(url,{email:email})
  }
 
  public playerList():Observable<any>{
    let url=this.serverUrl + "/view-players"
    return this._http.get<any>(url);
  }
  public updateProfile(user:User):Observable<any>{
    let url=this.serverUrl + "/update-profile"
    return this._http.post<any>(url,user);
  }
  public viewProfile(playerId:string):Observable<any>{
    let url=this.serverUrl + "/view-profile/"+playerId;
    return this._http.get<any>(url);
  }
  public requestPlayer(user:User):Observable<any>{
    let url=this.serverUrl + "/request-player/"+user.playerId+"/"+user.teamId+"/"+user.tournamentId;
    return this._http.get<any>(url);
  }
  public acceptRequest(user:User):Observable<any>{
    let url=this.serverUrl + "/accept-request/"+user.playerId+"/"+user.resquestId+"/"+user.teamId+"/"+user.tournamentId;
    return this._http.get<any>(url);
  }
  public rejectRequest(user:User):Observable<any>{
    let url=this.serverUrl + "/reject-request/"+user.playerId+"/"+user.resquestId;
    return this._http.get<any>(url);
  }
  public createTeam(name:string,owmerId:string):Observable<any>{
    let url=this.serverUrl + "/team/create-team";
    return this._http.post<any>(url,{name:name,ownerId:owmerId});
  }
  public viewTeamByTeamId(team:Team):Observable<any>{
    let url=this.serverUrl + "/team/view-team/"+team.teamId;
    return this._http.get<any>(url);
  }
  public viewTeamByOwnerId(ownerId:any):Observable<any>{
    let url=this.serverUrl + "/team/view-team-by-ownerId/"+ownerId;
    alert('called...............')
    return this._http.get<any>(url);
  }
  public viewTeamList():Observable<any>{
    let url=this.serverUrl + "/team/view-team-list";
    return this._http.get<any>(url);
  }
  public viewTournaments():Observable<any>{
    let url=this.serverUrl + "/tournament/view-tournament";
    return this._http.get<any>(url);
  }
  public viewTournamentById(tournamentId:String):Observable<any>{
    let url=this.serverUrl + "/tournament/view-tournament/"+tournamentId;
    return this._http.get<any>(url);
  }
  public applyForTournament(teamId:string,tournamentId:string):Observable<any>{
    let url=this.serverUrl + "/tournament/apply-for-tournament"
    return this._http.post<any>(url,{tournamentId:tournamentId,teamId:teamId});
  }
  public createOrder(amount:any):Observable<any>
  {
    let url=this.serverUrl +"/payment/get-payment"
      return this._http.post<any>(url, {amount:amount});
  }
}
 
 
 
 
 
 
 

