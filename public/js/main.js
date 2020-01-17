function createAsideLinks () {
    var links = [
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

    function createLinks(item) {
        var link = item.href;
        var title = item.title;
        var text = item.text;
        return exotic += '<a class="sidebar__links__link" title="' + title + '" href="' + link + '">' + text + '</a>';
    }

    var exotic = "";
    links.forEach(createLinks);
    document.getElementById("sidebar__links").innerHTML = exotic;
}

createAsideLinks();

function whatTime () {
    var timeNow = new Date().getHours();
    var image;

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


function setTheme(className) {
    var body = document.getElementById("body");
    body.className = 'body ' + className;
}0.