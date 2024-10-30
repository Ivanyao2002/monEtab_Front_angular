import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private accessToken: string = 'token'
  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.accessToken) || null;
  }

    removeToken():void {
    localStorage.removeItem(this.accessToken);
    localStorage.clear();
  }

    saveToken(token: string):void {
    localStorage.setItem(this.accessToken, token);
  }
}
