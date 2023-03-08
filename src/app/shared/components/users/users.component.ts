import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  name:string='';
  companyName:string= '';
  designation:string= '';
  userArray:Iuser[]=[];
  constructor(private usersService:UsersService){}
  ngOnInit(): void {
    this.usersData()
  }
  usersData(){
    this.usersService.getAllUsers().subscribe((res:any)=>{
      console.log(res);
      this.userArray = res
    })
  }
}
