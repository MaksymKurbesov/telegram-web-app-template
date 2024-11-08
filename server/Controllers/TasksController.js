import TasksService from "../Services/TasksService.js";

class TasksController {
	async getAll(req, res) {
		try {
			const db = req.app.get('db');
			const tasks = await TasksService.getAllTasks(db);
			res.status(200).json(tasks);
		} catch (error) {
			console.error("Error retrieving tasks:", error);
			res.status(500).json({ error: "Failed to retrieve tasks" });
		}
	}
}

export default new TasksController();