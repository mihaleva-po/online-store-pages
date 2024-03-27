import styles from './CardProduct.module.scss';
import React from "react";
import {useLang} from "../../../context/LangContext";

interface Props {
    id: number,
    image: string,
    title: string,
    price: number,
    rate: number,
    count: number,
    updateCountProduct: (id: number, count: number) => void,
}

export function CardProduct({id, image, title, price, count, rate, updateCountProduct}: Props) {

    const handleClickBuy = () => {
        if (count === 10) {
            alert('Больше 10 товаров добавить нельзя!')
        } else {
            updateCountProduct(id, count + 1);
        }
    }

    const {currentLang,} = useLang();

    return (
        <div className={styles['container']}>
            <div className={styles['container-img']}>
                <img alt={'iconProduct'} src={require(`../../../imgProducts/${image.toLowerCase()}`)}/>
            </div>
            <div className={styles['text']}>
                <div className={styles['left-text']}>
                    <h3>{title}</h3>
                    <div className={styles['rate']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                            <path
                                d="M12.6267 18.0146L5.41612 22.3659L7.37641 14.2452L0.960693 8.81518L9.38209 8.14856L12.6267 0.439941L15.8714 8.14856L24.294 8.81518L17.8771 14.2452L19.8374 22.3659L12.6267 18.0146Z"
                                fill="#FFCE7F"/>
                        </svg>
                        <p>{rate}</p>
                    </div>
                </div>
                <div className={styles['right-text']}>
                    <p>{price} ₽</p>
                    <h3 onClick={handleClickBuy}>{currentLang === 'ru' ? 'Купить' : 'Buy'}</h3>
                </div>
            </div>
        </div>
    )
}
