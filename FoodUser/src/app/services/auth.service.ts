import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BaseUrls} from '../base-urls';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private rotuer: Router
  ) { }


loginUser( value: { email: string; password: string}) {
  const formData = new FormData();
  formData.append("email", value.email.trim() || "");
  formData.append("password", value.password.trim() || "");

  this.http.post(BaseUrls.getLoginurl(BaseUrls.USER_GROUPURL), formData) 
  .subscribe({
    next: ({ code, message, data}:any) => {
    localStorage.setItem("user", JSON.stringify(data[0]));
    this.toast.success(message, "Login Successful");
    this.rotuer.navigate(['/'], { replaceUrl: true})
    }, 
    error: (error) => {  
      localStorage.setItem("user", JSON.stringify(null));
      this.toast.warning("Please Check Your Credentials", "");
    }
  })
}


registerUser( values: any) {
  const formData: FormData = new FormData();
}

}


