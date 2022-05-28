import { useSSE } from "use-sse"

export const TodoComponent = () => {
  const [todos, error] = useSSE(() => {
    console.log(`running on ${new Date()}`)
    return fetch("https://jsonplaceholder.typicode.com/todos").then(response =>
      response.json()
    )
  }, [])

  if (error) return <div>{error.message}</div>

  if (!todos?.length) return <span>Loading...</span>

  return (
    <section>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
