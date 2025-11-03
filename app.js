pics.forEach((pic) => {  
    // تنظیم اولیه موقعیت  
    pic.dataset.initialY = 0;  
    
    pic.addEventListener('mousemove', (e) => {  
        const { top, left, width, height } = pic.getBoundingClientRect();  
        const mouseX = (e.clientX - left) / width;  
        const mouseY = (e.clientY - top) / height;  
    
        const rotateY = (mouseX - 0.5) * 20;  
        const rotateX = (mouseY - 0.5) * -20;  
    
        // حفظ موقعیت Y فعلی  
        const currentY = parseFloat(pic.dataset.initialY);  
        pic.style.transform = `rotateY(${rotateY / 3}deg) rotateX(${rotateX / 3}deg) translateY(${currentY}px)`;  
    });  
    
    pic.addEventListener('mouseleave', () => {  
        // برگرداندن چرخش در حالت برگشت  
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