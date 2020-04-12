import React, { Component } from "react";

class InputButtonPromo extends React.Component {
  // Переход на страницу заполнения контактных данных и очищение все форм
  handleOnclick() {
    let result = document.getElementById("result");
    result.style.display = 'none';
    let promo = document.getElementById("promo");
    promo.style.display = 'flex';
    let select = document.getElementById("select");
    select.style.display = 'flex';
    let contact = document.getElementById("contact");
    contact.style.display = 'flex';

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
      <div>
        <a href="#contact" onClick={this.handleOnclick.bind(this)} id="contactButton">Заказать воду</a>
      </div>
    );
  }
}

function Promo() {
  const titleName = "Чистая Вода";
  const textPromo = "Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. Закажите доставку воды и мы привезем её на дом или в офис.";
  return (
    <aside className="promo" id="promo">
      <figure>
      </figure>
      <h1>{titleName}</h1>
      <p>{textPromo}</p>
      <InputButtonPromo />
    </aside>
  );
}

export default Promo
