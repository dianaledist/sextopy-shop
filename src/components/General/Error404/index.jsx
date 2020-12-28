import error404 from '../../../assets/images/error404.png';

const Error404 = () => {
    return (
        <div className="text-center container pt-5 pb-5">
            <h2 className="Shrikhand">Error 404</h2>
            <p className="Bellota-text">Estás buscando algo que no existe</p>
            <div ><img src={error404} alt="imagen error 404" className="w-50"/></div>
            
        </div>
    )
}

export default Error404;