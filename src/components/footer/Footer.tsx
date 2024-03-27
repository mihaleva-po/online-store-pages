import styles from './Footer.module.scss';
import {useLang} from "../../context/LangContext";

export function Footer() {

    const {currentLang, changeLang} = useLang();

    return (
        <div className={styles['container']}>
            <div className={styles['name-site']}>QPICK</div>
            <div className={styles['navigation']}>
                <a href="/">{currentLang === 'ru' ? 'Избранное' : 'Favourites'}</a>
                <a href="/basket">{currentLang === 'ru' ? 'Корзина' : 'Basket'}</a>
                <a href="/">{currentLang === 'ru' ? 'Контакты' : 'Contacts'}</a>
            </div>
            <div className={styles['info']}>
                <p>{currentLang === 'ru' ? 'Условия сервиса' : 'Terms of Service'}</p>
                <div className={styles['lang']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_81_449)">
                            <path
                                d="M1.66669 9.99984C1.66669 14.6023 5.39752 18.3332 10 18.3332C14.6025 18.3332 18.3334 14.6023 18.3334 9.99984C18.3334 5.39734 14.6025 1.6665 10 1.6665C5.39752 1.6665 1.66669 5.39734 1.66669 9.99984Z"
                                stroke="#838383"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <path
                                d="M10.8334 1.70801C10.8334 1.70801 13.3334 4.99967 13.3334 9.99967C13.3334 14.9997 10.8334 18.2913 10.8334 18.2913"
                                stroke="#838383"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <path
                                d="M9.16669 18.2913C9.16669 18.2913 6.66669 14.9997 6.66669 9.99967C6.66669 4.99967 9.16669 1.70801 9.16669 1.70801"
                                stroke="#838383"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <path d="M2.19171 12.9165H17.8084" stroke="#838383"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <path d="M2.19171 7.08301H17.8084" stroke="#838383"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_81_449">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <p onClick={() => changeLang('ru')}
                       className={currentLang === 'ru' ? styles['selected'] : undefined}>
                        {currentLang === 'ru' ? 'Рус' : 'Ru'}
                    </p>
                    <p onClick={() => changeLang('eng')}
                       className={currentLang === 'eng' ? styles['selected'] : undefined}>
                        Eng
                    </p>

                </div>
            </div>
            <div className={styles['socialNetwork']}>
                <a href="https://vk.com/mvideo?ysclid=lu6x3ll8eb545023267" target={'_blank'} rel={'noreferrer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="684" height="412" viewBox="0 0 684 412" fill="none">
                        <path
                            d="M401.167 392.5V281.833C475.5 293.167 499 351.667 546.333 392.5H667C636.831 325.149 591.819 265.494 535.333 218C578.667 158.333 624.667 102.167 647.167 17H537.5C494.5 82.1667 471.833 158.5 401.167 208.833V17H242L280 64V231.5C218.333 224.333 176.667 111.5 131.5 17H17C58.6667 144.667 146.333 424.833 401.167 392.5Z"
                            stroke="black"
                            strokeWidth="32.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
                <a href="https://t.me/mvideo_official_bot" target={'_blank'} rel={'noreferrer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="667" height="667" viewBox="0 0 667 667" fill="none">
                        <path
                            d="M333.333 600C404.058 600 471.885 571.905 521.895 521.895C571.905 471.885 600 404.058 600 333.333C600 262.609 571.905 194.781 521.895 144.772C471.885 94.7618 404.058 66.6667 333.333 66.6667C262.609 66.6667 194.781 94.7618 144.772 144.772C94.7618 194.781 66.6667 262.609 66.6667 333.333C66.6667 404.058 94.7618 471.885 144.772 521.895C194.781 571.905 262.609 600 333.333 600ZM333.333 666.667C149.233 666.667 0 517.433 0 333.333C0 149.233 149.233 0 333.333 0C517.433 0 666.667 149.233 666.667 333.333C666.667 517.433 517.433 666.667 333.333 666.667ZM229.667 372.333L146.4 346.367C128.4 340.867 128.3 328.467 150.433 319.567L474.867 194.233C493.7 186.567 504.367 196.267 498.267 220.567L443.033 481.233C439.167 499.8 428 504.233 412.5 495.667L327.467 432.733L287.833 471C283.767 474.933 280.467 478.3 274.2 479.133C267.967 480 262.833 478.133 259.067 467.8L230.067 372.1L229.667 372.333Z"
                            fill="black"/>
                    </svg>
                </a>
                <a rel={'noreferrer'}
                   href="https://yandex.ru/project/browser/whatsapp/s/10?utm_term=whatsapp&banerid=0600000000&utm_campaign=search_apps_exp%7C90156707&utm_medium=search&from=direct_serp&yclid=16450632110629978111&utm_content=5232450405%7C14542466247&utm_source=yandex"
                   target={'_blank'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="478" height="480" viewBox="0 0 478 480" fill="none">
                        <path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M408.103 69.756C363.196 24.7972 303.475 0.02625 239.85 0C108.747 0 2.0475 106.696 1.995 237.835C1.977 279.756 12.9277 320.677 33.7432 356.748L0 480L126.091 446.923C160.834 465.876 199.948 475.863 239.753 475.875H239.854C370.942 475.875 477.653 369.17 477.703 238.025C477.73 174.469 453.012 114.712 408.103 69.756ZM239.85 435.705H239.767C204.295 435.69 169.505 426.157 139.147 408.148L131.932 403.862L57.108 423.491L77.079 350.539L72.3765 343.06C52.587 311.583 42.1365 275.203 42.1545 237.849C42.1957 128.85 130.883 40.1715 239.929 40.1715C292.734 40.1887 342.372 60.7785 379.696 98.1465C417.019 135.514 437.563 185.185 437.545 238.01C437.499 347.017 348.817 435.705 239.85 435.705ZM348.289 287.641C342.348 284.665 313.127 270.292 307.678 268.306C302.234 266.323 298.267 265.335 294.31 271.282C290.346 277.23 278.958 290.618 275.489 294.582C272.02 298.549 268.558 299.047 262.613 296.071C256.669 293.097 237.52 286.819 214.819 266.572C197.152 250.813 185.226 231.351 181.757 225.404C178.294 219.451 181.727 216.544 184.364 213.274C190.798 205.285 197.24 196.909 199.221 192.946C201.204 188.978 200.211 185.507 198.723 182.533C197.24 179.56 185.355 150.307 180.403 138.403C175.576 126.82 170.68 128.383 167.029 128.203C163.567 128.029 159.603 127.994 155.639 127.994C151.678 127.994 145.238 129.479 139.789 135.433C134.343 141.383 118.992 155.759 118.992 185.012C118.992 214.265 140.287 242.524 143.258 246.491C146.228 250.459 185.167 310.487 244.783 336.228C258.963 342.357 270.031 346.01 278.665 348.749C292.903 353.272 305.856 352.634 316.098 351.104C327.517 349.396 351.257 336.726 356.214 322.844C361.165 308.962 361.165 297.064 359.677 294.582C358.195 292.104 354.231 290.618 348.289 287.641Z"
                            fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
