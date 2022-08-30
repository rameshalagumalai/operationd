export default function Option({ text, index }){
    return (
        <div className="ms-3">
            <input type='radio' name={'answer'+index} values={'question'+index} />
            <label>{" " + text}</label> 
        </div>
    );
}