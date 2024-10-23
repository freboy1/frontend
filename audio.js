const sound = new Audio('./audio/mycar.m4a');
            document.getElementById('it-is-my-car').addEventListener('click', () => {
                sound.play();
            });