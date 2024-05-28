'use client'
import React, { useState, useEffect } from "react"
import axios from 'axios';
import Image from "next/image";

const LandingPage = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        return axios.get("https://fakestoreapi.com/products")
            .then((res) => setData(res.data))
            .catch((error) => console.error("Error fetching data: ", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const doublePrice = (price) => {
        return (price * 2).toFixed(2);
    };

    return (
        <div style={{ marginTop: "40px" }}>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ fontSize: "16px", color: "#E5DFD9" }}>Bags</h3>
                <div style={{ backgroundColor: "#E5DFD9", height: "5px", width: "5px", borderRadius: "50%", marginLeft: "10px" }}></div>
                <h3 style={{ fontSize: "16px", fontWeight:"bold", color: "#E5DFD9", marginLeft: "10px" }}>Backpacks</h3>
            </div>
            <div style={{display:"flex", gap:"6px"}}>
                <h3 style={{color: "#E5DFD9",fontSize:"16px"}}>13 Products</h3> 
                <Image  style={{color: "#E5DFD9"}} src={require("../assets/Vector 4.png")} alt="down" height={18} />
            </div>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "40px",
                marginTop: "40px",
            }}>
                {
                    data && data.map((ele) => {
                        let { id, title, price, image } = ele;
                        return (
                            <div key={id} style={{ position: 'relative' }} >
                                <Image style={{ borderRadius: "8px", width:'100%' }} src={image} width={100} alt={title}  height={400} />

                                <h2 style={{ color: "#E5DFD9", fontSize: "20.5px", marginTop: "12px", padding: "10px",height:"145px" }} >{title}</h2>
                                <div style={{display:"flex", justifyContent:"space-between"}}> 
                                <div style={{ width: "70%", padding: "8px" }}>
                                    <Image src={require("../assets/rupee-sign.png")} alt="rupee" height={16} />
                                    <span style={{ color: "#E5DFD9", fontSize: "20px", marginLeft: "5px", fontWeight: 700 }}>{price}</span>
                                    <span style={{ color: "#E5DFD9",fontSize:"12px",marginLeft:"5px" }}> {doublePrice(price)}<span style={{color:"#2FC14F"}} >(50% Off)</span></span>
                                </div>
                                        <Image style={{color:"#E5DFD9"}} src={require("../assets/Group 450.png")} alt="bag"/>
                                </div>
                                <Image  style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        color: '#0C0C0C',
                                        fontSize: '18px'
                                    }} src={require("../assets/Frame 53.png")} alt="notification"/>

                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default LandingPage;
