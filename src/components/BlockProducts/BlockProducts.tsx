import {CardProduct} from "./CardProduct/CardProduct";
import styles from './BlockProducts.module.scss';
import {useLang} from "../../context/LangContext";

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

export function BlockProducts({headphonesState, wirelessHeadphonesState, updateCountProduct}: Props) {

    const {currentLang} = useLang();

    return (
        <div className={styles['container']}>
            <p>{currentLang === 'ru' ? 'Наушники' : 'Headphones'}</p>
            <div className={styles['cards']}>
                {
                    headphonesState.map((product, i) =>
                        <CardProduct key={i}
                                     id={product.id}
                                     image={product.img}
                                     title={product.title}
                                     price={product.price}
                                     rate={product.rate}
                                     count={product.count}
                                     updateCountProduct={updateCountProduct}/>
                    )
                }
            </div>
            <p>{currentLang === 'ru' ? 'Беспроводные наушники' : 'Wireless headphones'}</p>
            <div className={styles['cards']}>
                {
                    wirelessHeadphonesState.map((product, i) =>
                        <CardProduct key={i}
                                     id={product.id}
                                     image={product.img}
                                     title={product.title}
                                     price={product.price}
                                     rate={product.rate}
                                     count={product.count}
                                     updateCountProduct={updateCountProduct}/>
                    )
                }
            </div>
        </div>
    )
}
