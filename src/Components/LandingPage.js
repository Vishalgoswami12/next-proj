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
            <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ fontSize: "16px", color: "#E5DFD9" }}>Bags</h3>
                <div style={{ backgroundColor: "#E5DFD9", height: "5px", width: "5px", borderRadius: "50%", marginLeft: "10px" }}></div>
                <h3 style={{ fontSize: "16px", color: "#E5DFD9", marginLeft: "10px" }}>Backpacks</h3>
            </div>
            <div>
                {
                    data && data.map((ele) => {
                        let { id, title, price, image } = ele;
                        return (
                            <div key={id} className="product">
                                <img style={{ borderRadius: "8px" }} src={image} alt={title} width={400} height={500} />
                                <h2 style={{ color: "#E5DFD9", fontSize: "20.5px", marginTop: "12px", width: "30%", padding: "10px" }} >{title}</h2>
                                <div style={{ width: "30%", padding: "8px" }}>
                                    <Image src={require("../assets/rupee-sign.png")} alt="rupee" height={16} />
                                    <span style={{ color: "#E5DFD9", fontSize: "20px", marginLeft: "5px", fontWeight: 700 }}>{price}</span>
                                    <span style={{ color: "#E5DFD9", fontSize: "20px", marginLeft: "10px", fontWeight: 700 }}>Double: {doublePrice(price)}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage;
