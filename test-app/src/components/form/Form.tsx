import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import data from "../../store/formClass";
import './form.scss';

export const Form: FC = observer(() => {
    return (
        <div className='forms'>
            <div className="form__content">
                <div className='name__field'>
                    <input type="text" placeholder='Имя...' value={data.name}
                           onChange={(e) => data.onChangeName(data.name = e.target.value)}/>
                    <label className='error'>{data.emptyName && data.nameError}</label>
                </div>
                <div className='surname__field'>
                    <input type="text" placeholder='Фамилия...' value={data.surname}
                           onChange={(e) => data.onChangeSurName(data.surname = e.target.value)}/>
                    <label className='error'>{data.emptySurname && data.surnameError}</label>
                </div>
            </div>
            <button className="btn__form" onClick={() => data.onShow()}>Готово</button>
        </div>
    )
});

