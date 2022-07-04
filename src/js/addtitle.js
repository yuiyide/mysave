//对内容操作

export function getcontent(id,title,titlect,titlecth1,titlecth2){
    
    if(title == "" || titlect === ""){
        alert("不能为空")
    }
    else{
        let div = document.createElement('div');
        let yui = document.createElement('textarea');
        let yuict = document.createElement('textarea');
        let button = document.createElement('button')
        div.id = 'addiv'
        yui.id = 'yuiid'
        yuict.id = 'yuiidct'
        if(id !== 'null')button.id = id
        button.className = 'del'
        button.style.cssText = "float:right";
        yui.style.height = titlecth1+ "px"
        yui.style.textAlign = 'center'
        yuict.style.height = titlecth2+ "px"
        button.innerHTML = "删除"
        yui.innerHTML = `${title}`
        yuict.innerHTML = `${titlect}`
        let titlebtaf = document.getElementById('titlebt');
        titlebtaf.after(div)
        div.appendChild(yui)
        div.appendChild(yuict)
        div.appendChild(button)

        //获取删除属性
        button.addEventListener('click',function(e){
            console.log(e.target.getAttribute('id'))
        },false)
    }
}

export function addAside(AsideBox,AsideBoxItem,AsideItem){
    let div = document.createElement('div');
    div.className = "div1"
    AsideBox.appendChild(div)

    let li = document.createElement('li');
    li.className ="list"
    li.id = `${AsideItem}`
    li.innerHTML = `${AsideItem}`
    AsideBoxItem.appendChild(li)
    let aside = document.getElementById(`${AsideItem}`)
    aside.addEventListener('click',function(){
        console.log(document.getElementById(`${AsideItem}item`).style.display)
        if(document.getElementById(`${AsideItem}item`).style.display !== "block"){
            document.getElementById(`${AsideItem}item`).style.display = "block"
        }else{
            document.getElementById(`${AsideItem}item`).style.display = "none"
        }
        
    },false)

    let nav = document.createElement('nav');
    nav.id = `${AsideItem}item`
    li.appendChild(nav)

}

export function forItem(boxitem,Asidename){
    let item = document.getElementById(`${Asidename}item`);
    let h1 = document.createElement('h1');
    let a = document.createElement('a');
    h1.className = "item" 
    a.innerHTML = boxitem
    a.to = `/#/${boxitem}`
    h1.appendChild(a)
    console.log(Asidename)
    item.appendChild(h1)
    // myrouter(boxitem)
}

export function addItem(boxitem,Asidename){
    let item = document.getElementById(`${Asidename}item`);
    let h1 = document.createElement('h1');
    let a = document.createElement('a');
    h1.className = "item" 
    a.innerHTML = boxitem
    a.href = `/${boxitem}`
    h1.appendChild(a)
    item.appendChild(h1)
    // myrouter(boxitem)
    addItemto(boxitem,Asidename)
}
