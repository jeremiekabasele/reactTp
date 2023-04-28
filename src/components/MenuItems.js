function MenuItems({menue}){
    return(
        <div>
            <div className="menu-item">
                <i className={menue.icon}></i>
                {menue.title}
            </div>
            <div className="image-item">
                <img src={menue.image} className="profile"/>
                {menue.nom}
            </div>
        </div>
        
    )
}
export default MenuItems