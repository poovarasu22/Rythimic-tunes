
        // Music Player Functionality
        const playBtn = document.getElementById('playBtn');
        let isPlaying = false;

        playBtn.addEventListener('click', function() {
            if (isPlaying) {
                playBtn.classList.remove('fa-pause-circle');
                playBtn.classList.add('fa-play-circle');
            } else {
                playBtn.classList.remove('fa-play-circle');
                playBtn.classList.add('fa-pause-circle');
            }
            isPlaying = !isPlaying;
        });

        // Song selection
        const songCards = document.querySelectorAll('.song-card');
        songCards.forEach(card => {
            card.addEventListener('click', function() {
                // Update player with selected song info
                const songTitle = this.querySelector('h4').textContent;
                const artist = this.querySelector('p').textContent;
                const imgSrc = this.querySelector('img').src;
                
                document.querySelector('.song-info h3').textContent = songTitle;
                document.querySelector('.song-info p').textContent = artist;
                document.querySelector('.album-art img').src = imgSrc;
                
                // Ensure play button shows pause icon
                isPlaying = true;
                playBtn.classList.remove('fa-play-circle');
                playBtn.classList.add('fa-pause-circle');
            });
        });