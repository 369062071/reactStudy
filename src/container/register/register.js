import React from 'react'
import Logo from '../../conponent/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.user,
	{register}
)
class Register extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
        this.hangleRegister = this.hangleRegister.bind(this)

    }

    hangleRegister () {
   
        this.props.register(this.state)
    }

    hangleChange (key, val) {
        this.setState({
            [key]: val
        })
    }

    render () {
        const RadioItem = Radio.RadioItem

        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <List>
                    {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                    <InputItem onChange={v=>this.hangleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem 
                    onChange={v=>this.hangleChange('pwd', v)}
                    type='password'
                    >
                    密码
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                     onChange={v=>this.hangleChange('repeatpwd', v)}
                     type='password'
                     >确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type === 'genius'}
                    onChange={()=> this.hangleChange('type', 'genius')}>牛人</RadioItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type === 'boss'}
                    onChange={()=> this.hangleChange('type', 'boss')}>BOOS</RadioItem>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.hangleRegister}>注册</Button>
                </List>
            </div>
        )
    }
}

export default Register