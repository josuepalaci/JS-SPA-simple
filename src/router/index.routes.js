
import {pages} from '../controllers/index';

let content = document.getElementById('root');
const router = async (route) =>{
    content.innerHTML ='';
    switch (route) {
        case '#/':{
            return content.appendChild(pages.home());
        }
        case '#/products':
            return console.log("products");
            
        case '#/posts':
            return content.appendChild(await pages.post());
        default:
            return content.appendChild(await pages.notFound());
    }
};

export {router};