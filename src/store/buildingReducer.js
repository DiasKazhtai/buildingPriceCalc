const defaultState = [
    {
        step: 'Шаг 1',
        questions: [
            {
                question: 'Жилой дом',
                id: 1,
            },
            {
                question: 'Гараж',
                id: 2,
            }
        ],
        questionTitle: 'Что будем строить ?',
        answer: ['']
    },
    {
        step: 'Шаг 2',
        questionTitle: 'Количество этажей число',
        questions: [
            {
                question: '',
                id: 1,
            },
        ],
        answer: ['']
    },
    {
        step: 'Шаг 3',
        questions: [
            {
                question: 'Кирпич',
                id: 1,
            },
            {
                question: 'Шлакоблок',
                id: 2,
            },
            {
                question: 'Деревянный брус',
                id: 2,
            }
        ],
        questionTitle: 'Материал стен',
        answer: ['']
    },
    {
        step: 'Шаг 4',
        questionTitle: 'Длина стен (в метрах)',
        questions: [
            {
                question: 0,
                id: 1,
            },
            {
                question: 0,
                id: 2,
            },

        ],
        answer: ['']
    },
]

const buildingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ANSWER':
            console.log(action)
        default:
            return state
    }
}

export default buildingReducer