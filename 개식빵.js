loadScriptTag("https://www.gstatic.com/firebasejs/5.3.0/firebase.js",onLoadFirebase);
// Initialize Firebase
var data;
function onLoadFirebase(){
    var config = {
         apiKey: "AIzaSyCb5XUTmBwC3SpKoCFIO4rNbfv3v7Nw9y8",
    authDomain: "yeahhhhhh-4458c.firebaseapp.com",
    databaseURL: "https://yeahhhhhh-4458c.firebaseio.com",
    projectId: "yeahhhhhh-4458c",
    storageBucket: "yeahhhhhh-4458c.appspot.com",
    messagingSenderId: "88305746762"
    }
  firebase.initializeApp(config);

    data = firebase.database();
load();
    
}

function makelist() {
    
    
    for(var s = (a*10-9)-1 ; s < (a*10); s++){
        if(!list[s]) break 
        
    var listBox = box().size(199,40).appendTo(con).text(list[s].title).data(list[s]).click(hide3);    
    }    

    
}
var d = new Date();
var connumbers = ['','','','','','','','','','','','','','','','','','','','','','','','','',''];
var bgBox = box().append().size(300).border(0);
var pageBox = box().appendTo(bgBox).size(230,50).border(1)
var back = box().appendTo(bgBox).size(20,49).border(0).image("arrow_backward").left(50).click(backf)
var next = box().appendTo(bgBox).size(20,49).border(0).image("arrow_forward").click(nextf);
var con = box().appendTo(bgBox).size(200,400).border(1);     

var writeBox = box().appendTo(bgBox).size(70,20).border(1).text('팍씨').click(hide);

var bgBox2 = box().append().size(200,500).border(0).hide();
var writeBox2 = box().appendTo(bgBox2).size(70,20).border(1).text('알파카').click(hide2);
var titleBox = box().appendTo(bgBox2).size(200,50);
var jeamok = box().appendTo(titleBox).size(200,48).editable();
var under = box().appendTo(bgBox2).size(200,290).editable();

var bgBox3 = box().append().size(200,500).border(0).hide();



var a = 1;
var b = 0;

function numbers(){
    
    if(a-1 < pagenm) {
    next.show();
    back.hide();
    }
    
    if(a+1 >= pagenm) {
    back.show();
    next.hide();
    }
    
    for(var i = 1+b; i < 11+b;  i++){
        
        if(pagenm < i){
        break;    
        }
        if(i > connumbers.length){
            break;
        }
        if(i == a) {
            var numberBoxsp = box().appendTo(pageBox).border(0).size(20).text(i).textColor('red').click(clickmove);
        }
        else{
            var numberBox = box().appendTo(pageBox).border(0).size(20).text(i).textColor('black').click(clickmove);
        }
        
    }

    var context = connumbers[a-1]; 
    con.text(context)
}




back.hide();
function nextf(bx) {
pageBox.clear()
con.clear()    
    
    if(a == pagenm){
    next.hide();    
    }
        
    if(a < pagenm){
    back.show();     
    }
        if(a % 10 == 0) {
        pageBox.clear()
        numbers();
        b = b+10
        }

pageBox.clear()
a++
numbers();
makelist();   
}

function backf(bx) {
pageBox.clear()
con.clear()
makelist();  
    if(a < pagenm) {
    back.hide();
    }
    
    if(a == pagenm) {
    next.show();    
    }    
    
        if((a-1) % 10 == 0) {
        pageBox.clear()
        numbers();
        b = b-10
        }

pageBox.clear()
a--
numbers();
}

function clickmove(bx) {
a = bx.text();
pageBox.clear();
con.clear()
makelist();
numbers();

    if(a == pagenm){
        next.hide();    
    }
    
    else{
    next.show();    
    }
    
    if(a < pagenm){
        back.hide();
    }
    
    else{
    back.show();    
    }
    
}

function hide() {
bgBox.hide();
bgBox2.show();
bgBox3.hide();    
}

var pagenm = '';
var list = []

function hide2() {
bgBox.show();
bgBox2.hide();
bgBox3.hide();

bgBox3.clear();
con.clear();

var dd =  d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+':'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
data.ref('page/').push().set({title : jeamok.text() , blank : under.text() , time : dd} )   
}  

function hide3(bx) {
bx.data();
//alert(bx.data().title)
q = bx.data().title
w = bx.data().blank

bgBox.hide();
bgBox2.hide();
bgBox3.show();
show();
var titles = box().appendTo(bgBox3).size(199,50).border(3).text(q);
var blankBox = box().appendTo(bgBox3).size(199).border(3).text(w);

}

function show() { 
var out3 = box().appendTo(bgBox3).size(70,20).border(1).text('어둠 인격').click(hide2)
}

function load() {
    data.ref('page').on('value' , function (aa)  {
        list = [] 
        
        aa.forEach(function (aaa) { 
            list.push(aaa.val())
             
        })
        
       makelist();
       
          
    pageBox.clear();    
    var l = list.length;
    pagenm = ((l - (l % 10)) / 10 + 1) 
    numbers();
    })
}

