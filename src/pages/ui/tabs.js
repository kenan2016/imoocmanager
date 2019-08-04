import React from 'react';
import {Card, Tabs, message, Icon} from 'antd';
import './../ui/ui.less';
const { TabPane } = Tabs;

export default class Tab extends React.Component{
    handleChange =key=>message.info(`您点击的是tabPane ${key}`);
    newTabIndex = 0;
    onChange = activeKey=> this.setState({activeKey});
    componentWillMount(){
        const panes = [
            {
                title:'tab1',
                key:'1',
                content:'this is tab1'
            }, {
                title:'tab2',
                key:'2',
                content:'this is tab2'
            }, {
                title:'tab3',
                key:'3',
                content:'this is tab3'
            },
        ]
        // this.renderTabs(panes);
        this.setState({
            panes,
            activeKey:panes[0].key // 设置默认选中项
        });
    }

    // renderTabs=(panes)=>{
    //     this.setState({
    //         panes
    //     })
    // };

    onEdit = (targetKey, action) => {// 新增和删除页签的回调，在 type="editable-card" 时有效
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;//默认激活熙增的tab 注意newTabIndex 需要在上下文定义
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
    remove = targetKey => {// targetKey
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1; // 如果删除的是当前 被激活的key 则使前一个key 被激活
        }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey); // 过滤掉被移除的tab 获取最新的 panes
        if (panes.length && activeKey === targetKey) { // 如果删除的是当前 被激活的key 则使前一个key 被激活
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
      };
    

    render(){
        return (
            <div>
                {/* 这里不需要单独传 key,默认就会传递 */}
                <Card className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.handleChange}>
                        <TabPane tab="one" key="1">
                            this tab one!!!!
                        </TabPane>
                        <TabPane tab="two" key="2">
                            this tab two!
                        </TabPane>
                        {/*这里必须这么写  tab={<span><Icon type='plus'></Icon>tab3</span>}  否则无法在加标签同时存在文字  
                        本质原因是 jsx 语法要有一个根对象，jsx 其实是将所有内容解析成 js*/}
                        <TabPane tab={<span><Icon type='plus'></Icon>tab3</span>} key="3">
                            this tab three!
                        </TabPane>
                    </Tabs>
                </Card>
                <Card className='card-wrap' title="动态生成">
                    <Tabs defaultActiveKey='1'>
                        {this.state.panes.map((item)=><TabPane tab={item.tab} key={item.key} >{item.content}</TabPane>)}
                    </Tabs>
                </Card>

                
                <Card className='card-wrap' title="可编辑tab">
                    <Tabs 
                       // defaultActiveKey='1' 
                        type="editable-card"
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}// onchange 的时候保存最新的，activeKey取到最新的其实可以不写、组件会自动绑定
                        // activeKey和 defaultActiveKey属性 同时存在时、优先使用 activeKey，， 有事会不生效 ，时因为我们没有在state里设置 activeKey属性
                        // 我们要在代码里设置默认选中的activeKey属性
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map((item)=><TabPane tab={item.title} key={item.key} >{item.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>
        )
    }
}