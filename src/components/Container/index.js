import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form'
import styles from './Container.module.scss'

const Container = () => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.buildingReducer)
    const backHandler = () => {}
    const nextHandler = () => {
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Container__title}>Калькулятор цены конструкций</div>
            <div className={styles.Container__step}>{info[0].step}</div>
            <Form />
            <div className={styles.Container__wrapper}>
                <button className={styles.Container__button}>Назад</button>
                <button className={styles.Container__button} onClick={nextHandler}>Вперёд</button>
            </div>
        </div>
    )
}

export default Container