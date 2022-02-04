import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService.service";

@Injectable()
export class UsersService{


    constructor(private CounterService: CounterService){}

    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.CounterService.actionLog++
    console.log(this.CounterService.actionLog)
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.CounterService.actionLog++
    console.log(this.CounterService.actionLog)
  }
}