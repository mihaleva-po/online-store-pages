import styles from './ProductsOnBasket.module.scss';

import {Card} from "../Card/Card";
import {useLang} from "../../../context/LangContext";
import {useNavigate} from "react-router-dom";

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

export function ProductsOnBasket({headphonesState, wirelessHeadphonesState, updateCountProduct}: Props) {

    const {currentLang} = useLang();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <div className={styles['container']}>
            <div onClick={handleGoBack} className={styles['back']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" viewBox="0 0 512 426" fill="none">
                    <path
                        d="M8.18367 193.081L193.085 8.17528C198.363 2.89715 205.398 0 212.899 0C220.408 0 227.439 2.90131 232.717 8.17528L249.504 24.9671C254.778 30.2369 257.684 37.2758 257.684 44.7809C257.684 52.2818 254.778 59.558 249.504 64.8278L141.636 172.934H484.34C499.791 172.934 512 185.03 512 200.486V224.225C512 239.681 499.791 252.997 484.34 252.997H140.412L249.5 361.706C254.774 366.984 257.68 373.832 257.68 381.337C257.68 388.834 254.774 395.781 249.5 401.055L232.713 417.793C227.434 423.071 220.404 425.947 212.895 425.947C205.394 425.947 198.359 423.033 193.081 417.755L8.17951 232.854C2.88889 227.559 -0.0207288 220.491 8.40465e-05 212.978C-0.0165662 205.439 2.88889 198.367 8.18367 193.081Z"
                        fill="black"/>
                </svg>
                <h3>{currentLang === 'ru' ? 'Вернуться назад' : 'Go back'}</h3>
            </div>
            <h3>{currentLang === 'ru' ? 'Корзина' : 'Basket'}</h3>

            {headphonesState.map((product, i) =>
                product.count > 0 ?
                    <Card key={i}
                          id={product.id}
                          image={product.img}
                          title={product.title}
                          price={product.price}
                          count={product.count}
                          updateCountProduct={updateCountProduct}/>
                    :
                    null)}

            {wirelessHeadphonesState.map((product, i) =>
                product.count > 0 ?
                    <Card key={i}
                          id={product.id}
                          image={product.img}
                          title={product.title}
                          price={product.price}
                          count={product.count}
                          updateCountProduct={updateCountProduct}/>
                    :
                    null)}
        </div>
    )
}
