
        const toggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const message = document.querySelector('.message');

        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                message.textContent = 'Dark mode activated';
                
                // Ripple effect on toggle
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.background = 'rgba(255, 255, 255, 0.3)';
                ripple.style.width = '100%';
                ripple.style.height = '100%';
                ripple.style.top = '0';
                ripple.style.left = '0';
                ripple.style.animation = 'ripple 0.6s ease-out';
                toggle.appendChild(ripple);
                
                setTimeout(() => {
                    toggle.removeChild(ripple);
                }, 600);
            } else {
                message.textContent = 'Light mode activated';
            }
        });

        // Add this to the style section
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);