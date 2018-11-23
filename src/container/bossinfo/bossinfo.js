import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../conponent/avatar-select/avatar-select'

class BossInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: ''
        }
    }

    onChange = (key, val) => {
        this.setState({
            [key]:val
        })
    }
    
    selectAvatar (imgName) {
        this.onChange('avatar',imgName)
    }

    render () {
        return (
            <div>
                <NavBar mode="dark">BOSS完善信息页面</NavBar>
                <AvatarSelector selectAvatar={this.selectAvatar.bind(this)}></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={(v)=>this.onChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={(v)=>this.onChange('money', v)}>职位薪资</InputItem>
      
                <TextareaItem autoHeight rows={3} title='职位要求' onChange={(v)=>this.onChange('desc', v)}></TextareaItem>

                <Button type='primary'>保存</Button>
            </div>
        )
    }
}

export default BossInfo