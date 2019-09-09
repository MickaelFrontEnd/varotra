import React from 'react'
import ActivityItem from '../UI/activity/ActivityItem'
import Container from './../Hoc/Container'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class NotificationActivity extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			notifications: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const notifications = await getData(URL.NOTIFICATION_NOTIFICATION)
		this.setState({
			notifications: notifications.notifications,
			loading: false
		})
	}

	render() {
		return (
			this.state.loading ? <Indicator /> :
				<Container>
					{
						this.state.notifications.map((value, index) => (
							<ActivityItem
								key={index}
								content={value.contenu}
								date={value.dateNotification}
								visual={value.photo} />
						))
					}
				</Container>
		)
	}
}


export default NotificationActivity