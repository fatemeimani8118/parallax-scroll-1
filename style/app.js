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
            const Portfolio = document.querySelector("#title-portfolio")
            const top = document.querySelector('#top')
            const down = document.querySelector('#down')
            const sun = document.querySelector('#sun')
            const pics = document.querySelectorAll(".pic")
            const rahrah = document.querySelectorAll(".section")
            const mentor = document.querySelector("#Mentorship")
            const smooth = document.querySelectorAll('.smooth')
            const imgs = document.querySelectorAll('.image')
            const about = document.querySelector('#about')
            const figures = document.querySelectorAll('figure')
            const tv = document.querySelector('#tv')
            const items = document.querySelectorAll('.item')
            const portbtn = document.querySelector("#b1")
            const keybtn = document.querySelector("#b2")
            const aboutbtn = document.querySelector("#b3")
            const link = document.querySelector('#link')
            const footer = document.querySelector('#footer')
            let scrollPosition = 0;
            let currentX = 0;
            let rotateX = 0;
            let rotateY = 0;
            window.scrollTo(0, 0);
            let currentScrollY = 0;
            let targetScrollY = 0;

            


            ///////////////////auto menu logo ////////////////////

            let current = 0
            function slide() {
                setInterval(()=>{
                    items.forEach(li => {
                    li.classList.remove('elevator')
                });
                current = (current+1)%items.length
                items[current].classList.add('elevator')
                },2000)
            }
            slide()

            const handleScroll = () => {  
            const scrollY = window.scrollY;  
            const innerHeight = window.innerHeight;  
            const scrollHeight = document.documentElement.scrollHeight;  
            const totalHeight = scrollHeight - innerHeight;  
            const scrollPercent = (scrollY / totalHeight) * 100;  

            console.log(`Scrolled: ${scrollPercent}%`); 

            
            window.addEventListener('scroll', () => {
                targetScrollY = window.scrollY;
            });
            
            const scrollPosition = window.scrollY ; 
            console.log(`Scrolled: ${scrollPosition}%`);  
   

                
                halfElement.style.rotate = '20deg'
                imgElement.style.rotate = '20deg'
                currentX = scrollPosition * 3; 

            ///////////////////////responsive part /////////////////////
            const mediaQueries = {
                xsmall: window.matchMedia("(max-width: 400px)"),
                small: window.matchMedia("(min-width: 401px) and (max-width: 480px)"),
                mobile: window.matchMedia("(min-width: 481px) and (max-width: 768px)"),
                tablet: window.matchMedia("(min-width: 769px) and (max-width: 1024px)"),
                desktop: window.matchMedia("(min-width: 1025px) and (max-width: 1200px)"),
                biglaptop: window.matchMedia("(min-width: 1201px) and (max-width: 1440px)")
            }
            ///////////// xsmall mobile responsive //////////
            if(mediaQueries.xsmall.matches){
                if (scrollPercent>= 2.2) {  
             halfElement.classList.add('tab');  
             halfElement.style.rotate = '0deg'
            } else {  
             halfElement.classList.remove('tab');  
            }  
            if (scrollPercent>= 14) {
                Portfolio.style.fontSize = '50px';  
                Portfolio.style.opacity = "1"
                }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"
            }
            if(scrollPercent>= 24){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=32){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }
            rahrah.forEach(sec=>{
                if (scrollPercent>=34 && scrollPercent<=72) {
                    sec.style.opacity = "0"
                }else{
                    sec.style.opacity = "1"
                    if (scrollPercent>=72 ) {
                        sec.style.backgroundColor = 'rgba(81, 115, 63, 0.3)'
                    }
                    else{
                        sec.style.backgroundColor = ' rgba(255, 255, 255, 0.548)'
                    }
                }
            })
            if(scrollPercent>= 40){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
            if(scrollPercent>=46){
                const newSize = Math.min(900, scrollPosition - 4000);  
                sun.style.width = newSize + 'px'
                sun.style.height = newSize + 'px'
                console.log('hi');
            }
            else{
                sun.style.width = 100 + 'px'
                sun.style.height = 100 + 'px'
            }
            if (scrollPercent>=56) {
                sun.classList.add("sunanimation")
            }else{
                sun.classList.remove("sunanimation")
            }
            if(scrollPercent>=62){
                body.style.backgroundColor = "#f5f5eb"
            }else{
                body.style.backgroundColor = "#D2D3C3"
            }
            if (scrollPercent>=66) {
                mentor.style.opacity = '1'
            }else{
                mentor.style.opacity = '0'
            }
            if (scrollPercent >=83 ) {
             about.classList.add('aboutanime')   
            }
                console.log('its xsmall mobile');
            }
            ///////////// small mobile responsive ////////////
            else if(mediaQueries.small.matches){
                 if (scrollPercent>= 3.1) {  
             halfElement.classList.add('tab');  
             halfElement.style.rotate = '0deg'
            } else {  
             halfElement.classList.remove('tab');  
            }  
            if (scrollPercent>= 15) {
                Portfolio.style.fontSize = '50px';  
                Portfolio.style.opacity = "1"
                }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"
            }
            if(scrollPercent>= 30){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=36){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }
            if(scrollPercent>=48){
                const newSize = Math.min(900, scrollPosition -4500);  
                sun.style.width = newSize + 'px'
                sun.style.height = newSize + 'px'
                console.log('hi');
            }
            else{
                sun.style.width = 100 + 'px'
                sun.style.height = 100 + 'px'
            }
            if (scrollPercent>=58) {
                sun.classList.add("sunanimation")
            }else{
                sun.classList.remove("sunanimation")
            }
            rahrah.forEach(sec=>{
                if (scrollPercent>=34 && scrollPercent<=72) {
                    sec.style.opacity = "0"
                }else{
                    sec.style.opacity = "1"
                    if (scrollPercent>=72 ) {
                        sec.style.backgroundColor = 'rgba(81, 115, 63, 0.3)'
                    }
                    else{
                        sec.style.backgroundColor = ' rgba(255, 255, 255, 0.548)'
                    }
                }
            })
            if(scrollPercent>=59){
                body.style.backgroundColor = "#f5f5eb"
            }else{
                body.style.backgroundColor = "#D2D3C3"
            }
            if (scrollPercent>=66) {
                mentor.style.opacity = '1'
            }else{
                mentor.style.opacity = '0'
            }
            if (scrollPercent >=83 ) {
             about.classList.add('aboutanime')   
            }
                if(scrollPercent>=42){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
                console.log('its small mobile');
            }
            //////////////// mobile responsive //////////////
            else if(mediaQueries.mobile.matches){
                if (scrollPercent>= 4.1) {  
         halfElement.classList.add('tab');  
         halfElement.style.rotate = '0deg'
        } else {  
         halfElement.classList.remove('tab');  
        }  
        if (scrollPercent>= 18) {
                Portfolio.style.fontSize = '50px';  
                Portfolio.style.opacity = "1"
                }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"
            }
            if(scrollPercent>= 30){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=36){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }
        if(scrollPercent>=48){
            const newSize = Math.min(900, scrollPosition - 5400);  
            sun.style.width = newSize + 'px'
            sun.style.height = newSize + 'px'
            console.log('hi');
        }
        else{
            sun.style.width = 100 + 'px'
            sun.style.height = 100 + 'px'
        }
        if (scrollPercent>=54) {
            sun.classList.add("sunanimation")
        }else{
            sun.classList.remove("sunanimation")
        }
        if(scrollPercent>=68){
            body.style.backgroundColor = "#f5f5eb"
        }else{
            body.style.backgroundColor = "#D2D3C3"
        }
        if (scrollPercent>=66) {
            mentor.style.opacity = '1'
        }else{
            mentor.style.opacity = '0'
        }
        rahrah.forEach(sec=>{
                if (scrollPercent>=34 && scrollPercent<=72) {
                    sec.style.opacity = "0"
                }else{
                    sec.style.opacity = "1"
                    if (scrollPercent>=72 ) {
                        sec.style.backgroundColor = 'rgba(81, 115, 63, 0.3)'
                    }
                    else{
                        sec.style.backgroundColor = ' rgba(255, 255, 255, 0.548)'
                    }
                }
            })
                if(scrollPercent>=42){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
                console.log('its mobile');
            }
            //////////////// tablet responsive //////////////
            else if(mediaQueries.tablet.matches){
                if (scrollPercent>= 4) {  
             halfElement.classList.add('tab');  
             halfElement.style.rotate = '0deg'
             console.log('im ok');
            } else {  
             halfElement.classList.remove('tab');  
            }  
            if (scrollPercent>= 17) {
                Portfolio.style.fontSize = '50px';  
                Portfolio.style.opacity = "1"
                }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"
            }
            if(scrollPercent>= 30){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=36){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }
                if(scrollPercent>=42){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
             if(scrollPercent>=46){
                const newSize = Math.min(900, scrollPosition - 5500);  
                sun.style.width = newSize + 'px'
                sun.style.height = newSize + 'px'
                console.log('hi');
            }
            else{
                sun.style.width = 0 + 'px'
                sun.style.height = 0 + 'px'
            }
            if (scrollPercent>=53) {
                sun.classList.add("sunanimation")
            }else{
                sun.classList.remove("sunanimation")
            }
            if(scrollPercent>=58){
                body.style.backgroundColor = "#f5f5eb"
            }else{
                body.style.backgroundColor = "#D2D3C3"
            }
            if (scrollPercent>=55) {
                mentor.style.opacity = '1'
            }else{
                mentor.style.opacity = '0'
            }
            if (scrollPercent >=83 ) {
             about.classList.add('aboutanime')   
            }
                console.log('its tablet');
            }
            //////////////// desktop responsive /////////////
            else if (mediaQueries.desktop.matches) {
                if (scrollPercent>= 5.3) {  
             halfElement.classList.add('tab');  
             halfElement.style.rotate = '0deg'
            } else {  
             halfElement.classList.remove('tab');  
            }
                if (scrollPercent>= 18) {
                Portfolio.style.fontSize = '50px';  
                Portfolio.style.opacity = "1"
                }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"
            }
            if(scrollPercent>=31 ){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=36){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }
            if(scrollPercent>= 43){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
            if(scrollPercent>=47){
                const newSize = Math.min(900, scrollPosition - 5700);  
                sun.style.width = newSize + 'px'
                sun.style.height = newSize + 'px'
                console.log('hi');
            }
            else{
                sun.style.width = 200 + 'px'
                sun.style.height = 200 + 'px'
            }
            if (scrollPercent>=54) {
                sun.classList.add("sunanimation")
            }else{
                sun.classList.remove("sunanimation")
            }
            if(scrollPercent>=58){
                body.style.backgroundColor = "#f5f5eb"
            }else{
                body.style.backgroundColor = "#D2D3C3"
            }
            if (scrollPercent>=60) {
                mentor.style.opacity = '1'
            }else{
                mentor.style.opacity = '0'
            }
            if (scrollPercent >= 85 ) {
             about.classList.add('aboutanime')   
            }
                console.log('its desktop');
            }
            //////////////// big laptop responsive /////////////
            else if (mediaQueries.biglaptop.matches) {
                if (scrollPercent>= 5) {  
             halfElement.classList.add('tab');  
             halfElement.style.rotate = '0deg'
            } else {  
             halfElement.classList.remove('tab');  
            }
            if (scrollPercent>= 18) {
                Portfolio.style.fontSize = '70px';  
                Portfolio.style.opacity = "1"
            }else{
                Portfolio.style.fontSize = '1500px';
                Portfolio.style.opacity = "0"
            }
               if(scrollPercent>=31 ){
                top.style.transform = 'translateX(0)'
                top.style.opacity = '1'
            }else{
                top.style.transform = 'translateX(-1200px)'
                top.style.opacity = '0'
            }
            if(scrollPercent>=34){
                down.style.transform = 'translateY(0)'
                down.style.opacity = '1'
            }else{
                down.style.transform = 'translatey(500px)'
                down.style.opacity = '0'
            }
            rahrah.forEach(sec=>{
                if (scrollPercent>=34 && scrollPercent<=68) {
                    sec.style.opacity = "0"
                }else{
                    sec.style.opacity = "1"
                    if (scrollPercent>=68 ) {
                        sec.style.backgroundColor = 'rgba(81, 115, 63, 0.3)'
                    }
                    else{
                        sec.style.backgroundColor = ' rgba(255, 255, 255, 0.548)'
                    }
                }
            })
            if(scrollPercent>= 42){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
            if(scrollPercent>=45){
                const newSize = Math.min(900, scrollPosition - 6600);  
                sun.style.width = newSize + 'px'
                sun.style.height = newSize + 'px'
                console.log('hi');
            }
            else{
                sun.style.width = 200 + 'px'
                sun.style.height = 200 + 'px'
            }
            if (scrollPercent>=54) {
                sun.classList.add("sunanimation")
            }else{
                sun.classList.remove("sunanimation")
            }
            if(scrollPercent>=58){
                body.style.backgroundColor = "#f5f5eb"
            }else{
                body.style.backgroundColor = "#D2D3C3"
            }
            if (scrollPercent>=60) {
                mentor.style.opacity = '1'
            }else{
                mentor.style.opacity = '0'
            }
            if (scrollPercent >= 79 ) {
                about.classList.add('aboutanime')   
            }
            console.log('its big laptop');
            }
            else{
                console.log("i dont know ");
                
            }
            
            //////////////////////footer links ////////////////////////////
            footer.addEventListener('click',()=>{
                link.style.marginBottom = '0px'
            })

            if (window.innerWidth <= 768) {
                imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.7}deg)`;  
            if (scrollPosition>=1100) {
                const newSize = Math.min(400, scrollPosition - 1100);
                circle.style.width = newSize + 'px';  
                circle.style.height = newSize + 'px'; 
            } else{
                circle.style.width = '100px';  
                circle.style.height = '100px'; 
            }
            if(scrollPercent>=9.2){
                ii[0].style.transform = `translateY(${-scrollPosition+400}px) rotate(15deg)`
                ii[1].style.transform = `translateY(${-scrollPosition+400}px) rotate(-7deg)`
                ii[0].style.opacity = '1'
                ii[1].style.opacity = '1'
            }
            // if (scrollPercent>=17) {
            //     Portfolio.style.fontSize = '50px';  
            //     Portfolio.style.opacity = "1"
            // }else{
            //     Portfolio.style.fontSize = '1500px';
            //     Portfolio.style.opacity = "0"

            // }
            } 
            else { 
                imgElement.style.transform = `translateX(${currentX}px) rotate(${scrollPosition * 0.3}deg)`;  
            }  
            if(scrollPosition <= 40 || scrollPosition >= 780){
              halfElement.style.rotate = '0deg';
            }
            if (scrollPercent >=6) {
                txt1.style.opacity = '1'
                btn.style.marginBottom = '0px'
                btn.style.opacity = '1'
            }else{
                txt1.style.opacity = '0'
                btn.style.marginBottom = '-300px'
                btn.style.opacity = '0'
            }
            if(scrollPercent>=7){
                pt.style.opacity = '1'
                pt.style.marginBottom = '0px'
            }else{
                pt.style.opacity = '0'
                pt.style.marginBottom = '-300px'
            }
            if(scrollPosition>=1550){
                ii[0].style.transform = `translatey(${-scrollPosition+400}px) rotate(15deg)`
                ii[1].style.transform = `translatey(${-scrollPosition+400}px) rotate(-7deg)`
                ii[0].style.opacity = '1'
                ii[1].style.opacity = '1'
            }
            // rahrah.forEach(sec=>{
            //     if (scrollPercent>=38.5 && scrollPercent<=75) {
            //         sec.style.opacity = "0"
            //     }else{
            //         sec.style.opacity = "1"
            //         if (scrollPercent>=77) {
            //             sec.style.backgroundColor = 'rgba(81, 115, 63, 0.3)'
            //         }
            //         else{
            //             sec.style.backgroundColor = ' rgba(255, 255, 255, 0.548)'
            //         }
            //     }
            // })
            // if(scrollPercent>=29 ){
            //     top.style.transform = 'translateX(0)'
            //     top.style.opacity = '1'
            // }else{
            //     top.style.transform = 'translateX(-1200px)'
            //     top.style.opacity = '0'
            // }
            // if(scrollPercent>=37){
            //     down.style.transform = 'translateY(0)'
            //     down.style.opacity = '1'
            // }else{
            //     down.style.transform = 'translatey(500px)'
            //     down.style.opacity = '0'
            // }
            if(scrollPercent>=45){
                autotypeactive = true
                myWrite()
            }else{
                autotypeactive = false
            }
            // if(scrollPercent>=50){
            //     const newSize = Math.min(900, scrollPosition - 5000);  
            //     sun.style.width = newSize + 'px'
            //     sun.style.height = newSize + 'px'
            // }
            // else{
            //     sun.style.width = 0 + 'px'
            //     sun.style.height = 0 + 'px'
            // }
            // if (scrollPercent>=65) {
            //     sun.classList.add("sunanimation")
            // }else{
            //     sun.classList.remove("sunanimation")
            // }
            // if(scrollPercent>=70){
            //     body.style.backgroundColor = "#f5f5eb"
            // }else{
            //     body.style.backgroundColor = "#D2D3C3"
            // }
            // if (scrollPercent>=72) {
            //     mentor.style.opacity = '1'
            // }else{
            //     mentor.style.opacity = '0'
            // }if(scrollPosition>=13000){
            // }
            
        };  
        portbtn.addEventListener('click',()=>{
                window.scrollTo({
                    top: document.querySelector('#Portfolio').offsetTop,
                    behavior: 'smooth'
                })
            })
        keybtn.addEventListener('click',()=>{
                window.scrollTo({
                    top: document.querySelector('#key').offsetTop,
                    behavior: 'smooth'
                })
            })
        aboutbtn.addEventListener('click',()=>{
                window.scrollTo({
                    top: document.querySelector('#about').offsetTop,
                    behavior: 'smooth'
                })
            })
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

        ///// tv slide show////
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
        //////////scroll animation /////////////////

        function animate() {
          currentScrollY += (targetScrollY - currentScrollY) * 0.1;
          smooth.forEach(section => {
            section.style.transform = `translateY(${-currentScrollY}px)`;
          });
          requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
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

        
