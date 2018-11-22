import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
// withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount () {
        // 如果在登录或者注册页面就不用获取登录信息
        const publicList = ['/login','register']
        const pathname = this.props.location.pathname

        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        // 获取用户信息
        axios.get('/user/info').then(res =>{
            if (res.status === 200) {
                // console.log(res.data)
                if (res.data.code === 0) {
                    // 有登陆消息
                    console.log(111)
                    this.props.loadData(res.data.data)
                } else {
                    console.log(this.props.history)
                    this.props.history.push('/login')
                }
            }
        }).finally(function () {
            console.log('end')
        })
        // 是否登录
        // 现在的URL地址 login 是否需要跳转
        // 用户的type 身份是boss还是牛人
        // 用户是否完善信息（选择头像 个人简介)

    }

    render () {
        return (
            <div>
               
            </div>
        )
    }
    
}

export default AuthRoute