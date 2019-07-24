/**
 * 结合jsonp、promise 实现网络请求的封装和异常统一处理
 */
import JsonP from 'jsonp';

export default class Axios {
    static jsonp (options) {
        return new Promise((resolve, reject)=>{
            JsonP(options.url,{
                param: 'callback'
            },(error,response)=>{
                if(response.status==='success'){
                    resolve(response);
                } else {
                    reject(response.message)// 胡写的？
                }
            });
        })
    }
}