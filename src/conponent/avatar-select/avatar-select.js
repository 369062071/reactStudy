import React from 'react'
import {Grid , List} from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
	static propTypes = {
		selectAvatar: PropTypes.func.isRequired
	}
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        const avatarList = 'avatar-1,avatar-2,avatar-3,avatar-4,avatar-5'.split(',').map(v=>({
                                icon:require(`../img/${v}.jpg`),
                                text: v
                            }))
        
        const gridHeader = this.state.text ? (<div>
            <span style={{verticalAlign:'top'}}>已选择头像</span>
            <img style={{width:75,height:75}} src={this.state.icon}></img>
        </div>) : <div style={{width:75,height:75}}>请选择头像</div>

        return (
            <div>
                <List renderHeader={() => gridHeader}>

                    <Grid data={avatarList} activeStyle={false}             columnNum={3}
                    
                        onClick={elm=>{
                            this.props.selectAvatar(elm.text)
                            this.setState(elm)
                        }}

                        renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                        )}
                    />
                </List>
            </div>
        )
    }
}

export default AvatarSelector