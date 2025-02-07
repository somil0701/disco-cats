import "./VotingPanel.css"
import Card from "./Card.jsx"
import LowerCard from "./LowerCard.jsx"

const VotingPanel = () => {
    return (
        <div className="voting-panel">
            <div className="voting-bar">
                <div className="voting-logo"><p>VOTING</p></div>
                <div className="voting-buttons">
                    <div className="voting-button">
                        <img src="../assets/token.svg" alt="token" />
                        <p>Token</p>
                    </div>
                    <div className="voting-button">
                        <img src="../assets/nfts.svg" alt="nfts" />
                        <p>NFTs</p>
                    </div>
                    <div className="voting-button">
                        <img src="../assets/points.svg" alt="points" />
                        <p>Points</p>
                    </div>
                    <div className="manual-button">Manual</div>
                </div>
            </div>
            <div className="cards-section">
                <div className="upper-cards-section">
                    <Card name = 'Beradrome' lending = '12%' emissions = '4%' bribes = '2%' total = '18%' />
                    <Card name = 'Summer Money' lending = '9%' emissions = '2%' bribes = '3%' total = '14%' />
                    <Card name = 'BeraBorrow' lending = '14%' emissions = '5%' bribes = '2%' total = '21%' />
                </div>
                <div className="lower-cards-section">
                    <LowerCard name = "Beradrome" image = "../assets/cat-1.svg" token = "20,000" nfts = "15" price = "3x"/>
                    <LowerCard name = "Summer.Money" image = "../assets/cat-2.svg" token = "12,000" nfts = "5" price = "1.5x"/>
                    <LowerCard name = "BeraBorrow" image = "../assets/cat-3.svg" token = "30,000" nfts = "25" price = "NA"/>
                </div>
            </div>
        </div>
    )
}

export default VotingPanel;