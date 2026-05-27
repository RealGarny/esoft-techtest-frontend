import { Task, TaskDto } from '@/src/types/entities/Task';
import apiHandler from '../apiHandler';

class TasksApi {
  private _endpoint = '/tasks';
  public getAll() {
    return apiHandler.get(this._endpoint).then((r) => r.data);
  }
  public create(taskData: TaskDto) {
    return apiHandler.post(this._endpoint, taskData).then((r) => r.data);
  }
  public edit(taskId: Task['id'], taskData: TaskDto) {
    return apiHandler
      .patch(`${this._endpoint}/${taskId}`, taskData)
      .then((r) => r.data);
  }
}

export default TasksApi;
