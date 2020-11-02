
import React, {} from 'react'
import {  Spin } from 'antd';

import './style.less'

const Loading = () => {
    return (
        <div className="common-loading-wrapper flex-center">
            <Spin spinning={true}></Spin>
        </div>
        
    )
}
export default Loading