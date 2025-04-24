import css from "./Feedback.module.css"
export default function Feedback({ valueGood, valueNeutral, valueBad, totalValue, positiveCount }) {
    return <div className={css.feedbackBox}>
        <p>Good: {valueGood}</p>
        <p>Neutral: {valueNeutral}</p>
        <p>Bad: {valueBad}</p> 
        <p>Total: {totalValue}</p>
        <p>Positive: {positiveCount}%</p>
    </div>
}