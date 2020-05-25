const createAsideLinks = () => {
    const links = [
        {
            text: 'HTML',
            href: 'http://validator.w3.org/check/referer',
            title: 'Check the validity of this site&#8217;s HTML',
        },
        {
            text: 'CSS',
            href: 'http://jigsaw.w3.org/css-validator/check/referer',
            title: 'Check the validity of this site&#8217;s CSS',
        },
        {
            text: 'CC',
            href: 'http://creativecommons.org/licenses/by-nc-sa/3.0/',
            title: 'View the Creative Commons license of this site: Attribution-NonCommercial-ShareAlike.',
        },
        {
            text: 'A11y',
            href: 'http://mezzoblue.com/zengarden/faq/#aaa',
            title: 'Read about the accessibility of this site',
        },
        {
            text: 'GH',
            href: 'https://github.com/mezzoblue/csszengarden.com',
            title: 'Fork this site on Github',
        },
    ];

    const createLinks = (item) => {
        const link = item.href;
        const title = item.title;
        const text = item.text;
        return exotic += '<a class="sidebar__links__link" title="' + title + '" href="' + link + '">' + text + '</a>';
    }

    const exotic = "";
    links.forEach(createLinks);
    document.getElementById("sidebar__links").innerHTML = exotic;
};

const whatTime = () => {
    let timeNow = new Date().getHours();
    let image;

    if (timeNow > 0 && timeNow <= 3) {
        image = "9.png";
    } else if (timeNow > 3 && timeNow <= 12) {
        image = "8.png";
    } else if (timeNow > 12 && timeNow <= 16) {
        image = "7.png";
    } else {
        image = "10.png";
    }
    document.getElementById('time-image').style.backgroundImage = 'url("/images/' + image + '")';
}


const setTheme = (className) => {
    const body = document.getElementById("body");
    body.className = 'body ' + className;
    localStorage.setItem("theme", className);
}

const toggleVideo = (showVideo) => {
    let videoIndex = +localStorage.getItem("videoIndex") || 0;
    const videos = [
        'https://www.youtube.com/embed/Cg4X-TAOtTU?autoplay=1',
        'https://www.youtube.com/embed/tb-hsftn3MY?autoplay=1',
        'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1',
        'https://www.youtube.com/embed/K8e30t_HqBc?autoplay=1',
        'https://www.youtube.com/embed/YnvOQji6zZ0?autoplay=1'
    ];
    const display = showVideo ? 'block' : 'none';
    document.getElementById('video').src = showVideo ? videos[videoIndex] : null;
    document.getElementById('videos').style.display = display;

    if (showVideo) {
        videoIndex = videoIndex + 1;
        if (videoIndex >= videos.length) {
            videoIndex = 0;
        }
        localStorage.setItem("videoIndex", videoIndex);
    }
}

const init = () => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
    createAsideLinks();
}

init();
