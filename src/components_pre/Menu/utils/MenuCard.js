import Card from "./Card"

function MenuCard({menuIcon, menuName}){

    return(
        <Card style={{overflow:'hidden'}}>
            <div><img src={menuIcon} alt={menuName} /></div>
            <div><label>{menuName}</label></div>
        </Card>
    )

}

export default MenuCard