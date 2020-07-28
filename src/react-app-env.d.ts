
interface Task {
    text: string;
    isComplete: boolean;
}

type ToggleTask = (todone: Task) => void;
type AddTask = (text: string) => void;