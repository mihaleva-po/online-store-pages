import styles from './Card.module.scss';

interface Props {
    id: number,
    image: string,
    title: string,
    price: number,
    count: number,
    updateCountProduct: (id: number, count: number) => void,
}

export function Card({id, image, title, price, count, updateCountProduct}: Props) {

    const handleClickMinus = () => {
        if (count === 1) {
            alert('Больше нельзя убавить количество товара!')
        } else {
            updateCountProduct(id, count - 1);
        }
    }

    const handleClickPlus = () => {
        if (count === 10) {
            alert('Больше нельзя увеличить количество товара!')
        } else {
            updateCountProduct(id, count + 1);
        }
    }

    const handleDelete = () => {
        updateCountProduct(id, 0);
    }

    return (
        <div className={styles['container']}>
            <div className={styles['main']}>
                <div className={styles['icon']}>
                    <img alt={'icon'} src={require(`../../../imgProducts/${image}`)}/>
                </div>
                <div className={styles['text']}>
                    <h3>{title}</h3>
                    <p>{price} ₽</p>
                </div>
                <div className={styles['delete']}>
                    <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
                        <path
                            d="M15.8847 3.4H20.8667V5.1H18.8739V16.15C18.8739 16.3754 18.7689 16.5916 18.5821 16.751C18.3952 16.9104 18.1418 17 17.8775 17H3.92807C3.66381 17 3.41038 16.9104 3.22352 16.751C3.03666 16.5916 2.93168 16.3754 2.93168 16.15V5.1H0.938904V3.4H5.92085V0.85C5.92085 0.624566 6.02583 0.408365 6.21268 0.248959C6.39954 0.0895533 6.65298 0 6.91724 0H14.8883C15.1526 0 15.406 0.0895533 15.5929 0.248959C15.7798 0.408365 15.8847 0.624566 15.8847 0.85V3.4ZM16.8811 5.1H4.92446V15.3H16.8811V5.1ZM12.3117 10.2L14.0733 11.7028L12.6644 12.9047L10.9028 11.4019L9.14118 12.9047L7.73228 11.7028L9.4939 10.2L7.73228 8.6972L9.14118 7.4953L10.9028 8.9981L12.6644 7.4953L14.0733 8.6972L12.3117 10.2ZM7.91363 1.7V3.4H13.892V1.7H7.91363Z"
                            fill="#DF6464"/>
                    </svg>
                </div>
            </div>
            <div className={styles['price-count']}>
                <div className={styles['count']}>
                    <svg onClick={handleClickMinus} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                         viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#FFCE7F"/>
                        <path d="M7.99997 14H22V16H7.99997V14Z" fill="white"/>
                    </svg>
                    <p>{count}</p>
                    <svg onClick={handleClickPlus} xmlns="http://www.w3.org/2000/svg" width="31" height="30"
                         viewBox="0 0 31 30" fill="none">
                        <circle cx="15.2056" cy="15" r="15" fill="#FFCE7F"/>
                        <path d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.2056V14H14.2056Z"
                              fill="white"/>
                    </svg>
                </div>
                <p>{price} ₽</p>
            </div>
        </div>
    )
}
