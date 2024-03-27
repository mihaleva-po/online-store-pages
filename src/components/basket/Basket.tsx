import styles from './Basket.module.scss';
import {Header} from "../Header/Header";
import {Footer} from "../footer/Footer";
import React from "react";
import {ProductsOnBasket} from "./ProductsOnBasket/ProductsOnBasket";
import {Amount} from "./Amount/Amount";

interface Props {
    headphonesState: Headphones[],
    wirelessHeadphonesState: Headphones[],
    updateCountProduct: (id: number, count: number) => void,
}

interface Headphones {
    id: number,
    img: string,
    title: string,
    price: number,
    rate: number,
    count: number
}

export function Basket({headphonesState, wirelessHeadphonesState, updateCountProduct}: Props) {
    return (
        <div className={styles['container']}>
            <Header headphonesState={headphonesState}
                    wirelessHeadphonesState={wirelessHeadphonesState}/>
            <div className={styles['basic']}>
                <ProductsOnBasket headphonesState={headphonesState}
                                  wirelessHeadphonesState={wirelessHeadphonesState}
                                  updateCountProduct={updateCountProduct}/>
                <Amount headphonesState={headphonesState}
                        wirelessHeadphonesState={wirelessHeadphonesState}/>
            </div>
            <Footer/>
        </div>
    )
}
