import { useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";

// fetch today's featured item from https://cs571api.cs.wisc.edu/rest/f24/hw3/featured-item 
// and save it to the feature state variable via its mutator function. As a part of your fetch, 
// console.log the response body data that you receive.

export default function BadgerMart(props) {

    const [feature, setFeature] = useState();

    useEffect(() => {
        // TODO I should fetch and setFeature here!
        fetch("https://cs571.org/rest/f24/hw3/featured-item", { 
        method: "GET" , headers: { "X-CS571-ID": "bid_98c5657e8b78dd46d95d3bfc60ab9ce817f77ae20fbae7eefdf042a344e41552"}
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFeature(data);
            })
            .catch(error => console.error(error));
    }, []);

    return <div>
        <h1>Welcome to BadgerMart!</h1>
        <div style={{maxWidth: "40rem", margin: "auto", textWrap: "pretty"}}>
            <p>BadgerMart, located at the heart of the UW-Madison campus, is the go-to grocery store for students, faculty, and staff. Offering a wide range of products, including fresh produce, dairy, bakery items, meat, seafood, and pantry essentials, BadgerMart ensures that the university community has access to everything they need. With exclusive student discounts, convenient online ordering, and meal kits designed for busy schedules, shopping at BadgerMart is both affordable and effortless.</p>
        </div>
        <h2>Today's Special</h2>
        {feature ? <FeaturedItem {...feature}/> : <p>Today's feature is still loading...</p>}
    </div>
}