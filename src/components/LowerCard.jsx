import './LowerCard.css'

const LowerCard = ({name, image, token, nfts, price}) => {
    return (
        <div className="lower-card">
            <div className="lower-card-title">{name}</div>
            <img src={image} alt="lower-cat" className="lower-card-image" />
            <div className="lower-card-stats">
                <div className="lower-card-stat">
                    <img src="../assets/token.svg" alt="token" className="lower-card-stat-image" />
                    <p className="lower-card-stat-text">${token}</p>
                </div>
                <div className="lower-card-stat">
                    <img src="../assets/nfts.svg" alt="nfts" className="lower-card-stat-image" />
                    <p className="lower-card-stat-text">{nfts}</p>
                </div>
                <div className="lower-card-stat">
                    <img src="../assets/points.svg" alt="points" className="lower-card-stat-image" />
                    <p className="lower-card-stat-text">{price}</p>
                </div>
            </div>
            <div className="lower-card-button">VOTE</div>
        </div>
    )
}

export default LowerCard;