import {Header} from "../Header/Header";
import {BlockProducts} from "../BlockProducts/BlockProducts";
import {Footer} from "../footer/Footer";
import React from "react";

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

export function Catalog({headphonesState, wirelessHeadphonesState, updateCountProduct}: Props) {
    return (
        <div>
            <Header headphonesState={headphonesState}
                    wirelessHeadphonesState={wirelessHeadphonesState}/>
            <BlockProducts headphonesState={headphonesState}
                           wirelessHeadphonesState={wirelessHeadphonesState}
                           updateCountProduct={updateCountProduct}/>
            <Footer/>
        </div>
    )
}
