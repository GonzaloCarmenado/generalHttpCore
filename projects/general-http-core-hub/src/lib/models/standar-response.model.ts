export interface StandarResponse<T> {
    status: number;
    message: string;
    data: T;
  }