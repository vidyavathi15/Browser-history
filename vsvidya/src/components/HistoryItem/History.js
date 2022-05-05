import './History.css'

const History = props => {
  const {historyDetails, deleteHistory} = props

  const {id, title, domainUrl, logoUrl, timeAccessed} = historyDetails
 
  const onClickDeleteBtn = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <div className="domain-and-icon-container">
        <div className="domain-container">
          <p className="time">{timeAccessed}</p>
          <div className="logo-container">
            <img src={logoUrl} alt="logoUrl" className="logos-each-image" />
            <h1 className="title">{title}</h1>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDeleteBtn}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default History