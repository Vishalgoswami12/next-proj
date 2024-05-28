import React from "react"
import Image from "next/image"
const AllItem = () => {
    return(
        <div style={{marginTop:"30px", display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Frame 461.png")} alt="item 1"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px",marginLeft:"15px",marginTop:"10px"}} >All Bags</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Group 298.png")} alt="item 2"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"33px"}} >Vanity Pouch</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Frame 49 (2).png")} alt="item 3"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px",marginLeft:"15px",marginTop:"10px"}} >Tote Bags</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Frame 13.png")} alt="itemm4"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"10px",marginLeft:"15px"}} >Duffle Bag</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Frame 49.png")} alt="item 5"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"10px",marginLeft:"5px"}} >Laptop Sleve</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Frame 49 (1).png")} alt="item 6"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"10px"}} >Messenger Box</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Frame 22.png")} alt="item 7"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"10px",marginLeft:"15px"}} >Slings Bgs</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Handbag.png")} alt="item 8"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"10px",marginLeft:"15px"}} >Handbags</h3>
            </div>
            <div>
                <Image style={{color:"#FFFFFF"}} src={require("../assets/Component 5.png")} alt="item 9"/>
                <h3 style={{color:"#E5DFD9",fontSize:"13px", marginTop:"10px",marginLeft:"15px"}} >Buck</h3>
            </div>
        </div>
    )
}

export default AllItem;