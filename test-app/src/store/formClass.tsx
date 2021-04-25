import {makeAutoObservable} from "mobx";

interface FormState {
    name: string;
    surname: string;
    nameError: string;
    surnameError: string;
    emptyName: boolean;
    emptySurname: boolean;
    activeModal: boolean;
}

class formClass implements FormState {
    name = '';
    surname = '';
    nameError = 'the name cannot be empty';
    surnameError = 'the surname cannot be empty';
    emptyName = false;
    emptySurname = false;
    activeModal = false;


    constructor() {
        makeAutoObservable(this)
    }

    onChangeName(s: string) {
        if (this.name) {
            this.emptyName = false;
        }
    }

    onChangeSurName(s: string) {
        if (this.surname) {
            this.emptySurname = false;
        }
    }

    isEmptyName() {
        this.emptyName = true
    }

    isEmptySurname() {
        this.emptySurname = true
    }

    emptyFields() {
        this.surname = '';
        this.name = '';
    }

    setActiveModal() {
        this.activeModal = false;
        this.emptyFields();
        this.emptyName = false;
        this.emptySurname = false;
    }

    onShow() {
        if (!this.name) {
            this.isEmptyName()
        }
        if (!this.surname) {
            this.isEmptySurname()
        } else {
            if (this.name && this.surname) {
                this.activeModal = true;
            }
        }
    }
}

export default new formClass();