import React from "react";

import CatagoryPicture from "../components/CatagoryPictures";


let picPath = '../artassets/clothingPics/';
let picName = 'th0.jpg';

const label = "ShopView";


class ShoppingView extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            picPath:picPath,
            picName:picName

        }
       
    }

    render (){
        const{
            picPath,
            picName
            
        } = this.state
        return(
            <section id={label + "Sec"}>
            <h2>Home - Styles - PunkRock</h2>
            <h1>Punk Rock Clothing \/</h1>
            <section>
                <CatagoryPicture pathToChild={picPath+picName}></CatagoryPicture>
    
            </section>
    
        </section>
        )
    }
}
export default ShoppingView;