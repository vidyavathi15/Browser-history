import React from "react";
import History from "./components/HistoryItem/History";

// const App = () => <HistoryItem/>
// export default App;

import {Component} from 'react'


import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
    isEmptyHistoryView: false,
  }

  callingEmptyView = filteredData => {
    this.setState({historyList: filteredData, isEmptyHistoryView: true})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderEmptyHistoryView = () => {
    const {isEmptyHistoryView} = this.state

    if (isEmptyHistoryView) {
      return <p className="empty-view-txt">There is no history to show</p>
    }
    return null
  }

  getSearchResults = () => {
    const {historyList, searchInput} = this.state
    const searchResults = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (searchResults === undefined) {
      return this.callingEmptyView()
    }

    return searchResults

  }



  deleteHistory = id => {
    const {historyList} = this.state

    const filteredData = historyList.filter(each => each.id !== id)

    if (filteredData.length === 0) {
        
      return this.callingEmptyView(filteredData)
    }

    this.setState({historyList: filteredData})
  }

  renderSearchResultsView = () => {
      
      const searchResults = this.getSearchResults()
      console.log(searchResults)

    
    return (
      <ul className="history-list">
        {searchResults.map(eachHistory => (
          <History
            key= {eachHistory.id}
            historyDetails={eachHistory}
            deleteHistory={this.deleteHistory}
          />
        ))}
      </ul>
    )
        }


  render() {
    const {searchInput, isEmptyHistoryView} = this.state

    return (
      <div className="app-container">
        <nav className="nav-bar">
          <div className="logo-and-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo-image"
            />
            <div className="search-input-container">
              <div className="search-back-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>

              <input
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
        </nav>
        <div className="history-body">
          {isEmptyHistoryView
            ? this.renderEmptyHistoryView()
            : this.renderSearchResultsView()}
        </div>
      </div>
    )
  }
}

export default App