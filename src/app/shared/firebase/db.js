import { db } from '@@/src/app/shared/firebase/config';
import {
  collection,
  Timestamp,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

export class Database {
  constructor(collectionName) {
    this.collection = collection(db, collectionName);
  }

  serializeData(doc) {
    const data = doc.data();

    return { ...data };
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

  listenLatestData(callback) {
    const q = query(this.collection, orderBy('createdAt', 'desc'));
    onSnapshot(q, ({ docs }) => {
      const latestData = docs.map(this.serializeData);
      callback(latestData);
    });
  }

  listendataByQuery(paramsObj, callback) {
    const q = query(
      this.collection,
      where(paramsObj.field, paramsObj.operator, paramsObj.value)
    );
    onSnapshot(q, ({ docs }) => {
      const data = docs.map(this.serializeData);
      callback(data);
    });
  }
}
