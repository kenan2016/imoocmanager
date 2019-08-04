import React from 'react';
import {Card, Button, notification  as Notice} from 'antd';
export default class Notices extends React.Component {
    openNotification = (type ,placement) =>{  //  openNotification = type  等价于openNotification = (type) =>
        Notice[type](
            {
                message: 'Notification Title',
                description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                placement,
              }
        );

        // 等价于
        // if(type==='success'){
        //     Notice.success({
        //         message: 'Notification Title',
        //         description:
        //         'this is notice sucess.',
        //         placement
        //     })
        // }
    }

    render() {
        return(
            <div>
                <Card title="notice组件" className="card-wrap">
                {/*注意这里需要传参()=>this.openNotification('aaaa')这种才属于绑定函数，   不需要传参 的写法是this.openNotification这个 是 执行函数 */}
                    <Button type="primary" onClick={()=>this.openNotification('success', 'topLeft')}>打开notice</Button>
                    <Button type="dashed" onClick={()=>this.openNotification('info', 'topRight')}>info</Button>
                    <Button type="danger" onClick={()=>this.openNotification('error', 'bottomLeft')}>error</Button>
                </Card>    
            </div>
        )
    }


}