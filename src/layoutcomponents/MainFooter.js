import React from "react";

import icon0 from "../artassets/icons/iconWindowFB.png";
import icon1 from "../artassets/icons/iconWindowGitHub.png";
import icon2 from "../artassets/icons/iconWindowLine.png";
import icon3 from "../artassets/icons/iconWindowLinkedIn.png";


export const MainFooter = () => {

    const label = "MainFooter";


    return(
        <section id={label+"sec"}>
            <h1>Customer Service</h1>
            <h2>Contact Us</h2>
            <h2>Help</h2>
            <h2>Track My Order</h2>
            <h1>About ClassHole.com</h1>
            <h2>About Us</h2>
            <h2>Brand Amassador Program</h2>
            <h2>Customer Reviews</h2>
            <h2>Blog</h2>
            <h1>Customer Support</h1>
            <h2>Email us: support@classhole.com</h2>
            <h1>Your Preference</h1>
            <h2>PayPal Payments</h2>
            <h2>Parralel Payments</h2>
            <h2>Eth - Crytpo</h2>

            <ul>
                <li>
                    <p>Follow Us</p>
                    <img src={icon0} className={label+"Icon"}></img>
                    <img src={icon1} className={label+"Icon"}></img>
                    <img src={icon2} className={label+"Icon"}></img>
                    <img src={icon3} className={label+"Icon"}></img>
                </li>
            </ul>
        </section>
    )
}