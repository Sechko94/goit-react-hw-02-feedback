import css from './FeedbackOptions.css'
    ;



export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
        return (
            <ul className={css.btnList}>
                {options.map(option => {
                    return (
                        <li key={option}>
                            <button
                                className={css.btn}
                                type="button"
                                onClick={onLeaveFeedback}
                                
                            > {option}</button>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
    
