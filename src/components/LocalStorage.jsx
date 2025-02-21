export const getTodoData = () => {
    let ourData = localStorage.getItem("ourData")
    if (!ourData) return ([])
    return (JSON.parse(ourData))
}


export const setTodoData = (data) => {
    localStorage.setItem("ourData", JSON.stringify(data))
}