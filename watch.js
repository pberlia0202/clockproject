let timing = null;      
document.getElementById('region').style.display="none"
document.getElementById('stopwatch').style.display="none"
document.getElementById('main').style.display=""
document.getElementById('countdowntimer').style.display="none"
document.getElementById('lap').style.display="none"
document.getElementById('resume_timer').style.display="none"
document.getElementById('pause-cntdwn').style.display="none"
var x= document.getElementById("outside_container")
x.style.display='none'


function home()
{  
	document.getElementById('main').style.display=""
	document.getElementById('countdowntimer').style.display="none"
	document.getElementById('region').style.display="none"
	document.getElementById('stopwatch').style.display="none"
	document.getElementById('lap').style.display="none"
	x.style.display='none'
	 
	// document.getElementById('region').style.display="none"
    // document.getElementById('stopwatch').style.display="none"
    // x.style.display='none'
	
	
}

function fun(areaname)
{ 
	document.getElementById('region').style.display=""
    x.style.display=''
	document.getElementById('main').style.display="none"
	document.getElementById('countdowntimer').style.display="none"
	
	document.getElementById('stopwatch').style.display="none"
	document.getElementById('lap').style.display="none"

if (timing) {
	clearInterval(timing);
}
//window.alert("1" + areaname);

timing = setInterval(function(){mytiming(areaname)}, 1000);

}

function mytiming(areaname){
	//window.alert(areaname + "2");
let a;
let date;
let time;
let s=" ";
let i;
let day;
const options1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const options2 = { day: 'numeric' };
//window.alert(areaname);	
    a= new Date();
	if(areaname=='india') {	
	date= a.toLocaleDateString(undefined,options1);
	time=("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)+":"+("0"+a.getSeconds()).slice(-2);
	if(a.getHours()>=12)
	s=" P.M."
	else
	s=" A.M."
	document.getElementById('time').innerHTML= time + s + " IST" + "<br>on " + date
	
	}	
    else if(areaname=='utc'){			
	date= a.toUTCString(options2);	
	time=a.getUTCHours()+":"+("0"+a.getUTCMinutes()).slice(-2)+":"+("0"+a.getUTCSeconds()).slice(-2);
	if(a.getUTCHours()>=12)
	s=" P.M."
	else
	s=" A.M."
	document.getElementById('time').innerHTML= date;
	}
	else if(areaname=='london'){
		
        date=a.toLocaleString('en-GB', { timeZone: 'Europe/London' },options1);
		if(a.getUTCHours()>=12)
	    s=" P.M. "
	    else
	    s=" A.M. "
		var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
		var monthName=months[a.getMonth()];
		
		
	
	    document.getElementById('time').innerHTML= date + s + monthName;
	}
	else if(areaname=='moscow'){
		date=a.toLocaleString("en-US", {timeZone: "Europe/Moscow"})
		
		document.getElementById('time').innerHTML= date ;

	}
}




function stopwatch(){
  	//window.alert("1");
	document.getElementById('stopwatch').style.display=""
	document.getElementById('region').style.display="none"
    x.style.display=''
	document.getElementById('main').style.display="none"
    document.getElementById('countdowntimer').style.display="none"
	document.getElementById('lap').style.display=""




}
const timer = document.getElementById('show_stopwatch');
var sec=0
var min=0
var hr=0
var stoptime=true
var rst=false
function startStopwatch()
{
    if(stoptime==true)
	{
		rst=false
		stoptime=false
		stopwatch_cycle()
	}
}

function pauseStopwatch()
{
	rst=false
	if(stoptime==false)
	{
		stoptime=true
	}
}

function stopwatch_cycle()
{
	rst=false
	if(stoptime==false)
	{
		sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
		sec=sec+1;
		if(sec==60)
		{
			min=min+1;
			sec=0;
		}
		if(min==60)
		{
			hr=hr+1;
			min=0;
			sec=0;
		}
		
		if(sec<10||sec==0)
		{
			sec='0'+sec;
		}
	
		if(min<10||min==0)
		{
			min='0'+min;
		}
	
		if(hr<10||hr==0)
		{
			hr='0'+hr;
		}
		
		timer.innerText= '\xa0\xa0\xa0\xa0'+ hr+':'+min+':'+sec;
		setTimeout("stopwatch_cycle()",1000);
	
	}
}

function resetStopwatch()
{
	temp=0
	rst=true;
    timer.innerHTML= '\xa0\xa0\xa0\xa0'+"00:00:00";
	stoptime=true;
	hr=0;
	min=0;
	sec=0;
	
}


function cntdwn()
{
    x.style.display=''
    document.getElementById('countdowntimer').style.display=""
    document.getElementById('region').style.display="none"
    document.getElementById('stopwatch').style.display="none"
    document.getElementById('main').style.display="none"
	document.getElementById('lap').style.display="none"
    
}

function limiter(input)
{
	if(input.value<0) input.value=0
	if(input.value>59) input.value=59
	
    
}
var h=document.getElementById('hours').value
var m=document.getElementById('minutes').value
var s=document.getElementById('seconds').value
var h1=h
var m1=m
var s1=s
const remaining_time=document.getElementById('show_countdown')
	var count_down_status=false
function start_countdown(){
	
	document.getElementById('reset_start_time').style.display="none"
	document.getElementById('resume_timer').style.display="none"
	document.getElementById('pause-cntdwn').style.display=""
	
	
	var h=document.getElementById('hours').value
	var m=document.getElementById('minutes').value
	var s=document.getElementById('seconds').value
	//const remaining_time=document.getElementById('show_countdown')
	




    if(count_down_status==false)	{
		//window.alert("Inside false")
		if(s<10||s==0)
		{
			s='0'+s;
		}
		//window.alert("Commented")
		if(m<10||m==0)
		{
			m='0'+m;
		}
		if(h<10||h==0)
		{
			h='0'+h;
		}
		remaining_time.innerText= h +':'+ m +':'+ s;
		//window.alert(remaining_time.innerText)
		count_down_status=true;
		setTimeout(function() {
			countdown_cycle(h,m,s);
	 }, 1000)	
		//countdown_cycle(h,m,s)
	

	}
}

function countdown_cycle(h,m,s)
{
   //window.alert(  remaining_time.innerText) 
     h1=h
     m1=m
     s1=s
	//window.alert(h+','+m+','+s+','+h1+','+m1+','+s1)
	
	
   
	
   if(count_down_status==true &&(h1!=0||m1!=0||s1!=0))
 	{
		
		//window.alert("Timer to start")
		//window.alert(h+','+m+','+s+','+h1+','+m1+','+s1)
		remaining_time.innerText= h1 +':'+ m1 +':'+ s1;	
		    s1 = parseInt(s1);
        	m1 = parseInt(m1);
        	h1 = parseInt(h1);
//		window.alert(h+','+m+','+s+','+h1+','+m1+','+s1)

	    	s1=s1-1;
		if(s1<0)
			{
				s1=59;
				m1=m1-1;
			}
		if(m1<0)
			{
				h1=h1-1;
				m1=59;
				s1=59;
			}
		if(s1<10||s1==0)
		{
			s1='0'+s1;
		}
		//window.alert("Commented")
		if(m1<10||m1==0)
		{
			m1='0'+m1;
		}
		if(h1<10||h1==0)
		{
			h1='0'+h1;
		}
		//window.alert(remaining_time.innerText)

		remaining_time.innerText= h1 +':'+ m1 +':'+ s1;
		//remaining_time.append("aaaaaaaaaaaaaaaaaaaaaa")
		//window.alert(remaining_time.innerText)
		//window.alert(h+','+m+','+s+','+h1+','+m1+','+s1)
		if(h1!=0 || s1!=0 || m1!=0)
		{

		setTimeout(function() {
		       countdown_cycle(h1,m1,s1);
		}, 1000)
	    }
		else 
		{
			// window.alert(h+','+m+','+s+','+h1+','+m1+','+s1)
			// window.alert("should not enter")
			// pause_countdown()
			count_down_status=false
			remaining_time.innerText= h1 +':'+ m1 +':'+ s1;
			setTimeout(function() {
				alert('timeup')
				document.getElementById('resume_timer').style.display="none";
	document.getElementById('reset_start_time').style.display="";
	document.getElementById('pause-cntdwn').style.display="none";


			}, 1000)
		   
			
			
		}

	 }
}

function resume_cnt()
{	
	document.getElementById('resume_timer').style.display="none"
    document.getElementById('pause-cntdwn').style.display=""
	if(count_down_status==false)
	{
	count_down_status=true;
	countdown_cycle(h1,m1,s1);
	}

}
if(h1==0&&s1==0&&m1<0)
	{
		//window.alert("they are 0")
	document.getElementById('resume_timer').style.display="none";
	document.getElementById('reset_start_time').style.display="";
	}

function pause_countdown()
{
	document.getElementById('resume_timer').style.display=""
	document.getElementById('pause-cntdwn').style.display="none"
	// if((count_down_status==true) && (h1!=0 || s1!=0 || m1!=0))
	// {
		//window.alert("time up!!!!!!!!!")
		count_down_status=false
		//window.alert("should not enter")

		setTimeout(function() {
		
		 }, 1000)
		 //window.alert("should not enter")
	//}
	// if(count_down_status==true && (h1==0||s1==0||m1==0))
	// {
	// 	window.alert("time up!!!!!!!!!")
	// 	count_down_status=false
		
	// }
}

function reset_countdown()
{
	
	document.getElementById('resume_timer').style.display="none"
	document.getElementById('pause-cntdwn').style.display="none"
	document.getElementById('reset_start_time').style.display=""
	
	//window.alert(h+','+m+','+s + ',' ++':')
	h = document.getElementById('hours').value;
	m = document.getElementById('minutes').value;
	s = document.getElementById('seconds').value;
	if(s<10||s==0)
		{
			s='0'+s;
		}
		//window.alert("Commented")
		if(m<10||m==0)
		{
			m='0'+m;
		}
		if(h<10||h==0)
		{
			h='0'+h;
		}
		
	
    remaining_time.innerHTML= h+':'+m+':'+s;
	count_down_status=false;
	
}
const reset =document.querySelector(".reset")
const laps=document.querySelector(".laps")
const stp_lap=document.querySelector(".stp_lap")
//const lap=document.createElement("div");
var temp=0
stp_lap.addEventListener("click",()=>{
	const lap=document.createElement("div");
	if(stoptime==false)
	temp++
	lap.innerText='\xa0\xa0\xa0\xa0'+temp+'.'+'\xa0\xa0'+hr+':'+min+':'+sec;
	
	
	if(stoptime==false)
	laps.appendChild(lap);
	if(rst==true)
    laps.innerHTML="LAPS";


})

reset.addEventListener("click",()=>{
	const lap=document.createElement("div");
	laps.innerHTML='\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+"<b>LAPS</b>";
})
