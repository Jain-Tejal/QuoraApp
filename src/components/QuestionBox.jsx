import React from 'react'
import { FcButtingIn } from "react-icons/fc";
import { GoPencil } from "react-icons/go";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import '../styles/QuestionBox.css'

function QuestionBox() {
    return (
        <section className='QuestionBoxContainer'>
            <div className='qus-box'>
                <FcButtingIn className='profile-icon-qus-box' />
                <button className='qus-btn'>What do you want to ask or share?</button>
            </div>
            <div className='btn-box'>
                <button className='ask-btn'><RiQuestionnaireLine className='btn-box-icon' /> Ask</button>
                <hr />
                <button className='ans-btn'><FiEdit className='btn-box-icon' /> Answer</button>
                <hr />
                <button className='post-btn'><GoPencil className='btn-box-icon' /> Post</button>
            </div>
        </section>
    )
}

export default QuestionBox