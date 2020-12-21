import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Form.module.scss'

const Form = () => {
    const info = useSelector(state => state.buildingReducer)
    console.log(info)
    return (
        <div className={styles.Form}>
            <div className={styles.Form__title}>{info[0].questionTitle}</div>
            <ul className={styles.Form__content}>
                <li className={styles.Form__content_item}>{info[0].questions[0].question}</li>
                <li className={styles.Form__content_item}>{info[0].questions[1].question}</li>
            </ul>
        </div>
    )
}

export default Form