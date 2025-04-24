import css from './Options.module.css'
export default function Options({ onClickVote, onResetBtn }) {
    return <div className={css.container}>
        <button className={css.good} type="button" onClick ={ () => {onClickVote ('good')}}>Good</button> 
        <button className={css.neutral} type="button" onClick ={ () => {onClickVote ('neutral')}}>Neutral</button>     
        <button className={css.bad} type="button" onClick ={ () => {onClickVote ('bad')}}>Bad</button>       
        <button className={css.reset} type="button" onClick={ onResetBtn }>Reset</button>        
    </div>
}