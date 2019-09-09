import React from 'react'
import ActivityItem from '../UI/activity/ActivityItem'
import Container from './../Hoc/Container'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class ActivityActivity extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			activites: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const activites = await getData(URL.ACTIVITY_ACTIVITY)
		this.setState({
			activites: activites.activites,
			loading: false
		})
	}

	render() {
		return (
			this.state.loading ? <Indicator /> :
				<Container>
					{
						this.state.activites.map((value, index) => (
							<ActivityItem 
								key={index}
								content={value.contenu}
								date={value.dateActivite}
								visual={value.photo} />
						))
					}
				</Container>
		)
	}
}


export default ActivityActivity