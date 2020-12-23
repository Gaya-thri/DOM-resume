let div = document.createElement('div')
let divmain = document.createElement('div')
divmain.setAttribute('class','main')


let divmainhead = document.createElement('div');
divmainhead.setAttribute('class','Head')

// resume image 
let profile = document.createElement('img')
profile.src = "random img.webp"
profile.setAttribute('height','150px')
profile.setAttribute('width','150px')

// name of person
let name1 = document.createElement('p')
name1.innerText='RIA CHAND'
name1.setAttribute('id','name')

// background 
let divmiddle = document.createElement('div')
divmiddle.setAttribute('class','middle');

//background
let divlast = document.createElement('div')
divlast.setAttribute('class','last')

// details of person
let divaddress = document.createElement('div')
divaddress.setAttribute('class','address');
divaddress.innerText = 'Srimanaraya colony, Kodad, Telengana | riachand77217@gmail.com | 8919381134'


let horzintalline = document.createElement('hr');

// profile of person
let tabmain = document.createElement('table');
let trmain = document.createElement('tr');
let td1main = document.createElement('td')
td1main.setAttribute('class','sis1')
let div1 = document.createElement('div');
div1.setAttribute('class','left-cont')
let headerimg = document.createElement('i')
headerimg.setAttribute('class','fa fa-user-circle-o fa-4x')
headerimg.setAttribute('class','icon')
let header = document.createElement('p');
header.setAttribute('class','gry');
header.innerText= "Profile";
let para1 = document.createElement('p');
para1.setAttribute('class','paragraph');
para1.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Maxime voluptates earum maiores ullam, laboriosam doloremque eos hic porro cor unde qui exercitationem voluptatem accusamus sapiente quisquam, dolorem velit itaque deleniti."

div1.append(header);
div1.append(para1);
td1main.append(div1);


//technical skills of person
let div2 = document.createElement('div');
div2.setAttribute('class','left-cont')
let header1 = document.createElement('p');
header1.setAttribute('class','gry');
header1.innerText = 'Skills'
let technical = document.createElement('p');
technical.setAttribute('class','cente1')
technical.innerText= 'Technical Skills'
let skilltable = document.createElement('table')
let skilltr = document.createElement('tr');
let skilltd1 = document.createElement('td');
skilltd1.setAttribute('width','50%')
skilltd1.style.textAlign = "left";
skilltd1.innerHTML = "Java<br>CSS<br>HTML<br>React<br>Redux<br>Mongo<br>Deployment"
let skilltd2 = document.createElement('td')

// progress bars
let p1 = document.createElement('progress');
p1.setAttribute('max','100')
p1.setAttribute('value','80')
let p2 = document.createElement('progress');
p2.setAttribute('max','100')
p2.setAttribute('value','40')
let p3 = document.createElement('progress');
p3.setAttribute('max','100')
p3.setAttribute('value','50')
let p4 = document.createElement('progress');
p4.setAttribute('max','100')
p4.setAttribute('value','60')
let p5 = document.createElement('progress');
p5.setAttribute('max','100')
p5.setAttribute('value','70')
let p6 = document.createElement('progress');
p6.setAttribute('max','100')
p6.setAttribute('value','50')
let p7 = document.createElement('progress');
p7.setAttribute('max','100')
p7.setAttribute('value','90')
skilltd2.append(p1)
skilltd2.append(p2)
skilltd2.append(p3)
skilltd2.append(p4)
skilltd2.append(p5)
skilltd2.append(p6)
skilltd2.append(p7)

let addittional = document.createElement('p')
addittional.setAttribute('class','cente1')
addittional.innerText='Addittional Skills'
let addtable = document.createElement('table')
let addtr = document.createElement('tr')
let addtd1 = document.createElement('td')
addtd1.setAttribute('width','50%');
addtd1.style.textAlign = "left"
addtd1.innerHTML = "Project Management<br>Recuritment<br>Bussiness Development<br>Editing<br>Fundraising"
let addtd2 = document.createElement('td')

let ap1 = document.createElement('progress');
ap1.setAttribute('max','100')
ap1.setAttribute('value','80')
let ap2 = document.createElement('progress');
ap2.setAttribute('max','100')
ap2.setAttribute('value','40')
let ap3 = document.createElement('progress');
ap3.setAttribute('max','100')
ap3.setAttribute('value','50')
let ap4 = document.createElement('progress');
ap4.setAttribute('max','100')
ap4.setAttribute('value','60')
let ap5 = document.createElement('progress');
ap5.setAttribute('max','100')
ap5.setAttribute('value','90')
addtd2.append(ap1)
addtd2.append(ap2)
addtd2.append(ap3)
addtd2.append(ap4)
addtd2.append(ap5)
addtr.append(addtd1,addtd2)
addtable.append(addtr)

skilltr.append(skilltd1)
skilltr.append(skilltd2)
skilltable.append(skilltr)
div2.append(header1);
div2.append(technical)
div2.append(skilltable)
div2.append(addittional)
div2.append(addtable)
td1main.append(div2)


// Work-experience
let div3 = document.createElement('div');
div3.setAttribute('class','left-cont')
let header3 = document.createElement('p');
header3.setAttribute('class','gry')
header3.innerText = "Work Experience"
let captiontab = document.createElement('table')
captiontab.setAttribute('width','100%');
let captiontr = document.createElement('tr')
let captiontd1 = document.createElement('td')
captiontd1.setAttribute('width','50%')
let caption = document.createElement('p')
caption.style.textAlign = "left";
caption.innerHTML = "Event Manager<br>C3 Presents, Washington DC"
let captiontd2 = document.createElement('td')
let date1 = document.createElement('p');
date1.innerText = "03-2014/02-2017"
let para2 = document.createElement('p')
para2.setAttribute('class','paragraph')
para2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et officiis, architecto veniam sunt perferendis, expedita facilis incidunt, mollitia illo sed placeat cumque nulla quidem! Accusamus exercitationem harum natus vel?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et officiis, architecto veniam sunt perferendis, expedita facilis incidunt, mollitia illo sed placeat cumque nulla quidem! Accusamus exercitationem harum natus vel?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et officiis, architecto veniam sunt perferendis, expedita facilis incidunt, mollitia illo sed placeat cumque nulla quidem! Accusamus exercitationem harum natus vel?"
captiontd2.append(date1)
captiontd1.append(caption)
captiontr.append(captiontd1,captiontd2)
captiontab.append(captiontr)
div3.append(header3)
div3.append(captiontab)
div3.append(para2)
td1main.append(div3)




let td2main = document.createElement('td')
td2main.setAttribute('class','mid1');

// right-cont work experience
let td3main = document.createElement('td')
td3main.setAttribute('class','sis2')
let div4 = document.createElement('div')
div4.setAttribute('class','right-cont')
let header4 = document.createElement('p')
header4.setAttribute('class','gry')
header4.innerText =  "Work Experience"
let caption1tab = document.createElement('table')
caption1tab.setAttribute('width','100%')
let caption1tr = document.createElement('tr')
let caption1td1 = document.createElement('td1')
caption1td1.setAttribute('width','50%')
let caption1 = document.createElement('p')
caption1.innerHTML = "Community Relations<br>Manager<br>Gay & Lesbian Elder Housing, Los Angels"
caption1td1.append(caption1)
let caption1td2 = document.createElement('td')
let date2 = document.createElement('p')
date2.innerText = "06-2011/01-2014"
let para3 = document.createElement('p')
para3.setAttribute('class','paragraph')
para3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum minus earum debitis quas fugiat alias provident deleniti deserunt saepe et vero quasi, aperiam modi commodi, labore officia doloremque omnis!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum minus earum debitis quas fugiat alias provident deleniti deserunt saepe et vero quasi, aperiam modi commodi, labore officia doloremque omnis!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum minus earum debitis quas fugiat alias provident deleniti deserunt saepe et vero quasi, aperiam modi commodi, labore officia doloremque omnis!"
caption1td2.append(date2)
caption1tr.append(caption1td1,caption1td2)
caption1tab.append(caption1tr)
div4.append(header4)
div4.append(caption1tab)
div4.append(para3)

td3main.append(div4)


//Education details
let div5 = document.createElement('div');
div5.setAttribute('class','right-cont')
let header5 = document.createElement('p')
header5.setAttribute('class','gry')
header5.innerText = "Education"
let caption2tab = document.createElement('table')
caption2tab.setAttribute('width','100%')
let caption2tr = document.createElement('tr')
let caption2td1 = document.createElement('td')
caption2td1.setAttribute('width','50%')
let caption2 = document.createElement('p')
caption2.innerHTML = "Engineering Immersion<br>Program<br>Thinkful, Chicago, IL"
let caption2td2 = document.createElement('td')
let date3 = document.createElement('p')
date3.innerText = "11-2018/06-2018"
caption2td2.append(date3)
caption2td1.append(caption2)
caption2tr.append(caption2td1,caption2td2)
caption2tab.append(caption2tr)
let para4 = document.createElement('p')
para4.setAttribute('class','paragraph')
para4.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum minus earum debitis quas fugiat alias provident deleniti deserunt saepe et vero quasi, aperiam modi commodi, labore officia doloremque omnis!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum minus earum debitis quas fugiat alias provident deleniti deserunt saepe et vero quasi, aperiam modi commodi, labore officia doloremque omnis!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt rerum minus earum debitis quas fugiat alias provident deleniti deserunt saepe et vero quasi, aperiam modi commodi, labore officia doloremque omnis!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus ratione omnis totam architecto necessitatibus voluptate molestias blanditiis aliquid laudantium asperi"
div5.append(header5)
div5.append(caption2tab)
div5.append(para4)
td3main.append(div5);

td3main.style.paddingBottom = "150px"
td1main.style.paddingBottom = "30px"





divmainhead.append(profile)
divmain.append(divmainhead,name1);
div.append(divmain,divmiddle,divlast,divaddress,horzintalline);
trmain.append(td1main,td2main,td3main)
tabmain.append(trmain)
document.body.append(div);
document.body.append(tabmain)
