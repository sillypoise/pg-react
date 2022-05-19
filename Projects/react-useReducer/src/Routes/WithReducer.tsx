import * as React from "react";

export function WithReducer() {
  // const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "task/add",
      id: nextId++,
      text: text,
    });
  }

  function handleChangetask(task: Task) {
    dispatch({
      type: "task/change",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "task/delete",
      id: taskId,
    });
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
          type="text"
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
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
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

type TaskAddAction = {
  type: "task/add";
  id: number;
  text: string;
};

type TaskChangeAction = {
  type: "task/change";
  task: Task;
};

type TaskDeleteAction = {
  type: "task/delete";
  id: number;
};

type TaskAction = TaskAddAction | TaskChangeAction | TaskDeleteAction;

function tasksReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "task/add": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "task/change": {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "task/delete": {
      return state.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown task action");
    }
  }
}
