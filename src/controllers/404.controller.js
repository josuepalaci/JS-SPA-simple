import view from '../views/404.html';


export default () => {

    let divElement=document.createElement('div');
    divElement.innerHTML=view;

    return divElement;
}