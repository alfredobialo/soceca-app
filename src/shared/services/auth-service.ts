import {Service, signal} from '@angular/core';

@Service()
export class AuthService {
  getCurrentUser(){
    return signal<{username: string, name: string}>({username: 'alfredobialo', name: 'Alfred Obialo'});
  }
}
