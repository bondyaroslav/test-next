export const getAllTasks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) throw new Error("Fetch error")
    return response.json()
}