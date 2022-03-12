import { Database } from '@@/src/app/shared/firebase/db';

export class User {
  constructor() {
    this.db = new Database();
    this.entityVerboseName = 'Users';
  }
  async signup(signupData) {
    try {
      return await this.db.saveData(this.entityVerboseName, signupData);
    } catch (error) {
      throw new Error(error);
    }
  }
}
