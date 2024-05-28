import React from "react";
import Image from "next/image";
import styles from './AllItem.module.css'; 

const AllItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Frame 461.png")} alt="item 1" />
                <h3 className={styles.title}>All Bags</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Group 298.png")} alt="item 2" />
                <h3 className={styles.title} style={{ marginTop: "33px" }}>Vanity Pouch</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Frame 49 (2).png")} alt="item 3" />
                <h3 className={styles.title}>Tote Bags</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Frame 13.png")} alt="item 4" />
                <h3 className={styles.title}>Duffle Bag</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Frame 49.png")} alt="item 5" />
                <h3 className={styles.title}>Laptop Sleeve</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Frame 49 (1).png")} alt="item 6" />
                <h3 className={styles.title}>Messenger Box</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Frame 22.png")} alt="item 7" />
                <h3 className={styles.title}>Slings Bags</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Handbag.png")} alt="item 8" />
                <h3 className={styles.title}>Handbags</h3>
            </div>
            <div className={styles.item}>
                <Image className={styles.image} src={require("../assets/Component 5.png")} alt="item 9" />
                <h3 className={styles.title}>Buck</h3>
            </div>
        </div>
    );
}

export default AllItem;
