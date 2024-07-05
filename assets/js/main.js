/* async funcion asincrona para obtener ersultados de una api para poder usar posteriormente el await*/
async function getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try{
        const response = await fetch(url); /*await es para que espere el resultado de la peticion y el fetch es la peticion en si misma */
        const posts = await response.json(); /* para que la peticion se convierta en jason para ser leida por js */

        /* para escribir el resultado obtenido como json en html mediante inner */
        posts.forEach(element => {
            document.getElementById('listaPosts').innerHTML += `<li><b> ${element.title}</b><br><p>${element.body}</p></li>`
        });
    }catch(error){
        console.error('F para ti', error)
    }

}