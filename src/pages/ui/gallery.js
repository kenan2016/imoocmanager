// 图片画廊 一排5张图片 一共5列，一行 注意是每一列有5张
import React from 'react';
import {Card, Row, Col, Modal} from 'antd';

export default class Gallery extends React.Component{
    // 任何组件都自带state对象属性
    state={
        visible:false
    }
    openGallery = imgSrc =>{
        this.setState({
            curImg:imgSrc,
            visible:true
        })
    }
    render(){
        // 定义一个二维数组 5*5
        const  imgs = [
            ['1.png', '2.png', '3.png' ,'4.png','5.png'],
            ['6.png', '7.png', '8.png' ,'9.png','10.png'],
            ['11.png', '12.png', '13.png' ,'14.png','15.png'],
            ['16.png', '17.png', '18.png' ,'19.png','20.png'],
            ['21.png', '22.png', '23.png' ,'24.png','25.png']
        ] 
        // map 会返回一个新的数组，同时保留原本数组  箭头函数不写大括号默认return
        const imageList = imgs.map((ilist)=>ilist.map((item,index)=>
            // 如果出现报错index.js:2178 Warning: Each child in a list should have a unique "key" prop.
            <Card // 注意如果是节点对象需要加上 key,保证组件的唯一性(index 如果有增删组件的话 不推荐使用index 容易出现索引错乱，)
                key={index}
                style={{marginBottom:10}}
                cover={<img alt="example" src={'/gallery/'+item}
                    onClick={()=>this.openGallery(item)}
                />}//注意这里不是 再调用 setState   另外项目里访问的资源都在 public 目录下， 资源访问路径是 ip:端口号/文件夹名资源名
                // 比如http://localhost:3000/gallery/1.png
                // 另外在代码里的写法 是  src={'/gallery/'+item} 会自动访问 public / gallery 文件夹下资源 
            >
                <Card.Meta 
                    title="React admin"
                    description="i love kenan"
                />
            </Card>))
        
        return(
            <div className="card-wrap">
                {/*注意这里是一整行！！！，然后分成5列，每一列有5张图片   而每一列的5张图片高度又不等，这样就会有错落感，出现画廊的效果*/}
                <Row gutter={10}>
                {/*gutter 设置列之间距离*/}
                    <Col md={5} >{imageList[0]}</Col>
                    <Col md={5}>{imageList[1]}</Col>
                    <Col md={5}>{imageList[2]}</Col>
                    <Col md={5}>{imageList[3]}</Col>
                    <Col md={4}>{imageList[4]}</Col>
                </Row>
                <Modal
                    visible={this.state.visible}
                    onCancel={()=>this.setState({visible:false})}
                    title="大图"
                    footer={null}
                >
                    <img src={`gallery/${this.state.curImg}`}  style={{width:'100%'}}></img>
                </Modal>
            </div>
        )
    }
}