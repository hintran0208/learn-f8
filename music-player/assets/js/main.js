const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player')
const cd = $('.cd');
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')

const app = {
    currentIndex: 0,
    songs: [
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng MTP',
            path: './assets/music/song1.mp3',
            image: './assets/img/song1.jpg'
        },
        {
            name: 'Lặng nghe nước mắt',
            singer: 'Mr Siro',
            path: './assets/music/song2.mp3',
            image: './assets/img/song2.jpg'
        },
        {
            name: 'Tự lau nước mắt',
            singer: 'Mr Siro',
            path: './assets/music/song3.mp3',
            image: './assets/img/song3.jpg'
        },
        {
            name: 'Tình yêu chấp vá',
            singer: 'Mr Siro',
            path: './assets/music/song4.mp3',
            image: './assets/img/song4.jpg'
        },
        {
            name: 'Gương mặt lạ lẫm',
            singer: 'Mr Siro',
            path: './assets/music/song5.mp3',
            image: './assets/img/song5.jpg'
        }
    ],

    render: function () {
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
                    <div
                        class="thumb"
                        style="
                        background-image: url('${song.image}');
                        "
                    ></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        })
        $('.playlist').innerHTML = htmls.join('');

    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function () {

        const cdWidth = cd.offsetWidth;

        // Zoom in out Cd
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // Play audio when click
        playBtn.onclick = function () {
            audio.play()
            player.classList.add('playing')
        }
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    start: function () {
        // Define property for object
        this.defineProperties()

        // Listen and operate DOM events
        this.handleEvents();

        // Load first song on ui when running
        this.loadCurrentSong();

        // Render playlist
        this.render();
    }
}

app.start();