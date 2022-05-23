import { Database } from '@@/src/app/shared/firebase/db';

export default class Volunteer {
  constructor() {
    this.entityVerboseName = 'Volunteers';
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

  async getVolunteersRolesNumberOfRecords(volunteersRolesArray) {
    try {
      const numberOfRecordsArray = [];

      for (let i = 0; i < volunteersRolesArray.length; i++) {
        const record = await this.db.queryData(
          'role',
          '==',
          volunteersRolesArray[i]
        );
        numberOfRecordsArray.push(record.length);
      }

      return numberOfRecordsArray;
    } catch (error) {
      throw new Error(error);
    }
  }

  listenLatestRegisteredVolunteers(callback) {
    this.db.listenLatestData(callback);
  }
}
