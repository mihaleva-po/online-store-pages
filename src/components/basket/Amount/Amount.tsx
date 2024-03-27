import styles from './Amount.module.scss';
import {useEffect, useState} from "react";

interface Props {
    headphonesState: Headphones[],
    wirelessHeadphonesState: Headphones[],
}

interface Headphones {
    id: number,
    img: string,
    title: string,
    price: number,
    rate: number,
    count: number
}

export function Amount({headphonesState, wirelessHeadphonesState}: Props) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        const price = headphonesState.reduce((sum, el) => sum + el.price * el.count, 0);
        const price2 = wirelessHeadphonesState.reduce((sum, el) => sum + el.price * el.count, 0);

        setTotalPrice(price + price2);

    }, [headphonesState, wirelessHeadphonesState]);

    return (
        <div className={styles['container']}>
            <div className={styles['amount']}>
                <p>ИТОГО</p>
                <p>₽ {totalPrice}</p>
            </div>
            <button>Перейти к оформлению</button>
        </div>
    )
}
