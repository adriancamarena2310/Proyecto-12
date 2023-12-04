import { Component, inject } from '@angular/core';
import { UsersService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public usersService= inject ( UsersService )
}
