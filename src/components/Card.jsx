import './Card.css'

const Card = ({name, lending, emissions, bribes, total}) => {
    return (
        <div className="card-wrapper">
            <div className="bookmark">
                <img src="../assets/bookmark.svg" alt="bookmark" className="bookmark-image" />
            </div>
            <div className='card'>
                <img src="../assets/card-image.svg" alt="card-image" className="card-image" />
                <p className="card-title">{name}</p>
                <div className="card-links">
                    <a href='#' className="card-link">
                        <img src="../assets/internet.svg" alt="internet" />
                    </a>
                    <a href='#' className="card-link">
                        <img src="../assets/twitter.svg" alt="twitter" />
                    </a>
                    <a href='#' className="card-link">
                        <img src="../assets/telegram.svg" alt="telegram" />
                    </a>
                    <a href='#' className="card-link">
                        <img src="../assets/discord.svg" alt="discord" />
                    </a>
                </div>
                <div className="card-stats">
                    <div className="card-stat"><span className="left">Lending: </span><span className="right">{lending}</span></div>
                    <div className="card-stat"><span className="left">Emissions: </span><span className="right">{emissions}</span></div>
                    <div className="card-stat"><span className="left">Bribes: </span><span className="right">{bribes}</span></div>
                </div>
                <button className="card-button"><span className="left">Total: </span><span className="right">{total}</span></button>
            </div>
            <div className="hot-air-balloon">
                <img src="../assets/hot-air-balloon.svg" alt="hot-air-balloon" className="hot-air-balloon-image" />
            </div>
        </div>
    )
}

export default Card;