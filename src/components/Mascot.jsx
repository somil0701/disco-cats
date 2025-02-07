import './Mascot.css'

const Mascot = () => {
    return (
        <div className="mascot-panel">
            <img src="../assets/cat-mascot-ears.svg" alt="left-ear" className="left-mascot-cat-ear" />
            <img src="../assets/cat-mascot.svg" alt="mascot" className="mascot" />
            <img src="../assets/cat-mascot-ears.svg" alt="right-ear" className="right-mascot-cat-ear" />
        </div>
    )
}

export default Mascot;