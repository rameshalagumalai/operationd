import { useState } from "react";
import Question from "./Question";
import questions from "./questions";
import SubmitModal from "./SubmitModal";

export default function Test(){

    const [questionNo, setQuestionNo] = useState(0);
    const [testQuestions] = useState(questions);

    return (
        <div className="row p-5">
            <h2 className="text-bold">Ford Assessment</h2>
            <div className="col-lg-12">
                <SubmitModal />
                <Question question={testQuestions[questionNo].question} options={testQuestions[questionNo].options} index={questionNo} />
                <div className="d-flex">
                    {questionNo > 0 && <button onClick={()=>setQuestionNo(questionNo-1)} className="btn btn-secondary">Previous</button>}
                    {questionNo < 9 ? <button onClick={()=>setQuestionNo(questionNo+1)} className="btn btn-primary ms-auto">Next</button> : 
                    <button className="btn btn-success ms-auto" data-bs-toggle="modal" data-bs-target="#newTaskModal">Submit Test</button>
                    }
                </div>
            </div>
        </div>
    );
}