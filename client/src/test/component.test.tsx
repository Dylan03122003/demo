import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import TodoList from '../components/TodoList'

describe('Todo - Component Test', () => {
  it('should allow user to add a new todo', async () => {
    const todoList = render(<TodoList />)
    const inputField = await todoList.findByLabelText('todo_input_field')
    user.type(inputField, 'New todo')
    const addTodoBtn = await todoList.findByLabelText('submit_btn')
    user.click(addTodoBtn)
    const todos = await todoList.findAllByLabelText('todo_item')
    expect(todos.length).toBe(1)
  })

  it('should allow user to delete a todo item', async () => {
    const todoList = render(<TodoList />)
    const inputField = await todoList.findByLabelText('todo_input_field')
    await user.type(inputField, 'New todo')
    const addTodoBtn = await todoList.findByLabelText('submit_btn')
    await user.click(addTodoBtn)
    const deleteBtn = await todoList.findAllByLabelText('delete_btn')
    await user.click(deleteBtn[0])
    const todos = todoList.queryAllByLabelText('todo_item')
    expect(todos.length).toBe(0)
  })

  it('should clear the text input after adding a todo item', async () => {
    const todoList = render(<TodoList />)
    const inputField = (await todoList.findByLabelText(
      'todo_input_field',
    )) as HTMLInputElement
    await user.type(inputField, 'New todo')
    const addTodoBtn = await todoList.findByLabelText('submit_btn')
    await user.click(addTodoBtn)
    expect(inputField.value).toEqual('')
  })
})
