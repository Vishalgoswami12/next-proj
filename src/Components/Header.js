import React from "react"
import Image from "next/image";
const Header = () => {
    return(
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <h2 style={{color:"#E5DFD9", fontSize:"20px",letterSpacing:"6px",marginLeft:"32px"}}>T A N N  T R I M</h2>
              <div style={{display:"flex",width:"14%" ,justifyContent:"space-evenly",alignItems:"center"}}>
                    <Image style={{color:"#E5DFD9",fontSize:"18px"}} src={require("../assets/search.png")} alt="Search"/>
                    <Image tylestyle={{color:"#E5DFD9",fontSize:"18px"}} src={require("../assets/user-alt.png")} alt="user"/>
                    <Image style={{color:"#E5DFD9",fontSize:"18px"}} src={require("../assets/Frame 54.png")} alt="bag"/>
                    <Image style={{color:"#E5DFD9",fontSize:"18px"}} src={require("../assets/Frame 53.png")} alt="notification"/>
                </div>  
            </div>
          <div  style={{ display:"flex" , justifyContent:"center",gap:30,marginTop:"20px"}}> 
            <a style={{fontSize:"14px", color:"#E5DFD9"}} href="#">Bags</a>
            <a style={{fontSize:"14px", color:"#E5DFD9"}} href="#">Travels</a>
            <a style={{fontSize:"14px", color:"#E5DFD9"}} href="#">Accesories</a>
            <a style={{fontSize:"14px", color:"#E5DFD9"}} href="#">Giftinf</a>
            <a style={{fontSize:"14px", color:"#E5DFD9"}} href="#">Jewelery</a>
          </div>
        </div>
    )
}


export default Header;
