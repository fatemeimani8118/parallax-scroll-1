let autotypeactive = false
        document.addEventListener('DOMContentLoaded', () => {  
            const body = document.querySelector('body')
            const imgElement = document.querySelector('#img')
            const halfElement = document.querySelector('#half')
            const txt1 = document.getElementById('txt1')
            const btn = document.getElementById('fakebtn')
            const pt = document.getElementById('pt')
            const circle = document.getElementById('circle1')
            const ii = document.querySelectorAll('.ii')
            const lis = document.querySelectorAll('#list li')
            const list = document.querySelector("#Portfolio")
            const Portfolio = document.querySelector("#title-portfolio")
            const top = document.querySelector('#top')
            const down = document.querySelector('#down')
            const sun = document.querySelector('#sun')
            const pics = document.querySelectorAll(".pic")
            const rahrah = document.querySelectorAll(".section")
            const mentor = document.querySelector("#Mentorship")
            const smooth = document.querySelectorAll('.smooth')
            const imgs = document.querySelectorAll('.image')
            const figures = document.querySelectorAll('figure')
            const logoesc = document.querySelector('#logos')
            const tv = document.querySelector('#tv')
            const info = document.querySelector('#info')
            const sticky = document.querySelector(".sticky");
            const scroll = document.querySelector(".scroll");
            let scrollPosition = 0;
            let currentX = 0;
            let rotateX = 0;
            let rotateY = 0;
            // window.scrollTo(0, 0)

            const handleScroll = () => {  
            const scrollY = window.scrollY;  
            const innerHeight = window.innerHeight;  
            const scrollHeight = document.documentElement.scrollHeight;  
            const totalHeight = scrollHeight - innerHeight;  
            const scrollPercent = (scrollY / totalHeight) * 100;  

            console.log(`Scrolled: ${scrollPercent}%`);  
            
            const scrollPosition = window.scrollY ; 
            console.log(scrollPosition);
            smooth.forEach(section=>{
                section.style.transform = `translateY(${-scrollPosition * 0.8}px)`;  
            })
                
                halfElement.style.rotate = '20deg'
                imgElement.style.rotate = '20deg'
                currentX = scrollPosition * 3; 
                // imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.3}deg)`; // حرکت افقی  
                 
  
            if (window.innerWidth <= 768) {
                imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.7}deg)`; // حرکت افقی  
              if (scrollPosition >= 230) {  
             halfElement.classList.add('tab');  
            } else {  
             halfElement.classList.remove('tab');  
            }  
            if (scrollPosition>=1100) {
                const newSize = Math.min(400, scrollPosition - 1100);
                circle.style.width = newSize + 'px';  
                circle.style.height = newSize + 'px'; 
            } else{
                circle.style.width = '100px';  
                circle.style.height = '100px'; 
            }
            if(scrollPosition>=1150){
                ii[0].style.transform = `translatey(${-scrollPosition+400}px) rotate(15deg)`
                ii[1].style.transform = `translatey(${-scrollPosition+400}px) rotate(-7deg)`
                ii[0].style.opacity = '1'
                ii[1].style.opacity = '1'
            }
            if (scrollPosition>=1900) {
                Portfolio.style.fontSize = '50px';  
                Portfolio.style.opacity = "1"
            }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"

            }




            } 
            else { 
                imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.3}deg)`; // حرکت افقی  

            if (scrollPercent >= 5) {  
            halfElement.classList.add('tab');  
            } else {  
            halfElement.classList.remove('tab');  
            }  
            }  
            if(scrollPosition <= 40 || scrollPosition >= 780){
              halfElement.style.rotate = '0deg';
            }
            if (scrollPosition >=800) {
                txt1.style.opacity = '1'
            }else{
                txt1.style.opacity = '0'
            }
            if(scrollPosition>=1040){
                btn.style.opacity = '1'
                pt.style.opacity = '1'
                btn.style.marginBottom = '0px'
                pt.style.marginBottom = '0px'
            }else{
                btn.style.opacity = '0'
                pt.style.opacity = '0'
                btn.style.marginBottom = '-300px'
                pt.style.marginBottom = '-300px'
            }
            // if (scrollPosition>=1500) {
            //     const newSize = Math.min(600, scrollPosition - 1000)/1.1;
            //     circle.style.width = newSize + 'px';  
            //     circle.style.height = newSize + 'px'; 
            // }
            if(scrollPosition>=1550){
                ii[0].style.transform = `translatey(${-scrollPosition+400}px) rotate(15deg)`
                ii[1].style.transform = `translatey(${-scrollPosition+400}px) rotate(-7deg)`
                ii[0].style.opacity = '1'
                ii[1].style.opacity = '1'
            }
            // if (scrollPosition>=2500) {
            //     Portfolio.style.fontSize = '65px';  
            //     Portfolio.style.opacity = "1"
            // }else{
            //     Portfolio.style.fontSize = '1500px';
            //     Portfolio.style.opacity = "0"

            // }
            rahrah.forEach(sec=>{
                if (scrollPosition>=5500 && scrollPosition<=9200) {
                    sec.style.opacity = "0"
                }else{
                    sec.style.opacity = "1"
                    if (scrollPosition>=9200) {
                        sec.style.backgroundColor = 'rgb(231, 231, 219)'
                    }
                    else{
                        sec.style.backgroundColor = ' rgba(255, 255, 255, 0.548)'
                    }
                }
            })
            if(scrollPercent>=24 ){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=27){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }if(scrollPercent>=32){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
            if(scrollPosition>=8500){
                const newSize = Math.min(900, scrollPosition - 6400);  
                sun.style.width = newSize + 'px'
                sun.style.height = newSize + 'px'
            }
            else{
                sun.style.width = 300 + 'px'
                sun.style.height = 300 + 'px'
            }
            if (scrollPosition>=7400) {
                sun.classList.add("sunanimation")
            }else{
                sun.classList.remove("sunanimation")
            }
            if(scrollPosition>=8000){
                body.style.backgroundColor = "#f5f5eb"
            }else{
                body.style.backgroundColor = "#D2D3C3"
            }
            if (scrollPosition>=8400) {
                mentor.style.opacity = '1'
            }else{
                mentor.style.opacity = '0'
            }if(scrollPosition>=13000){
            }
            
        };  
        lis.forEach(li=>{
            li.addEventListener('mouseenter',()=>{
                lis.forEach(li=>{
                    li.classList.add('not-active')
                })
                li.classList.remove('not-active')
                li.classList.add('active')
            })
            li.addEventListener('mouseleave',()=>{
                lis.forEach(li=>{
                    li.classList.remove('not-active')
                })
                li.classList.remove('not-active')
                li.classList.remove('active')
            })
        })
        // ball 3d hover //
        
        imgElement.addEventListener('mousemove', (e) => {  
            const { top, left, width, height } = imgElement.getBoundingClientRect();  
            const mouseX = e.clientX - left - width / 2;  
            const mouseY = e.clientY - top - height / 2;  
    
            rotateX = Math.min(Math.max(mouseY / height * 20, -20), 20);  
            rotateY = Math.min(Math.max(mouseX / width * -20, -20), 20);  
    
            imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.5}deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;  
        });  
    
        imgElement.addEventListener('mouseleave', () => {  
            rotateX = 0;  
            rotateY = 0;  
            imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.5}deg) rotateY(0deg) rotateX(0deg)`;  
        });  
    
        window.addEventListener('scroll', handleScroll);  
    // pic 3d hover//  
     
    pics.forEach((pic) => {  
        pic.dataset.initialY = 0;  
        
        pic.addEventListener('mousemove', (e) => {  
            const { top, left, width, height } = pic.getBoundingClientRect();  
            const mouseX = (e.clientX - left) / width;  
            const mouseY = (e.clientY - top) / height;  
        
            const rotateY = (mouseX - 0.5) * 20;  
            const rotateX = (mouseY - 0.5) * -20;  
        
            const currentY = parseFloat(pic.dataset.initialY);  
            pic.style.transform = `rotateY(${rotateY / 3}deg) rotateX(${rotateX / 3}deg) translateY(${currentY}px)`;  
        });  
        
        pic.addEventListener('mouseleave', () => {  
            const currentY = parseFloat(pic.dataset.initialY);  
            pic.style.transform = `rotateY(0deg) rotateX(0deg) translateY(${currentY}px)`;  
        });  
        });  
        
        window.addEventListener('scroll', () => {  
        scrollPosition = window.scrollY;  
        
        pics.forEach((pic) => {  
            const speed = pic.dataset.speed;  
            const scrollspeed = -(scrollPosition * speed);  
            pic.dataset.initialY = scrollspeed; // ذخیره موقعیت  
            pic.style.transform = `translateY(${scrollspeed}px)`;  
        });  
        });  

        ///// tv slide ////
        const netrix = '../img/about/netrix-pic.png'
        const lifehouse = '../img/about/life-house-pic.png'
        const stacked = '../img/about/stacked-pic.png'
        const spaceneedle = '../img/about/space-needle-pic.png'
        const crisis = '../img/about/crisis-cleanup-pic.png'
        const wechallange = '../img/about/we-challenge-pic.png'
        const toughbuilt = '../img/about/toughbuilt-pic.png'
        const stanislav = '../img/about/stanislav-rapp-pic.png'
        console.log(lifehouse);
        
        tv.src = netrix
        figures.forEach((fig,index)=>{
            fig.addEventListener('click',()=>{
                if(!fig.classList.contains('actives')){
                    figures.forEach(img=>img.classList.remove('actives'))
                    fig.classList.add('actives')
                }
                tv.classList.add('tvstep1')
                setTimeout(()=>{
                    const data = imgs[index].dataset.name;  
                    tv.src = data  
                    tv.classList.remove('tvstep1')
                    tv.classList.add('tvstep2')
                },700)
                tv.classList.remove('tvstep2')
            })
        })

});  

///////// auto type /////////
const names = ['Teacher & Speaker']
        let demo = document.getElementById('auto')
        let i = 1
        let x = ''
        let k = 0
        let num = 0
        function setName() {
            x = names[num]
            k = x.length
            if (num < names.length-1) {
                num++
            } else {
                num = 0
            }
        }
        setName()
        const myWrite = () => {
            if(autotypeactive){
                if (i <= x.length) {
                demo.innerHTML = x.slice(0, i)
                i++
            } else {
                    setName()
                }
            }
            }
        setInterval(myWrite, 200);   

        
