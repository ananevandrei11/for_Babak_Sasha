import React, { Component } from "react";
import SelectBottles from "../select/select-bottles/select-bottles";
import SelectAmount from "../select/select-amount/select-amount";
import SelectTime from "../select/select-time/select-time";

class Select extends React.Component {
    // Назначение input
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }
    // Получение измененных значений input
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: event.target.value,
        });

        // Изменение класса для формы выбора количества бутылок в зависимости от типа бутылок
        let amountBottleBig = this.bottleBig.checked;
        let amountBottleAverage = this.bottleAverage.checked;
        let amountBottleSmall = this.bottleSmall.checked;

        // Условие выбора Бутылки
        let amountBottleClass = document.getElementById("amount-bottles");
        if (amountBottleBig) {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles left");
        } else if (amountBottleAverage) {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles right");
        } else if (amountBottleSmall) {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles righter");
        } else {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles");
        }
    }
    // Отправка формы
    handleSubmit(event) {
        // Начальное условие для отработки передачи информации (важно для декстопных экранов)
        let emailInput = document.getElementById("emailInput").value;
        let fullNameInput = document.getElementById("fullNameInput").value;
        let addressInput = document.getElementById("addressInput").value;
        let phoneInput = document.getElementById("phoneInput").value;
        let acceptInput = document.getElementById("acceptInput");
        let amountBottle = document.getElementById("amountBottle").value;
        let bottleBig = document.getElementById("bottleBig").checked;
        let bottleAverage = document.getElementById("bottleAverage").checked;
        let bottleSmall = document.getElementById("bottleSmall").checked;
        let selectTime = document.getElementById("selectTime");
        let selectTimePartTagP = selectTime.getElementsByTagName("p");
        let timePartTrue;
        for (let i = 0; i < selectTimePartTagP.length; i++) {
            let timePartTagP = selectTimePartTagP[i].classList.contains('checked-time');
            if (timePartTagP) {
                timePartTrue = true;
            }
        }
        let selectDate = document.getElementById("selectDate");
        let selectDatePartClass = selectDate.getElementsByClassName("select-date-day");
        let datePartTrue;
        for (let i = 0; i < selectDatePartClass.length; i++) {
            let datePartClass = selectDatePartClass[i].classList.contains('checked-date');
            if (datePartClass) {
                datePartTrue = true;
            }
        }


        if (
            emailInput &&
            fullNameInput &&
            addressInput &&
            phoneInput &&
            acceptInput.hasAttribute("checked") &&
            amountBottle != "0" &&
            (bottleBig || bottleAverage || bottleSmall) &&
            timePartTrue &&
            datePartTrue
        ) {
            // Отправка значения типа и количества бутылок
            let typeBottles = document.getElementById("typeBottles");
            for (let i = 0; i < typeBottles.length; i++) {
                let elements = typeBottles[i];
                if (elements.checked) {
                    let checkedElements = elements.value;
                    document.getElementById("resultTypeBottle").innerHTML = checkedElements;
                    if (checkedElements == "18,9") {
                        document.getElementById("resultAmountBottle").innerHTML = amountBottle
                    } else if (checkedElements == "1,5") {
                        document.getElementById("resultAmountBottle").innerHTML = amountBottle * 6;
                    } else if (checkedElements == "0,5") {
                        document.getElementById("resultAmountBottle").innerHTML = amountBottle * 12;
                    }
                }
            }
            // Получение значения стоимости
            let resultTotalCost = document.getElementById("resultTotalCost");
            let resultTypeBottles = document.getElementById("resultTypeBottle");
            if (resultTypeBottles.innerHTML == "18,9") {
                resultTotalCost.innerHTML = (amountBottle * 220).toFixed(2);
            } else if (resultTypeBottles.innerHTML == "1,5") {
                resultTotalCost.innerHTML = (amountBottle * 175).toFixed(2);
            } else if (resultTypeBottles.innerHTML == "0,5") {
                resultTotalCost.innerHTML = (amountBottle * 270).toFixed(2);
            }
            // Отправка значения даты доставки
            let selectDate = document.getElementById("selectDate");
            let selectDateDay = selectDate.getElementsByClassName("checked-date");
            for (let i = 0; i < selectDateDay.length; i++) {
                let dateDayNumber = selectDateDay[i].getElementsByTagName("p")[0];
                let valueDateDayNumber = dateDayNumber.innerHTML;
                let resultDate = document.getElementById("resultDate");
                resultDate.innerHTML = valueDateDayNumber;
            }
            // Отправка значения времени доставки
            let selectTimePartTagSpan = selectTime.getElementsByClassName("checked-time");
            for (let i = 0; i < selectTimePartTagSpan.length; i++) {
                let timePartTagSpan = selectTimePartTagSpan[i].getElementsByTagName("span")[0];
                let valueTimePartTagSpan = timePartTagSpan.innerHTML;
                let resultTime = document.getElementById("resultTime");
                resultTime.innerHTML = valueTimePartTagSpan;
            }
            // Повторная отправка данных на результирующую страницу (требуется для декстопных экранов)
            document.getElementById("resultAdrress").innerHTML = addressInput;
            document.getElementById("resultPhone").innerHTML = phoneInput;

            // Присвоение номера заказа (рандомное)
            let resultOrder = document.getElementById("resultOrder");
            resultOrder.innerText = Math.floor(Math.random() * 300) + 1;

            /* Переход на страницу оформленной заявки (можно раскомментировать для отображения только одного блока на странице) */
            let select = document.getElementById("select");
            select.style.display = 'none';
            let contact = document.getElementById("contact");
            contact.style.display = 'none';
            let result = document.getElementById("result");
            result.style.display = 'flex';

            window.location.href = "#result"
        } else (
            alert("Пожалуйста, выбирите все необходимые пункты и заполните все поля.")
        )
        event.preventDefault();
    }

    /* Возврат на предыдущую страницу ввода контактных данных (можно раскомментировать для отображения только одного блока на странице) */
    handleReturn() {
        /* let select = document.getElementById("select");
        select.style.display = 'none';
        let contact = document.getElementById("contact");
        contact.style.display = 'flex';
        
        Требуется добавить style={{display: "none"}} */

        window.location.href = "#contact"
    }

    // Рендер всего компонента
    render() {
        return (
            <section className="select" id="select">
                <div className="select-link">
                    <a href="#contact" onClick={this.handleReturn}>
                        <i className="material-icons">keyboard_arrow_left</i>
                    </a>
                </div>
                <h2 className="select-title">Вода</h2>
                <div className="choice-bottle">
                    {/* Начало секции для выбора типа бутылок */}
                    <SelectBottles />
                    {/* Конец секции для выбора типа бутылок */}

                    {/* Начало секции для выбора количества бутылок (внутри секция выбора времени) */}
                    <SelectAmount />
                    {/* Конец секции для выбора количества бутылок (внутри секция выбора времени)*/}
                </div>
                <SelectTime />
                <button className="select-button" onClick={this.handleSubmit} id="selectButton">Заказать воду</button>
            </section>
        );
    }
}

export default Select