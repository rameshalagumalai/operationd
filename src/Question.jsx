import Option from "./Option";

export default function Question({ question, options, index }){
    return (
        <div className="question p-3 mb-3">
            <h5 className="text-bold">{question}</h5>
            {options.map(option => <Option text={option} index={index} />)}
        </div>
    );
}