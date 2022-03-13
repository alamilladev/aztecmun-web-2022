import { db } from '@@/src/app/shared/firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export class Database {
  constructor(collectionName) {
    this.collection = collection(db, collectionName);
  }

  async saveData(object) {
    try {
      return await addDoc(this.collection, object);
    } catch (error) {
      throw new Error(error);
    }
  }
  async queryData(field, operator, value) {
    try {
      const q = query(this.collection, where(field, operator, value));
      const result = await getDocs(q);
      return result.docs;
    } catch (error) {
      throw new Error(error);
    }
  }
}
