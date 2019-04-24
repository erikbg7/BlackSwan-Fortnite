import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {Router} from '@angular/router';
import {User} from '../../../models/user/user';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})




export class ManagerComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  users: User[];
  title = 'Manage users';
  searchText;

  usersContainer: boolean;


  ngOnInit() {
    this.loadUsers();
    this.usersContainer = false;
  }


  loadUsers() {
    this.userService.getUsers()
      .subscribe((res: User[]) => {
        this.users = res;
      });
  }

  usersContainerTrigger() {
    this.usersContainer = !this.usersContainer;
  }
  /**
   *
   * @param id
   */
  confirmDelete(id: string, i: number) {
    if (confirm('La cuenta del usuario se borrará para siempre, estás seguro?')) {
      this.userService.deleteUser(id)
        .subscribe(
          res => {
            console.log(res);
            console.log('Se ha borrado correctamente ', i);
            this.users.splice(i, 1);
            console.log('Se ha borrado correctamente ', this.users);

          },
          err => {
            this.handleError(err);
          });
    }
  }

  /**
   *
   * @param err
   */
  private handleError(err: HttpErrorResponse) {
    if ( err.status === 500 ) {
      alert(err);
    }
  }




}
