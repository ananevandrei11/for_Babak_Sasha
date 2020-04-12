import React, { Component } from "react";
import InputMask from "react-input-mask";

class Contact extends React.Component {
    // Значения полей ввода
    constructor(props) {
        super(props);
        this.state = {
            fullName: {
                value: '',
                type: 'text',
                name: 'fullName',
            },
            phone: {
                value: '',
                type: 'tel',
                name: 'phone',
            },
            email: {
                value: '',
                type: 'email',
                name: 'email',
            },
            address: {
                value: '',
                type: 'text',
                name: 'address',
            },
            accept: {
                value: '',
                type: 'checkbox',
                name: 'accept',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }
    // Ввод данных
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    
    handleSubmit(event) {
        // Отправка данных на результирующую страницу
        let addressInput = this.addressInput.value;
        document.getElementById("resultAdrress").innerHTML = addressInput;
        let phoneInput = this.phoneInput.value;
        document.getElementById("resultPhone").innerHTML = phoneInput;
        event.preventDefault();
        /* Переход на страницу выбора продукта (можно раскомментировать для отображения только одного блока на странице)
        let contact = document.getElementById("contact");
        contact.style.display = 'none';
        let select = document.getElementById("select");
        select.style.display = 'flex';
        
        Требуется добавить style={{display: "none"}} */

        window.location.href = "#select";
    }
    // Присвоение аттрибута checked 
    handleChecked() {
        let acceptInput = document.getElementById("acceptInput");
        if (!acceptInput.hasAttribute("checked")) {
            acceptInput.setAttribute("checked", "checked");
        } else {
            acceptInput.removeAttribute("checked", "checked");
        }
    }

    render() {
        const contactTitle = "Заполните данные";
        return (
            <section className="contact" id="contact">
                <h2 className="contact-title">{contactTitle}</h2>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <input
                        className="contact-input"
                        id="fullNameInput"
                        type={this.state.fullName.type}
                        value={this.state.fullName.value}
                        name={this.state.fullName.name}
                        pattern="^[А-Яа-яЁё\s]+$"
                        placeholder="ФИО"
                        required
                        maxLength="30"
                        minLength="2"
                        onChange={this.handleChange}
                    />
                    <br />
                    <InputMask
                        {...this.props}
                        mask="+7 (999) 999 99 99"
                        maskChar=" "
                        className="contact-input"
                        id="phoneInput"
                        type={this.state.phone.type}
                        value={this.state.phone.value}
                        name={this.state.phone.name}
                        placeholder="Телефон"
                        required
                        onChange={this.handleChange}
                        ref={ref => this.phoneInput = ref}
                    />
                    <br />
                    <input
                        className="contact-input"
                        id="emailInput"
                        type={this.state.email.type}
                        value={this.state.email.value}
                        name={this.state.email.name}
                        pattern="[^@\s]+@[^@\s]+"
                        placeholder="voda@mail.ru"
                        required
                        maxLength="20"
                        minLength="6"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        className="contact-input"
                        id="addressInput"
                        type={this.state.address.type}
                        value={this.state.address.value}
                        name={this.state.address.name}
                        placeholder="Адрес доставки"
                        required
                        maxLength="50"
                        minLength="10"
                        onChange={this.handleChange}
                        ref={ref => this.addressInput = ref}
                    />
                    <br />
                    <p className="contact-input--checkbox"  >
                    <input
                        type={this.state.accept.type}
                        name={this.state.accept.name}
                        id="acceptInput"
                        required
                        onClick={(e) => this.handleChecked(e)}
                    />
                    <label
                    htmlFor="acceptInput"
                    className="material-icons"
                    >
                    <span>Я согласен на <a href="">обработку персональных<wbr />данных</a></span>
                    </label>
                    </p>
                    <button className="contact-button">Далее</button>
                </form>
            </section>
        );
    }
}

export default Contact;