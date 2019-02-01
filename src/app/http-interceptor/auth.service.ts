
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private router: Router) {

    }

    public getToken(): string {
        return localStorage.getItem('auth-token');
    }

    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting
        // whether or not the token is expired
        // return tokenNotExpired(token);
        return true;
    }

    public logout() {
        localStorage.removeItem('auth-token');
        this.router.navigateByUrl('/login');
    }
}
