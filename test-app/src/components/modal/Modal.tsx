import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import data from "../../store/formClass";
import './modal.scss';

export const Modal: FC = observer(() => {
    return (
        <div className={data.activeModal ? 'modal active' : 'modal'}>
            <div className="modal__content">
                <h3>{'Здравствуйте, ' + (data.name + ' ' + data.surname).toUpperCase()}</h3>
                <button className='btn__modal' onClick={() => data.setActiveModal()}>Закрыть</button>
            </div>
        </div>
    )
});