import './jumbotron.css'
import Card from './Card'

function Jumbotron() {
    return(
        <div className='Jumbotron'>
            <div className='Jumbotron-big-text'>
                Plan who, where and how to Vote in Local, State, County, City and National Elections
            </div>
            <button className='Jumbotron-button'>
                Create a Plan
            </button>
            <div className='Jumbotron-cards'>
                <Card heading='Select Polling Places' body='Including early polling sites and absentee drop box locations for a given residential street address'/> 
                <Card heading='Contest and Candidate Information' body="Contests that will appear on the voter's ballot"/>
                <Card heading='Election Official Information' body="Including early polling sites for a given residential street address"/>
            </div>
        </div>
    )

}

export default Jumbotron