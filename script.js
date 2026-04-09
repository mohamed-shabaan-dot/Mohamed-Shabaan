   // Loading Screen
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
            }, 500);
        }, 1500);
    });

    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // Particles.js Configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00d4ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00d4ff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Navigation toggle for mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.98)';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });

    // Scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = target + '+';
        }
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        animateCounter(counter);
                    }, index * 200);
                });
                statsObserver.disconnect(); // Prevent re-animation
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => statsObserver.observe(counter));

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = encodeURIComponent(`رسالة جديدة من الموقع

الاسم: ${name}
البريد: ${email}
الهاتف: ${phone}
الموضوع: ${subject}
الرسالة: ${message}`);

        window.open(`https://wa.me/201007578294?text=${whatsappMessage}`, '_blank');

        alert('شكرًا لتواصلك! سيتم تحويلك إلى واتساب لإرسال الرسالة.');
        this.reset();
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < originalText.length) {
            heroTitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 2000);

    // Parallax floating code
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.floating-code').forEach((code, index) => {
            const speed = (index + 1) * 0.05;
            code.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Magnetic Button Effect
    document.querySelectorAll('.btn, .social-link, .skill-tag').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });

    // 3D tilt for cards
    document.querySelectorAll('.skill-category, .project-card, .service-card, .testimonial-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00d4ff, #0099cc);
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-5px) scale(1.1)';
    });
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0) scale(1)';
    });

    // Update footer year
    document.querySelector('.copyright').innerHTML = `
        &copy; ${new Date().getFullYear()} محمد شبعان. جميع الحقوق محفوظة.
        <br>
        <span style="font-size: 0.9rem; opacity: 0.7;">صنع بـ <i class="fas fa-heart" style="color: #ff6b6b;"></i> و ☕ في مصر</span>
    `;

    // Tooltip for social links
    document.querySelectorAll('.social-link').forEach(link => {
        link.setAttribute('title', `تابعني على ${link.textContent.trim()}`);
    });

    // Console message
    console.log('%c👋 Hey Developer!', 'font-size: 20px; font-weight: bold; color: #00d4ff;');
    console.log('%cInterested in the code? Check out my portfolio!', 'font-size: 14px; color: #ff6b6b;');
    console.log('%cBuilt with ❤️ by Mohamed Shabaan', 'font-size: 12px; color: #4ecdc4;');
    console.log('%chttps://mohamed-shabaan.vercel.app', 'font-size: 12px; color: #667eea;');

    // Animate sections on load
    window.addEventListener('load', () => {
        document.querySelectorAll('section').forEach((section, index) => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = `all 0.8s ease ${index * 0.1}s`;
        });
    });

    // Animate glow on scroll
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.skill-category, .project-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.style.boxShadow = `0 0 ${30 + Math.random() * 20}px rgba(0, 212, 255, ${0.1 + Math.random() * 0.2})`;
            }
        });
    });

    // Konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = 'rainbow 2s linear infinite';
                alert('🎉 Easter Egg Activated! You found the secret! 🎉');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    const style = document.createElement('style');
    style.innerHTML = `@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }`;
    document.head.appendChild(style);

    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));

    // Button loading animation
    document.querySelectorAll('.btn').forEach(btn => {
        btn.setAttribute('data-original', btn.innerHTML);
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-check"></i> تم بنجاح!';
                    setTimeout(() => {
                        this.innerHTML = this.getAttribute('data-original');
                    }, 2000);
                }, 1500);
            }
        });
    });
