'use client'
import React,{useState} from "react";
import Image from "next/image";
import styles from './Header.module.css'; 

const Header = ({onSearch}) => {
    const [showSearch,setShowSearch] = useState(false)
    const[input,setInput] = useState("")

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    }
    const handleSearch = (e) => {
        setInput(e.target.value)
        onSearch(e.target.value)
    }
    return (
        <div>
            <div className={styles.headerContainer}>
                <h2 className={styles.title}>T A N N  T R I M</h2>
                <div className={styles.iconContainer}>
                {showSearch ? (
                        <input
                            type="text"
                            className={styles.searchInput}
                            onBlur={() => setShowSearch(false)}
                            placeholder="Search..."
                            value={input}
                            onChange={handleSearch}
                        />
                    ) : (
                        <Image
                            className={styles.icon}
                            src={require("../assets/search.png")}
                            alt="Search"
                            onClick={handleSearchClick}
                        />
                    )}
                    <Image className={styles.icon} src={require("../assets/user-alt.png")} alt="user" />
                    <Image className={styles.icon} src={require("../assets/Frame 54.png")} alt="bag" />
                    <Image className={styles.icon} src={require("../assets/Frame 53.png")} alt="notification" />
                </div>
            </div>
            <div className={styles.navContainer}> 
                <a className={styles.navLink} href="#">Bags</a>
                <a className={styles.navLink} href="#">Travels</a>
                <a className={styles.navLink} href="#">Accesories</a>
                <a className={styles.navLink} href="#">Giftinf</a>
                <a className={styles.navLink} href="#">Jewelery</a>
            </div>
        </div>
                    
    );
}

export default Header;
