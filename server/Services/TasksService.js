import admin from "firebase-admin";

class TasksService {
	constructor(db) {
		// this.collectionRef = db.collection("tasks");
	}

	async getAllTasks(db) {
		try {
			const collectionRef = db.collection("tasks");
			const snapshot = await collectionRef.get();
			return snapshot.docs.map(
				(doc) => ({ id: doc.id, ...doc.data() }),
			);
		} catch (error) {
			console.error("Error fetching tasks:", error);
			throw new Error("Failed to fetch tasks");
		}
	}
}

export default new TasksService();