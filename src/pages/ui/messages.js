import React from 'react';
import { Card ,Button, message as Msg} from 'antd';

export default class Messages extends React.Component{
    showMsg=type=>{
        Msg[type](  'this is success msg' );
        // 等价于
        // if(type==='info'){
        //     Msg.info('this is info');
        // }
    }
    render(){
        return(
            <div>
                <Card className="card-wrap">
                    <Button type="primary" onClick={()=>this.showMsg('info')}>info</Button>            
                    <Button type="primary" onClick={()=>this.showMsg('success')}>success</Button>            
                    <Button type="loading" onClick={()=>this.showMsg('loading')}>loading</Button>            
                </Card>
            </div>
        )
    }
}   