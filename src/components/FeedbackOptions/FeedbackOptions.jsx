import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';



export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
        return (
            <ul className={css.btnList}>
                {options.map(option => {
                    return (
                        <li key={option}>
                            <button
                                className={css.btn}
                                type="button"
                                onClick={() => onLeaveFeedback(option)}
                                
                            > {option}</button>
                        </li>
                    )
                })
                }
            </ul>
        )
    }
    



    FeedbackOptions.types = {
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      onLeaveFeedback: PropTypes.func.isRequired,
    };
