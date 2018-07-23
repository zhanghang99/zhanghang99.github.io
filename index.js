let arr = [
  {
    name:'HTML',
    list:[
      {
        title:'html事件',
        url:'http://www.w3school.com.cn/tags/html_ref_eventattributes.asp'
      },
      {
        title:'222',
        url:'http://www.baidu.com'
      },
    ]
  },
  {
    name:'JS',
    list:[
      {
        title:'js中的event详解',
        url:'https://blog.csdn.net/woxingx/article/details/54176320'
      },
      {
        title:'event(事件对象)详解',
        url:'https://www.cnblogs.com/websmile/p/8807334.html'
      },
      {
        title:'JavaScript中,{}+{}等于多少?',
        url:'http://www.cnblogs.com/ziyunfei/archive/2012/09/15/2685885.html'
      }
    ]
  },
  {
    name:'CSS',
    list:[
      {
        title:'Flex 布局教程：语法篇',
        url:'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'
      },
      {
        title:'解决flex新旧版本的兼容性写法',
        url:'https://blog.csdn.net/web_note/article/details/73527865'
      },
      {
        title:'我们都一样',
        url:'http://www.baidu.com'
      },
    ]
  },
  {
    name:'react',
    list:[
      {
        title:'react-router中文文档',
        url:'http://react-guide.github.io/react-router-cn/docs/Introduction.html'
      }
    ]
  },
  {
    name:'移动端',
    list:[
      {
        title:'ios和android 浏览器适配问题总结',
        url:'https://www.jianshu.com/p/31e53df2ecce'
      }
    ]
  },
  {
    name:'浏览器',
    list:[
      {
        title:'浅谈浏览器http的缓存机制',
        url:'http://www.cnblogs.com/vajoy/p/5341664.html'
      },
       {
        title:'浏览器同源政策及其规避方法',
        url:'http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html'
      },
       {
        title:'跨域资源共享 CORS 详解',
        url:'http://www.ruanyifeng.com/blog/2016/04/cors.html'
      },
       {
        title:'浏览器内核差异以及兼容性处理',
        url:'https://blog.csdn.net/Prince_fmx/article/details/78040416'
      }
    ]
  },
  {
    name:'前端资源',
    list:[
      {
        title:'caniuse',
        url:'https://www.caniuse.com/'
      },
      {
        title:'github上最全的资源教程-前端涉及的所有知识体系',
        url:'https://blog.csdn.net/qq_34348873/article/details/52572008'
      },
      {
        title:'WEB前端要学些什么？WEB前端学习路线！WEB前端从入门到精通',
        url:'https://www.jianshu.com/p/ac8dd63b388e'
      },
      {
        title:'题目',
        url:'https://springhyc.github.io/InterviewLibrary/'
      }
    ]
  }
];

//页面初始化根据数据生成元素
let ulDom = document.querySelector(".main");
ulDom.innerHTML = createDom(arr);

//元素展开和收起
ulDom.onclick = function(e){
  stretch(e);
}

//点击搜索
search.onclick = function(){
  searchs();
}

//回车键搜索
document.onkeydown = function(e){
  e.keyCode === 13 && searchs();
}

//列表展开和搜索
function stretch(e){
  let liDomName = e.target.className;
  if(liDomName === 'menusTitle'){
    let ulDomName = e.target.parentNode.querySelector('ul').className;
    if(ulDomName === 'undefined' || ulDomName.length === 0){
      e.target.parentNode.querySelector('ul').className = 'show';
    }else if(ulDomName.length !== 0){
      e.target.parentNode.querySelector('ul').className = ''
    }
  }
}

//搜索
function searchs(){
  let keywords = document.querySelector('.keywords').value;
  let arr1 = [];
  arr.forEach((val)=>{
    let childArr = [];
    childArr = val.list.filter((v)=>{
      return v.title.indexOf(keywords) !== -1;
    })
    childArr.length !== 0 && arr1.push({name:val.name,list:childArr})
  })
  ulDom.innerHTML = createDom(arr1, keywords.length === 0 ? '' : 'show', keywords);
}

//生成Dom元素
function createDom(arrs,names,keywords){
  let html = '';
  arrs.forEach((val)=>{
    let childHtml = `<ul class='${names}'>`;
    val.list.forEach((v)=>{
      let reg = new RegExp("(" + keywords + ")", "ig");
      let title = names ? v.title.replace(reg,`<span>${keywords}</span>`) : v.title;
      childHtml += `<li><a href='${v.url}' target='_block'>${title}</a></li>`
    })
    childHtml += `</ul>`;
    html += `<li class='Menus'><div class='menusTitle'>${val.name}</div>${childHtml}</li>`
  })
  // debugger;
  return html;
}
