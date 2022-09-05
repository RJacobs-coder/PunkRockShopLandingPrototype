import React from "react";

import ban0 from "../artassets/banner/BannerPunkNotDead.jpg";
import ban1 from "../artassets/banner/BannerPunkPlanner.jpg";
import ban2 from "../artassets/banner/BannerPunkRock.jpg";
import ban3 from "../artassets/banner/BannerPunkSkull.jpg";



const banArray = [ban0,ban1,ban2,ban3];

const label = "PgeLnk";


class PageLinks extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            banArray:banArray

        };
    }

    render() {
        const { banArray} = this.state;
        return(
           <section id={label+"sec"}>
            <div className={label+"div"}>
            <img className={label+"img"}>
            </img>    
            <h1></h1>
            </div>
           </section>
        )
    }
}

export default PageLinks;