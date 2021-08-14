const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: 'Muộn rồi mà sao còn',
            singer: 'Sơn Tùng MTP',
            path: '../music/song1.mp3',
            image: './assets/img/song1.jpg'
        },
        {
            name: 'Lặng nghe nước mắt',
            singer: 'Mr Siro',
            path: '../music/song2.mp3',
            image: './assets/img/song2.jpg'
        },
        {
            name: 'Tự lau nước mắt',
            singer: 'Mr Siro',
            path: '../music/song3.mp3',
            image: './assets/img/song3.jpg'
        },
        {
            name: 'Tình yêu chấp vá',
            singer: 'Mr Siro',
            path: '../music/song4.mp3',
            image: './assets/img/song4.jpg'
        },
        {
            name: 'Gương mặt lạ lẫm',
            singer: 'Mr Siro',
            path: '../music/song5.mp3',
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

    handleEvents: function () {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth;
        }
    },

    start: function () {
        this.handleEvents();

        this.render();
    }
}

app.start();