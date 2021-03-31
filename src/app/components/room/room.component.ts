import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  name:string = 'Econom'
  roomType:string = 'econom';
  roomInfo!: RoomInfo;
  options:string[] = [];
  test:any;
  isEdit:boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.name = "Ecomon nomer"
    this.roomType = 'econom'
    this.roomInfo = {
      countofBeds: 2,
      sleeps: 2,
      price:'$2',
    };
    this.options = ["NO smoking", "Parking", "roomService"]
    this.test = true;
    }

    roomSelect(roomName:string){
      if (roomName == 'econom') {
        this.name = "Ecomon nomer"
        this.roomType = 'econom'
        this.roomInfo = {
          countofBeds: 2,
          sleeps: 2,
          price:'$2',
        };
        this.options = ["NO smoking", "Parking", "roomService"]
        this.test = true;
      } else if (roomName == 'standart') {
        this.name = "Kruche nomer"
        this.roomType = 'standart'
        this.roomInfo = {
          countofBeds: 2,
          sleeps: 4,
          price:'$5',
        };
        this.options = ["NO smoking", "Parking", "roomService", "Breakfest", "Swimming Pool"]
        this.test = true;

      } else if (roomName == 'lux') {
        this.name = "Lux nomer"
        this.roomType = 'Lux'
        this.roomInfo = {
          countofBeds: 3,
          sleeps: 6,
          price:'$10',
        };
        this.options = ["NO smoking", "Parking", "roomService", "Breakfest", "Swimming Pool", "jacuzzi"]
        this.test = true;
      }

    }

    addOpt(option:string){
      this.options.unshift(option);
      return false;
    }

    deleteOpt(option:string) {
    for(let i = 0; i < this.options.length; i++) {
      if(this.options[i] == option)
      this.options.splice(i,1);
      break;
    } 
    }

    showEdit(){
      this.isEdit = !this.isEdit;
    }

   
    }
   

interface RoomInfo {
  countofBeds:number,
  sleeps:number,
  price:string,
}
