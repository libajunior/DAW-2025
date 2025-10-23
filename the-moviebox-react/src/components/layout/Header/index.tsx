import './style.css';

export function Header() {
    return (
        <header>
            <div className="container">
                <h1><span>THE</span>MOVIEBOX</h1>
                <div className="actions">
                    <a className="btn-auth" href="#">Entrar</a>
                    <a className="btn-auth btn-signup" href="#">Registrar</a>
                </div>
            </div>
        </header>
    )
}