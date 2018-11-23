import React from 'react'
import Logo from '../../conponent/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

@connect(
    state => state.user,
    {login}
)
class Login extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    register () {
        this.props.history.push('./register')
    }

    hangleChange (key, val) {
        this.setState({
            [key]: val
        })
    }

    handleLogin () {
        console.log(1, this.state)
        console.log(2, this.props.login)
        this.props.login(this.state)
    }

    render () {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem onChange={v=>this.hangleChange('user',v)}>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem onChange={v=>this.hangleChange('pwd', v)} type='password'>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handleLogin} type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login

