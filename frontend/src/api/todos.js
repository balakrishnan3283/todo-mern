const API_URL = "http://localhost:3000/todos"

export async function getTodosAPI(){
    return fetch(API_URL)
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}

export async function getTodosAPIById(id){
      
    return fetch(API_URL+`/edit/${id}`,{
        method: "GET"
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}


export async function postTodosAPI(todo){
    return fetch(API_URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(resp => {
        return resp.json()
    })
    .then(data => data)
    .catch(e => console.log(e))
}




export async function updateTodosAPIById(id, book){
    let todo = {
        _id: id,
         book
    }
    console.log("calling update ytytytAPI!!" + JSON.stringify(todo))
    return fetch(API_URL+`/update/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}


export async function patchTodosAPI(id, done){
    let todo = {
        _id: id,
        done: done
    }
    console.log("calling update API!!" + JSON.stringify(todo))
    return fetch(API_URL+`/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}

export async function deleteTodosAPI(id){
    return fetch(API_URL+`/${id}`,{
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}