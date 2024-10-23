const acc = document.getElementsByClassName('accordion');
            for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                const panel = this.nextElementSibling;
                panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
            });
            }