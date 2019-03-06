// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
    artist: 'Adele',
    album: '25',
    tracks: [
        'Hello',
        'Send My Love (To Your New Lover)',
        'I Miss You',
        'When We Were Young',
        'Remedy',
        'Water Under the Bridge',
        'River Lea',
        'Love in the Dark',
        'Million Years Ago',
        'All I Ask',
        'Sweetest Devotion'
    ]
}

// WRITE YOUR CODE ////////////////////////

//Album tracks title
for (let i = 0; i < album.tracks.length; i++) {

    const songName = document.createElement('li')
    songName.innerHTML = `
        <a href="#">${album.tracks[i]}</a>
    `
    songList.appendChild(songName)
}

//
songList.addEventListener('click', function (event) {

    let list = document.querySelectorAll('.nav-link')
    for (let i = 0; i < list.length; i++) {
        lyricsPanel.removeChild(list[i])
    }

    lyrics(album.artist, event.target.text)
})

function lyrics(artist, tracks) {
    let api = 'https://api.lyrics.ovh/v1/' + artist + '/' + tracks
    axios.get(api)
        .then(function (response) {

            lyricsPanel.innerHTML = `
                <h1>${tracks}</h1>
                <pre>${response.data.lyrics}<pre>
            `

        })
        .catch(function (error) {

        })
}