import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html', // تأكد أن الملف بنفس الاسم
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class UserComponent {
  users = [
    { name: 'tasneem', email: 'tasneemosama288@gmail.com', id: '1' }
  ];

  newUser = { name: '', email: '', id: '' };

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.id) {
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', email: '', id: '' };
    }
  }

  editUser(user: any) {
    this.newUser = { ...user };
    this.deleteUser(user.id);
  }

  deleteUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
