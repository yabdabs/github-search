import React, { Component } from 'react';
import { connect } from 'react-redux'

import SearchUser from './SearchUser'
import Badge from './Badge'

import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {

  render() {

	const { userFound, badgeInfo } = this.props

    return (

		<div className="App">

			<div className='searchContainer'>
				<h1>Github Search</h1>

				<SearchUser />
			</div>

			{ userFound && 
				<Badge 
					badgeInfo={ badgeInfo } 
				/> 
			}

		</div>

    );

  }

}

const mapStateToProps = (state) => {

	const { avatar_url, name, followers, following } = state.Search.userData

	const badgeInfo = { avatar_url, name, followers, following }

	return {
		userFound: state.Search.userFound,
		badgeInfo
	}
}

export default connect(mapStateToProps, null)(App);
