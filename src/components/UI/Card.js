import "../Components_css/Card.css";


const Card = (props) => {
    //appends the 'card' className to the 'expense-item' className in the card <div> in expenseitem.js
    const classes = 'card ' + props.className;

    //Applies the 'classes' variable conataining styling for both card and children of card.
     return <div className={classes}>{props.children}</div>
}

export default Card;