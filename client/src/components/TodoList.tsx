import { FormEvent, useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState<{ id: number; task: string }[]>([])
  const [task, setTask] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), task }])
    setTask('')
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          aria-label="todo_input_field"
          className="border border-solid border-gray-500"
          type="text"
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button aria-label="submit_btn" type="submit">
          Add
        </button>
      </form>

      {todos.map((todo) => (
        <div aria-label="todo_item" key={todo.id}>
          <h2>{todo.task}</h2>
          <button
            aria-label="delete_btn"
            type="button"
            onClick={() => handleDelete(todo.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
