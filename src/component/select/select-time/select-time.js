import React, { Component } from "react";

class SelectTime extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickDay = this.handleClickDay.bind(this);
        this.handleClickTime = this.handleClickTime.bind(this);
    }
    // Выбор дня
    handleClickDay() {
        let selectDate = document.getElementById("selectDate");
        let selectedDay;
        selectDate.addEventListener('click', function (event) {
            let target = event.target;
            while (target != this) {
                if (target.className == 'select-date-day') {
                    checked(target);
                    return;
                }
                target = target.parentNode;
            }
        })

        function checked(node) {
            if (selectedDay) {
                selectedDay.classList.remove('checked-date');
            }
            selectedDay = node;
            selectedDay.classList.add('checked-date');
        }

        let selectDateDay = selectDate.getElementsByClassName("checked-date");
        for(let i=0; i<selectDateDay.length; i++) {
            let dateDayNumber = selectDateDay[i].getElementsByTagName("p")[1];
            let valueDateDayNumber = dateDayNumber.innerHTML;
            
            let selectTime = document.getElementById("selectTime");
            let selectTimePart = selectTime.getElementsByClassName("select-time-part")[0];
            if (valueDateDayNumber == "сб" || valueDateDayNumber == "вс") {
                selectTimePart.style.display = 'none';
                selectTime.style.justifyContent = "left";
            } else {
                selectTimePart.style.display = 'flex';
                selectTime.style.justifyContent = "space-between";
            }
        }
    }
    // Выбор времени
    handleClickTime() {
        let selectDate = document.getElementById("selectTime");
        let selectedTime;
        selectDate.addEventListener('click', function (event) {
            let target = event.target;
            while (target != this) {
                if (target.className == 'select-time-part') {
                    checked(target);
                    return;
                }
                target = target.parentNode;
            }
        })

        function checked(node) {
            if (selectedTime) {
                selectedTime.classList.remove('checked-time');
            }
            selectedTime = node;
            selectedTime.classList.add('checked-time');
        }
    }

    render() {
        return (
            <div className="select-form--datetime">
                <h2 className="select-title select-title--datetime">Дата и время доставки</h2>
                <h3 className="select-subtitle">День</h3>
                <div className="select-date" onClick={this.handleClickDay} id="selectDate">
                    <p className="select-date-day">
                        <p>10</p>
                        <p>пн</p>
                    </p>
                    <p className="select-date-day">
                        <p>11</p>
                        <p>вт</p>
                    </p>
                    <p className="select-date-day">
                        <p>12</p>
                        <p>ср</p>
                    </p>
                    <p className="select-date-day">
                        <p>13</p>
                        <p>чт</p>
                    </p>
                    <p className="select-date-day">
                        <p>14</p>
                        <p>пт</p>
                    </p>
                    <p className="select-date-day">
                        <p>15</p>
                        <p>сб</p>
                    </p>
                    <p className="select-date-day">
                        <p>16</p>
                        <p>вс</p>
                    </p>
                    <p className="select-date-day">
                        <p>17</p>
                        <p>пн</p>
                    </p>
                </div>
                <h3 className="select-subtitle">Время</h3>
                <div className="select-time" id="selectTime" onClick={this.handleClickTime}>
                    <p className="select-time-part">
                        <span>10:00 - 11:00</span>
                    </p>
                    <p className="select-time-part">
                    <span>12:00 - 13:00</span>
                    </p>
                    <p className="select-time-part">
                    <span>15:00 - 16:00</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default SelectTime