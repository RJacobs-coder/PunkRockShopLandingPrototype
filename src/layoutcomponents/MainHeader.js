import React from "react";


import SearchBar from "../components/SearchBar";


import trollyIcon from "../artassets/icons/trolley-cart.png";


export const MainHeader = () => {



    return(

        <section id="MainHeader">

        <h1>ClassHole.com</h1>
        <img id="trollyIcon" src={trollyIcon}></img>
        <SearchBar id="searchBarHeader"></SearchBar>
        </section>

        



    )
}