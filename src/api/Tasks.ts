import {
  Firestore,
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';

export interface ITask {
  id: string;
  title: string;
  reward: number;
  site: string;
  type: string;
  description?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export class TaskService {
  private collectionRef;

  constructor(db: Firestore) {
    this.collectionRef = collection(db, 'tasks');
  }

  async addTask(task: Omit<ITask, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const newTask = {
        ...task,
        completed: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(this.collectionRef, newTask);
      return docRef.id;
    } catch (error) {
      console.error('Error adding task:', error);
      throw new Error('Failed to add task');
    }
  }

  async getTasks(): Promise<ITask[]> {
    try {
      const snapshot = await getDocs(this.collectionRef);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ITask));
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Failed to fetch tasks');
    }
  }

  async updateTask(id: string, updatedFields: Partial<ITask>): Promise<void> {
    try {
      const taskDocRef = doc(this.collectionRef, id);
      await updateDoc(taskDocRef, {
        ...updatedFields,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error updating task:', error);
      throw new Error('Failed to update task');
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      const taskDocRef = doc(this.collectionRef, id);
      await deleteDoc(taskDocRef);
    } catch (error) {
      console.error('Error deleting task:', error);
      throw new Error('Failed to delete task');
    }
  }

  async getTasksByStatus(completed: boolean): Promise<ITask[]> {
    try {
      const statusQuery = query(this.collectionRef, where('completed', '==', completed));
      const snapshot = await getDocs(statusQuery);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ITask));
    } catch (error) {
      console.error('Error fetching tasks by status:', error);
      throw new Error('Failed to fetch tasks by status');
    }
  }

  // Define all methods using modular API functions
}