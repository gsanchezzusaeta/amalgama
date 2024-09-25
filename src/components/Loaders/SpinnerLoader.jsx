import './SpinnerLoader.css'

export default function SpinnerLoader({ login }) {
    return (
        <>
            <div className='loader-container'>
                {login ? <span className="loader login"></span>
                    : <span className="loader screen"></span>}
            </div>
        </>
    )
}