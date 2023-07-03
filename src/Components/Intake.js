import React, {useState} from 'react'

function Intake () {

    const [name, setName] = useState('')
    const [date1, setDate1] = useState('')
    const [date2, setDate2] = useState('')
    const [date3, setDate3] = useState('')
    const [contact, setContact] = useState('')
    const [notes, setNotes] = useState('')

    const submitIntake = (e) => {
        e.preventDefault()
        const intakeSummary = {
            name,
            'availability': {date1, date2, date3},
            contact,
            notes
        }
        console.log(intakeSummary)
    }

    return (
        <div id='intake'>
            <h2>Get Valid8ed</h2>
            <form id='intake_form'>

                <label>Your name (optional)
                    <br></br>
                    <input 
                        type="text" 
                        placeholder='what should we call you?'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <br></br>

                <label className='intake_form_dates'>A few dates+times that work for you
                    <input 
                        type="text" 
                        placeholder='best date and time for you'
                        value={date1}
                        onChange={e => setDate1(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='lets choose another'
                        value={date2}
                        onChange={e => setDate2(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='and just in case'
                        value={date3}
                        onChange={e => setDate3(e.target.value)}
                    />
                </label>
                <br></br>

                <label>How to get in contact with you
                    <br></br>
                    <input 
                        type="text" 
                        placeholder='phone, email, etc.'
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                    />
                </label>
                <br></br>

                <label>Notes 
                    <br></br>
                    <input 
                        type="text" 
                        placeholder='anything you would like us to know?'
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                </label>
                <br></br>

                <button 
                    onClick={submitIntake}
                    className='submit_button'
                >Valideat me, bich (submit)</button>
            </form>
        </div>
    )
}

export default Intake