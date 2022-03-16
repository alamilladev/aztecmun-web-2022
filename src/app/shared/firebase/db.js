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

  formatData(doc) {
    const data = doc.data();
    const id = doc.id;
    const { createdAt } = data;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      age: data.age,
      state: data.state,
      school: data.school,
      committee: data.committee,
    };
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
    const unsuscribe = onSnapshot(q, ({ docs }) => {
      const latestData = docs.map(this.formatData);
      callback(latestData);
    });
  }
}
