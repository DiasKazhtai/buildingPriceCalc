import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Form.module.scss'

const Form = () => {
    const info = useSelector(state => state.buildingReducer)
    const dispatch = useDispatch()

    const itemHandler = (event, index) => {
        console.log('index', index)
        dispatch({
            type: 'ANSWER',
            payload: {
                name: event.target,
            }
        })
    }
    return (
        <div className={styles.Form}>
            <div className={styles.Form__title}>{info[0].questionTitle}</div>
            <ul className={styles.Form__content} >
                {info[0].questions.map((elem, index) => {
                    return (
                        <li className={styles.Form__content_item} onClick={itemHandler(index)}>{info[0].questions[index].question}</li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Form