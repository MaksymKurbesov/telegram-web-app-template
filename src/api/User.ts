import {
  setDoc,
  doc,
  Firestore,
  getDoc,
  increment,
  updateDoc,
  collection,
} from "firebase/firestore";

export class UserService {
  private docRef;
  public collectionRef;

  constructor(db: Firestore, userID: string) {
    this.docRef = doc(db, "users", userID);
    this.collectionRef = collection(db, "users");
  }

  async getUser() {
    const userDoc = await getDoc(this.docRef);

    if (!userDoc.exists()) return null;

    return userDoc.data();
  }

  async addUser(userData) {
    await setDoc(this.docRef, userData);
  }

  async addPoints(points: number) {
    await updateDoc(this.docRef, {
      points: increment(points),
    });
  }
}
