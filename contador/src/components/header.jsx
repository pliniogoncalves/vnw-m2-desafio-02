import Logo from "../assets/logo.png"

export default function Header(){
    return(
        <>
            <header>
                <figure>
                    <a href="#">
                        <img src={Logo} alt="logo do site" />
                    </a>
                <h1>
                PLACAR
                </h1>
        </figure>
            </header>
        </>
    )
}