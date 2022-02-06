import Button from '../components/Button';

import '../styles/Home.scss';

export default function Home() {
    return (
        <main>
            <div className='title-container'>
                <h1>Rotina</h1>
            </div>
            <div className='login-container'>
                <Button/>
            </div>
        </main>
    );
}