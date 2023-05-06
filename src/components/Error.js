import './Error.css';

const Error = () => {
    return (
        <section className='error-section'>
            <div className='error-section__popup'>
                <h1>Error! :(</h1>
                <h2>The following error has occurred:</h2>
                <button className='backBtn'>
                    <img src='/img/backArrow.png' alt='back' className='back'/>
                </button>
            </div>
        </section>
    );
}

export default Error;