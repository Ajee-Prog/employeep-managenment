import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Yusuf';
  serverName = 'NairaBet';
  serverPID = 11;
  serverStatus = 'Offline';
  statusFlag = false;
  servername = '';
  buttonState = true;
  state = true;
  
  resetName(){
    this.serverName = '';
  }
  constructor(){
    setTimeout(() =>{ 
      this.buttonState = false;
    }, 5500 )      
    
  }


  toggleServerStatus(){
    this.statusFlag= !this.statusFlag;
    if(this.statusFlag== true){
      this.serverStatus = 'Online';
    } else{
      this.serverStatus = 'Offline';
    }
    return this.serverStatus;
  }
}
