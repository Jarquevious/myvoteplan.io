import './jumbotron.css'
import ContainedButtons from '../create_plan_button/create_plan_button';



function Jumbotron() {
    return(
        <div className='Jumbotron'>
            <section className='Jumbotron-big-text'>
                <p>
                    Plan <b>who</b>, <b>where</b> and <b>how</b> to Vote in Local, State, County, City and National Elections
                </p>
            </section>
            {/* <button className='Jumbotron-button'>
                Create a Plan
            </button> */}
            <ContainedButtons />
         </div>
    )
}

export default Jumbotron