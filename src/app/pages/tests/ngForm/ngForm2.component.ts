import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <h1>ngForm: Utiliser ViewChild</h1>
      <hr />
      <form #loginForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="username">Username</label>
          <input
            class="form-control "
            type="text"
            name="username"
            #username="ngModel"
            ngModel
            required
          />
          <div *ngIf="username.invalid && username.touched" class="error">
            Username is required.
          </div>
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            class="form-control "
            type="password"
            name="password"
            ngModel
            required
            #password="ngModel"
            [class.is-invalid]="password.invalid && password.touched"
          />
          <div *ngIf="password.invalid && password.touched" class="error">
            Password is required.
          </div>
        </div>
        <button
          class="btn btn-success mb-3"
          type="submit"
          [disabled]="!loginForm.valid"
        >
          Login
        </button>
        <p *ngIf="isvisible">
          <strong>username:</strong> {{ loginForm.value.username }}
          <strong>password:</strong>
          {{ loginForm.value.password }}
          {{this.loginForm.reset()}} 
        </p>
      </form>
    </div>
  `,
})
export class ViewchildNgFormComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  isvisible: boolean = false;
  onSubmit() {
    console.log(this.loginForm.value);
    this.isvisible = true;
      }
      
}