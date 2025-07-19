import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { details } = useParams()
    return (
        <div>
            <h2>Details</h2>
            <dialog id="my_modal_2" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div id="details-container">
                        {/* <!-- Pet Details here--> */}
                        </div>

                    <div class="modal-action">
                        <form method="dialog" class="inline-block w-full">
                            {/* <!-- if there is a button in form, it will close the modal --> */}
                            <button class="btn w-full border border-teal-700">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ProjectDetails;