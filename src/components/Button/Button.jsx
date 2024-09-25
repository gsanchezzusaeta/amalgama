import './Button.css'

function Button({ text, pendingState, onClick, classes, loader, hasLoader, type='button'}) {

    return (
        <>
            {
                hasLoader ? 
                    <button 
                        type={type}
                        className={`primary-btn ${classes}`} 
                        disabled={pendingState} 
                        onClick={onClick} 
                    > 
                        {pendingState ? loader : text}
                    </button > : 
                    <button 
                        type={type}
                        className={`primary-btn ${classes}`} 
                        onClick={onClick} 
                    > 
                        {text}
                    </button >
            }
        </>
    );
}
export default Button;
