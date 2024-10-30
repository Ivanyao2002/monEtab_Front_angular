import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from '../../services/localStorage/local-storage.service';
import {UserService} from '../../services/user/user.service';

export class authGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }
  canActivate() {
    if(this.userService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

};
