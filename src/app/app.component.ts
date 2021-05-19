import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Router } from '@angular/router';

@Component({ selector: 'app', templateUrl: 'app.component.html',
styleUrls:['app.component.css'] })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService, private router:Router) {
        this.accountService.user.subscribe(x => this.user = x);
        this.user = this.accountService.userValue;
    }

    logout() {
        this.accountService.logout();
        this.router.navigate(['home']);
    }
}