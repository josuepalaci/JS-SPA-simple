import Home from './home.controller';
import Posts from './posts.controller';
import notFound from './404.controller';


const pages = {
    home: Home,
    post: Posts,
    // product:product,
    notFound:notFound
}

export {pages};