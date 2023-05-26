import { pagamentos } from "../assets/pagamentos";
import '../stylo/style.css'

export default function Footer() {
    return (
        <footer className="pagamentorodape">
            <div className="pagamentotitulo">
                <div className="div-payment">
                    <span className="div-pagamento">Metodo de Pagamento:</span>
                    
                    {pagamentos.map((item) => (
                        
                        <img className="img-payment" key={item.url} src={item.url} alt={item.alt}/>
                    ))}
                </div>
            </div>
        </footer>
    )
}