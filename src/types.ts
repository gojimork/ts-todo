export interface ITask {
  id: string;
  completed: boolean;
  description: string;
  minutes: string;
  seconds: string;
  timeStamp: number;
}

export type IFilter = "All" | "Completed" | "Active";
