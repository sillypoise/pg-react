import * as React from "react";

export function WithoutReducer() {
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangetask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
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
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChange({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
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
