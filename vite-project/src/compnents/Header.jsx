import { Logo } from "../assets/imagens"
import "../stylo/style.css"

export default function Header() {

    return (
        <header>
            {Logo.map((logo) => (
                <div key={logo.id} className="cabeçalho">
                    <img src={logo.imgurl} alt="" className="imagemlogo"/>
                    <h1 className="titulo">{logo.name}</h1>
                </div>
            ))}
            
           
            
        </header>
    )
}