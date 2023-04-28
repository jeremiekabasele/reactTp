import {useState} from 'react';
import rdc from '../assets/rdc.webp';
import photo from'../assets/photo.jpg';
import './Sidebar.css';
import MenuItems from './MenuItems';
const menus= [
    {
        icon : "fa fa-house",
        title: "Home"
    },

    {
        icon : "far fa-hashtag",
        title : "Explore"
    },

    {
        icon: "far fa-bell",
        title: "Notifications"
    },
    {
        icon: "far fa-envelope",
        title: "Messages"
    }

]
const oneProfile=[
    {
        image:photo,
        nom:"Jérémie KABASELE"
    }
]

function Sidebar(){
    const [number, setNumber]= useState(0)
    function clic(){
        setNumber(number => number+1);
        setNumber(number => number+1);
        setNumber(number => number+1);    
    }
    return(
    <div>
        
        <div>
            <img className='logo' src={rdc} alt='text'/>
            {
                menus.map(menu=><MenuItems menue={menu}/>)
            }
        </div>
        <button className='tweet' onClick={clic} >Tweet {number}</button>
        <div>
            {
                oneProfile.map(key=><MenuItems menue={key}/>)
            }
        </div>
    </div>     
    );
}

export default Sidebar