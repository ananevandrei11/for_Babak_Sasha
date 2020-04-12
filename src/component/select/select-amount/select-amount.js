import React, { Component } from "react";
// import SelectTime from "../select-time/select-time";

class SelectAmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
         this.handleClickPlus = this.handleClickPlus.bind(this);
         this.handleClickMinus = this.handleClickMinus.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

     handleChange(event) {}
     
    // Увеличение количества бутылок
    handleClickPlus() {
        if (this.state.count < 12) {
            this.setState({ count: this.state.count + 1 });
        }
        // Вывод стоимости количества бутылок при увеличении
        let typeBottles = document.getElementById("typeBottles");
        let countBottle = document.getElementById("amountBottle");
        let valueUp = Number(countBottle.value)+1;
            for (let i = 0; i < typeBottles.length; i++) {
                let elements = typeBottles[i];
                if (elements.checked) {
                    let checkedElements = elements.value;
                    let totalCostBottles = document.getElementById("totalCostBottles");
                    if (valueUp < 13) {
                        if (checkedElements == "18,9") {
                            totalCostBottles.innerHTML = (valueUp * 220).toFixed(2) + " ₽";
                        } else if (checkedElements == "1,5") {
                            totalCostBottles.innerHTML = (valueUp * 175).toFixed(2) + " ₽";
                        } else if (checkedElements == "0,5") {
                            totalCostBottles.innerHTML = (valueUp * 270).toFixed(2) + " ₽";
                        }
                    }
                }
            }
    }
    // Уменьшение количества бутылок
    handleClickMinus() {
        if (this.state.count > 0) {
             this.setState({ count: this.state.count - 1 });
         }
         // Вывод стоимости количества бутылок при уменьшении
        let typeBottles = document.getElementById("typeBottles");
        let countBottle = document.getElementById("amountBottle");
        let valueDown = Number(countBottle.value)-1;
            for (let i = 0; i < typeBottles.length; i++) {
                let elements = typeBottles[i];
                if (elements.checked) {
                    let checkedElements = elements.value;
                    let totalCostBottles = document.getElementById("totalCostBottles");
                    if (valueDown >= 0) {
                        if (checkedElements == "18,9") {
                            totalCostBottles.innerHTML = (valueDown * 220).toFixed(2) + " ₽";
                        } else if (checkedElements == "1,5") {
                            totalCostBottles.innerHTML = (valueDown * 175).toFixed(2) + " ₽";
                        } else if (checkedElements == "0,5") {
                            totalCostBottles.innerHTML = (valueDown * 270).toFixed(2) + " ₽";
                        }
                    }
                }
            }
    }

    render() {
        return (
            <div className="select-form--amounts">
                <form className="select-form--amounts__bottles" name="amount-bottles" id="amount-bottles">
                    <span className="minus" onClick={this.handleClickMinus}>-</span>
                    <input
                        type="text"
                        value={this.state.count}
                        name="amountBottle"
                        id="amountBottle"
                        onChange={this.handleChange}
                    />
                    <span className="plus" onClick={this.handleClickPlus}>+</span>
                </form>
                {/* <hr />
                <SelectTime />
                <hr /> */}
                <div className="select-total">
                    <h2 className="select-title">Итого</h2>
                    <p id="totalCostBottles">0<span>&nbsp;₽</span></p>
                </div>
            </div>
        )
    }
}

export default SelectAmount
