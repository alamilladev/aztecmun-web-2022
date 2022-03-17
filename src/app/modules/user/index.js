import { Database } from '@@/src/app/shared/firebase/db';

export default class User {
  constructor() {
    this.entityVerboseName = 'Users';
    this.db = new Database(this.entityVerboseName);
  }

  async signup(signupData) {
    try {
      return await this.db.saveData(signupData);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getStatus(email) {
    try {
      const result = await this.db.queryData('email', '==', email);
      if (result.length > 0) {
        return 'ALREADY_EXIST';
      } else {
        return 'NOT_EXIST';
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  listenLatestRegisteredUsers(callback) {
    this.db.listenLatestData(callback);
  }
}
