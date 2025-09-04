import { signal } from '@angular/core';

export class UserProfile {
  // Las propiedades de tu clase, con o sin Signals
  public isValidUserId = signal(false);
  public userName = signal('');

  constructor(userName?: string) {
    if (userName) {
      this.userName.set(userName);
    }
  }
}