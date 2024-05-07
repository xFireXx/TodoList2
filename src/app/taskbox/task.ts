export interface Task {
    id: string;
    name: string;
    category: string;
    startDate?: string;  // Optional start date
    endDate?: string;    // Optional end date
    isEditing: boolean;
    status: string;
  }
  