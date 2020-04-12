import React, { Component } from "react";
import ResultInfo from "../result/result-info/result-info";

class Result extends React.Component {
    
    handleOnclick() {
        /* Переход на начальную страницу  */
        let result = document.getElementById("result");
        result.style.display = 'none';
        let promo = document.getElementById("promo");
        promo.style.display = 'flex';
        let select = document.getElementById("select");
        select.style.display = 'flex';
        let contact = document.getElementById("contact");
        contact.style.display = 'flex';

        window.location.href = "#promo";

        // Очищение форм на странице контакных данных
        let fullNameInput = document.getElementById("fullNameInput");
        fullNameInput.value = "";
        let phoneInput = document.getElementById("phoneInput");
        phoneInput.value = "";
        let emailInput = document.getElementById("emailInput");
        emailInput.value = "";
        let addressInput = document.getElementById("addressInput");
        addressInput.value = "";

        // Очищение форм на странице выбора времени и бутылок
        let totalCostBottles = document.getElementById("totalCostBottles");
        totalCostBottles.innerHTML = "0&nbsp;₽";

        // Очищение форм на странице результата
        let resultTypeBottle = document.getElementById("resultTypeBottle");
        resultTypeBottle.innerHTML = "-";
        let resultAmountBottle = document.getElementById("resultAmountBottle")
        resultAmountBottle.innerHTML = "-";
        let resultDate = document.getElementById("resultDate");
        resultDate.innerHTML = "-";
        let resultTime = document.getElementById("resultTime");
        resultTime.innerHTML = "-";
        let resultAdrress = document.getElementById("resultAdrress");
        resultAdrress.innerHTML = "-";
        let resultPhone = document.getElementById("resultPhone");
        resultPhone.innerHTML = "-";
        let resultTotalCost = document.getElementById("resultTotalCost");
        resultTotalCost.innerHTML = "-";
        let resultOrder = document.getElementById("resultOrder");
        resultOrder.innerHTML = "-";
      }
    render() {
        return (
            <section className="result" id="result" style={{display: "none"}}>
                <div className="result-header">
                    <a className="result-link" href="#select">
                        <i className="material-icons">check</i>
                    </a>
                    <h2 className="result-title">Заказ оформлен</h2>
                </div>
                <ResultInfo />
                <p className="result-message">
                Ваш заказ <span>№<span id="resultOrder">-</span></span> успешно оформлен. В ближайшее время по указанному телефону с Вами свяжется наш менеджер.
                </p>
                <button className="result-button" onClick={this.handleOnclick.bind(this)}>Новый заказ</button>
            </section>
        );
    }
}

export default Result