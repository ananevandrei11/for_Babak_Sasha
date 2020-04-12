import React, { Component } from "react";
import BottleBig from "../../select/bottle-big.png";
import BottleAverage from "../../select/bottle-average.png";
import BottleSmall from "../../select/bottle-small.png";

class SelectBottles extends React.Component {
    // Назначение счетчика бутылок
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Получение измененных значений input
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: event.target.value,
        });
        
        // Изменение класса для формы выбора количества бутылок в зависимости от типа бутылок и назначение аттрибута checked типу бутылки
        let amountBottleBig = this.bottleBig;
        let amountBottleAverage = this.bottleAverage;
        let amountBottleSmall = this.bottleSmall;
        let amountBottleClass = document.getElementById("amount-bottles");

        if (amountBottleBig.checked) {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles left");
            this.bottleBig.setAttribute("checked", "checked");
            this.bottleAverage.removeAttribute("checked", "checked");
            this.bottleSmall.removeAttribute("checked", "checked");
        } else if (amountBottleAverage.checked) {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles right");
            this.bottleBig.removeAttribute("checked", "checked");
            this.bottleAverage.setAttribute("checked", "checked");
            this.bottleSmall.removeAttribute("checked", "checked");
        } else if (amountBottleSmall.checked) {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles righter");
            this.bottleBig.removeAttribute("checked", "checked");
            this.bottleAverage.removeAttribute("checked", "checked");
            this.bottleSmall.setAttribute("checked", "checked");
        } else {
            amountBottleClass.setAttribute("class", "select-form--amounts__bottles");
        }
    }
    // Отправка формы
    handleSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return (
                <form className="select-form--bottles" name="type-bottles" id="typeBottles">
                    <input className="type-bottle-input"
                        type="radio"
                        id="bottleBig"
                        name="bottles"
                        value="18,9"
                        onChange={this.handleChange}
                        ref={ref => this.bottleBig = ref}
                    />
                    <label htmlFor="bottleBig">
                        <img src={BottleBig} />
                    </label>
                    <input className="type-bottle-input"
                        type="radio"
                        id="bottleAverage"
                        name="bottles"
                        value="1,5"
                        onChange={this.handleChange}
                        ref={ref => this.bottleAverage = ref}
                    />
                    <label htmlFor="bottleAverage">
                        <img src={BottleAverage} />
                    </label>
                    <input className="type-bottle-input"
                        type="radio"
                        id="bottleSmall"
                        name="bottles"
                        value="0,5"
                        onChange={this.handleChange}
                        ref={ref => this.bottleSmall = ref}
                    />
                    <label htmlFor="bottleSmall">
                        <img src={BottleSmall} />
                    </label>
                </form>
        );
    }
}

export default SelectBottles