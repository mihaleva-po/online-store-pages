import React, {useState} from 'react';
import './App.css';
import {Catalog} from "./components/catalog/Catalog";
import {Basket} from "./components/basket/Basket";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {headphones, wirelessHeadphones} from "./data/products";

function App() {

    const [headphonesState, setHeadphones] = useState(headphones);
    const [wirelessHeadphonesState, setWirelessHeadphones]
        = useState(wirelessHeadphones);

    const updateCountProduct = (id: number, count: number) => {
        let updateData = headphonesState.map(el => {
            if (el.id === id) {
                el.count = count;
            }
            return el;
        });
        setHeadphones(updateData);

        let updateData2 = wirelessHeadphonesState.map(el => {
            if (el.id === id) {
                el.count = count;
            }
            return el;
        });
        setWirelessHeadphones(updateData2);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Catalog headphonesState={headphonesState}
                                             wirelessHeadphonesState={wirelessHeadphonesState}
                                             updateCountProduct={updateCountProduct}/>} path={'/'}/>
                    <Route element={<Basket headphonesState={headphonesState}
                                            wirelessHeadphonesState={wirelessHeadphonesState}
                                            updateCountProduct={updateCountProduct}/>} path={'/basket'}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
