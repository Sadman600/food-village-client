import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div>
            <Question1></Question1>
            <Question2></Question2>
        </div>
    );
};

function Question1() {
    return (
        <div>
            <h1>Q: Props VS State</h1>
            <div className='provssta'>
                <div>
                    <h4>props</h4>
                    <ul className="b">
                        <li>Props are read only.</li>
                        <li>Props can't be modified.</li>
                    </ul>
                </div>
                <div>
                    <h4>State</h4>
                    <ul className="b">
                        <li>State Changes can be asynchronous.</li>
                        <li>State can be modified using this state.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
function Question2() {
    return (
        <div>
            <h1>Q: Props VS State</h1>
            <div className='provssta'>
                <div>

                    <ul className="b">
                        <li>state asynchronous ভাবে update হয়।</li>
                        <li>যখন স্টেট অবজেক্ট পরিবর্তিত হয়, কম্পোনেন্ট রি-রেন্ডার হয়।</li>
                        <li>স্টেট  কম্পোনেন্টের অন্তর্গত Property এর  মান সঞ্চয় করে।</li>
                        <li>যখন  setState() কল করা হয়  তখন  React আমাদের দেয়া অবজেক্ট কে বর্তমান state এর সাথে একীভূত করে।</li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}



export default Question;