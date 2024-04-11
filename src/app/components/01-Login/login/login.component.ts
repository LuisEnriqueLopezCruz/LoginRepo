import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<boolean>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) { 
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      const email = this.form.controls.email.value;
      const password = this.form.controls.password.value;
      
      this.authService.login(email, password).subscribe(success => {
        if (success) {
          console.log('Inicio de sesión exitoso');
          this.loggedIn.emit(true);
          this.router.navigate(['/tasks']); 
          console.log('Credenciales incorrectas');
        }
      });
    }
  }
}