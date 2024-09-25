import SpinnerLoader from '../Loaders/SpinnerLoader'
import './LoadingScreen.css'

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <SpinnerLoader/>
        </div>
        )
}