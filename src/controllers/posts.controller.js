import view from '../views/posts.html';

const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}


export default async ()=>{

    let divElement=document.createElement('div');
    divElement.innerHTML=view;

    let totalPosts = divElement.querySelector('#total'); 
    let postsElement = divElement.querySelector('#posts');
    
    const posts = await getPost();
    totalPosts.innerHTML = posts.length;
    posts.forEach(post =>{
        postsElement.innerHTML += `
            <li class="list-group-item border-primary bg-dark text-white">
                <h5>${post.title}</h5>
                ${post.body}
            </li>
        `; 
    });
    

    return divElement;
};