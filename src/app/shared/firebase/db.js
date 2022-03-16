import { db } from '@@/src/app/shared/firebase/config';
import {
  collection,
  Timestamp,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

export class Database {
  constructor(collectionName) {
    this.collection = collection(db, collectionName);
  }

  async saveData(object) {
    object.createdAt = Timestamp.fromDate(new Date());

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
  // async listenNewData() {
  //   const q = query(this.collection, orderBy());
  // }
}
