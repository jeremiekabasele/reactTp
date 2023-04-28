import './Navbar.css'
function Navbar({title = "default title"}){
    return(
        <p className='navbar'>{title}</p>
    );
}
export default Navbar