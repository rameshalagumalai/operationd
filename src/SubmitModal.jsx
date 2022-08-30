import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitModal() {

    const [end, setEnd] = useState('');
    const navigate = useNavigate();

    function submit(){
        if(end === 'END'){
            navigate('/complete');
        }
    }

    return (
        <div
            class="modal fade"
            id="newTaskModal"
            tabindex="1"
            aria-labelledby="newTaskModal"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <form class="modal-content">
                    <div className="modal-header mt-0">
                        <h3 className="mt-0 mb-0 text-bold">Submit test</h3>
                    </div>
                    <div class="modal-body mt-0">
                        <p>You are about to submit the test, type END and click Complete test</p>
                        <input type="text" onChange={e=>setEnd(e.target.value)} value={end} className="form-control mt-0" placeholder="END" required />
                    </div>
                    <div class="modal-footer mt-0">
                    <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={submit} type="button" class="btn btn-success">Complete test</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
