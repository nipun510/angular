import { Component, OnInit } from '@angular/core';

import {User} from '../shared/user'


import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users : User[];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    return this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

}
