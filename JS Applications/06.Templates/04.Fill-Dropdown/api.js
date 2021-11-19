export async function getItems(){
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();

    return Object.values(data);
}

export async function postItem(item){
    await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: item})
    })
}