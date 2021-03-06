import React, { useState, useContext } from 'react'
import { Input,Button } from 'antd';
import axios from 'axios'
export default  function Update(){
    let list = window.location.search.split('?');
    let id = list[1];
    const { TextArea } = Input;
    const [title,SetTitle]=useState('')
    const [content,SetContent]=useState('')
    //  const [author,SetAuthor]=useState('')
     const author = localStorage.getItem('author')
    const HandleUpdate=()=>{
        axios(`/api/blog/update?id=${id}&title=${title}&content=${content}&author=${author}`,).then(res=>res.data
        ).then(res=>{
          // console.log(res)
            if(res){
                alert('更新成功')
            }
            else{
                alert('更新失败')
            }
        }
          
        )
    }
   

    return(
        <div> <Input onChange={e=>{SetTitle(e.target.value)}}  placeholder="请输入标题" />
         {/* <Input onChange={e=>{SetAuthor(e.target.value)}}  placeholder="请输入作者姓名" /> */}
        <TextArea onChange={e=>{SetContent(e.target.value)}} rows={4} placeholder='请输入内容'/>
       
       <Button onClick={HandleUpdate}>提交更新</Button></div>
    )}