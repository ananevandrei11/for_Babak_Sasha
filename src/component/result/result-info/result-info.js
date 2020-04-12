import React, { Component } from "react";

class ResultInfo extends React.Component {
    render() {
        return (
            <div className="result-info">
                <div className="result-info--main">
                    <ul className="result-info--list">
                        {/* Результат: тип и количество бутылок */}
                        <li className="result-info--item">
                            <h3>Бутыль&nbsp;
                                <span id="resultTypeBottle">-</span>
                                &nbsp;л
                            </h3>
                            <p><span id="resultAmountBottle">-</span>&nbsp;шт</p>
                        </li>
                        {/* Результат: дата и время доставки */}
                        <li className="result-info--item">
                            <h3>
                                <span id="resultDate">-</span>
                                &nbsp;февраля
                            </h3>
                            <p>
                                <span id="resultTime">-</span>
                            </p>
                        </li>
                        {/* Результат: адрес доставки */}
                        <li className="result-info--item">
                            <h3>Адрес доставки</h3>
                            <p><span id="resultAdrress"></span></p>
                        </li>
                        {/* Результат: контактные данные */}
                        <li className="result-info--item">
                            <h3>Телефон</h3>
                            <p><span id="resultPhone"></span></p>
                        </li>
                    </ul>
                </div>
                {/* Результат: итоговая стоимость */}
                <div className="result-total">
                    <h2 className="result-title">Итого</h2>
                    <p><span id="resultTotalCost">-</span>&nbsp;₽</p>
                </div>
            </div>
        );
    }
}

export default ResultInfo