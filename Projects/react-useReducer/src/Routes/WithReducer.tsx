import * as React from "react";

export function WithReducer() {
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);

  function handleAddTask(text: string) {
    return;
  }

  function handleChangetask(task: Task) {
    return;
  }

  function handleDeleteTask(taskId: number) {
    return;
  }

  return (
    <>
      <h3>Prague Itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangetask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [text, setText] = React.useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={() => undefined}
      />
      <button onClick={() => undefined}>Add</button>
    </>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input type="text" value={task.text} onChange={(e) => undefined} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(false)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input type="checkbox" checked={task.done} onChange={(e) => undefined} />
      {taskContent}
      <button onClick={() => undefined}>Delete</button>
    </label>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type TaskProps = {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
};

type AddTaskProps = {
  onAddTask: (text: string) => void;
};

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
};
