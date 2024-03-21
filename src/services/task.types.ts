/**
 * fileName: tasks.types.ts
 * description: This files has types for task services
 */
export interface Task{
    title: string;
    description:string;
    dueDate: string;
    priority: number;
    isComplete: boolean;
    id: number
};

export interface FireBaseResponse{
    taskName:  {_: Task}
}