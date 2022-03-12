import { db } from '@@/src/app/shared/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export class Database {
  async saveData(collectionName, object) {
    try {
      return await addDoc(collection(db, collectionName), object);
    } catch (error) {
      throw new Error(error);
    }
  }
}
