let n=1;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET",`/page${n+1}`);
    request.onreadystatechange =()=>{
        if(request.readyState===4&&request.status===200){
            const array = JSON.parse(request.response);//把JSON字符串变成数组
            array.forEach(item=>{
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });   //对数组的每一项插到ul
            n+=1
        }
    };
    request.send()
};

getJSON.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("get","/5.json")
    request.onreadystatechange = ()=>{
        if(request.readyState===4&&request.status===200){  
         console.log(typeof request.response);
         console.log(request.response)      
         const bool = JSON.parse(request.response);
         console.log(typeof bool)
         console.log(bool);
        }
    };
    request.send()
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml")
    request.onreadystatechange = ()=>{
        if(request.readyState===4&&request.status===200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim)//trim去掉回车
        }
    };
    request.send();
}



//onerror在AJAX之前就先发明出来，与AJAX适配性不好
//换成onreadystatechange

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
        request.open("GET","/3.html");
        request.onload = () =>{
            //创建div标签
            const div = document.createElement('div')
            //填写div内容
            div.innerHTML = request.response
            //插到身体里
            document.body.appendChild(div);
        };
        request.onerror = () =>{};
        request.send();
    
}


getJS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET","/2.js")
    request.onload = ()=>{
        
        //创建script标签
        const script = document.createElement('script')
        //填写script内容(到这一步只有js引擎看到)
        script.innerHTML = request .response
        //插到身体里（到这一步浏览器才能看到）
        document.body.appendChild(script)
    };
    request.onerror = ()=>{}
    request.send()
}

getCSS.onclick = () =>{   //getCSS.onclick等于一个函数
    const request = new XMLHttpRequest() ;//创建请求对象
    request.open("GET","/style.css"); //调用对象的打开方法 (method, url)MDN CRM大法 只用第一个语法// readyState=1
    request.onreadystatechange = () =>{
        //下载完成但不知道是成功 2xx 还是失败 4xx 5xx
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){ 
        //创建style标签
        const style = document.createElement('style')
        //填写style内容(到这一步只有js引擎看到)
        style.innerHTML = request.response
        //插到头里（到这一步浏览器才能看到）
        document.head.appendChild(style)
    
            }else{
                alert("加载CSS失败")
            };
        } 
    }
    
    request.send();//请求发送   readyState=2
};
