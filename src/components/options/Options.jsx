export default function Options({ onClickVote, onResetBtn }) {
    return <>
        <button type="button" onClick ={ () => {onClickVote ('good')}}>Good</button> 
        <button type="button" onClick ={ () => {onClickVote ('neutral')}}>Neutral</button>     
        <button type="button" onClick ={ () => {onClickVote ('bad')}}>Bad</button>       
        <button type="button" onClick={ onResetBtn }>Recet</button>        
    </>
}