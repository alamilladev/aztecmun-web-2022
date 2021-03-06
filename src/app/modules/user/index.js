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

  async getCommitteesNumberOfRecords(committeesArray) {
    try {
      const numberOfRecordsArray = [];

      for (let i = 0; i < committeesArray.length; i++) {
        const record = await this.db.queryData(
          'committee',
          '==',
          committeesArray[i]
        );
        numberOfRecordsArray.push(record.length);
      }

      return numberOfRecordsArray;
    } catch (error) {
      throw new Error(error);
    }
  }

  listenLatestRegisteredUsers(callback) {
    this.db.listenLatestData(callback);
  }
}
