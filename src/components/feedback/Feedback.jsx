export default function Feedback({valueGood, valueNeutral, valueBad, totalValue, positiveCount} ) {
    return <>
        <p>good: {valueGood}</p>
        <p>neutral: {valueNeutral}</p>
        <p>bad: {valueBad}</p> 
        <p>Total: {totalValue}</p>
        <p>Positive: {positiveCount}</p>
    </>
}