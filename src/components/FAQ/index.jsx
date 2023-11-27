import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";

const FAQ = ( { question, answer } ) => {

    const [isAnswerShowing, setIsAnswerShowing] = useState( false );

    return (
        <article className='faq' onClick={() => setIsAnswerShowing(!isAnswerShowing)}>
            <div>
                <h4>{question}</h4>
                <button className='faq__icon'>
                    {
                        isAnswerShowing ? <FaMinus /> : <FaPlus />
                    }
                </button>
            </div>

            {
                isAnswerShowing && <p>{answer}</p>
            }
        </article>
    );
};

export default FAQ;