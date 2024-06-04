'use client'
import React from "react";
import Image from "next/image";
import styles from '../Components/LandingPage.module.css'; 

const LandingPage = ({data}) => {
    const doublePrice = (price) => {
        return (price * 2).toFixed(2);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
                    <h3 className={styles.title}>Bags</h3>
                    <div className={styles.dot}></div>
                    <h3 className={`${styles.title} ${styles.boldTitle}`}>Backpacks</h3>
                </div>
                <div className={styles.productInfo}>
                    <h3 className={styles.productCount}>13 Products</h3> 
                    <Image className={styles.icon} src={require("../assets/Vector 4.png")} alt="down" height={18} />
                </div>
            </div>
            <div className={styles.grid}>
                {data.length > 0 ? (
                    data.map((ele) => {
                        let { id, title, price, image } = ele;			
                        return (
                            <div key={id} className={styles.card}>
                                <Image className={styles.productImage} src={image} width={100} alt={title} height={400} />
                                <h2 className={styles.productTitle}>{title}</h2>
                                <div className={styles.priceGroup}> 
                                    <div className={styles.priceDetails}>
                                        <Image src={require("../assets/rupee-sign.png")} alt="rupee" height={16} />
                                        <span className={styles.price}>{price}</span>
                                        <span className={styles.discountedPrice}>
                                            {doublePrice(price)}<span className={styles.discountLabel}>(50% Off)</span>
                                        </span>
                                    </div>
                                    <Image className={styles.bagIcon} src={require("../assets/Group 450.png")} alt="bag"/>
                                </div>
                                <Image className={styles.notificationIcon} src={require("../assets/Frame 53.png")} alt="notification"/>
																	
                            </div>
                        );
                    })
                ) : (
                    <p className={styles.noItemsMessage}>Item is not in the list</p>
                )}
            </div>
        </div>
    );
}

export default LandingPage;
