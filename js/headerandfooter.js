// HEADERANDFOOTER.JS
// (C) Erufailon4

function printHeaderAndFooter() {
    // print header
    document.getElementById('header').innerHTML = '<div class="w3-bar w3-black">'+
    '<a href="/" class="w3-bar-item w3-button w3-grey">Home</a>'+
    '<div class="w3-dropdown-hover">'+
        '<button class="w3-button">Web Apps</button>'+
        '<div class="w3-dropdown-content w3-bar-block w3-card-4">'+
            '<a href="/pages/calculator" class="w3-bar-item w3-button">Calculator</a>'+
            '<a href="/pages/countdown" class="w3-bar-item w3-button">Countdown Generator</a>'+
            '<a href="/pages/rss_generator" class="w3-bar-item w3-button">RSS Generator</a>'+
        '</div>'+
    '</div>'+
    '<div class="w3-dropdown-hover">'+
        '<button class="w3-button">Mods</button>'+
        '<div class="w3-dropdown-content w3-bar-block w3-card-4">'+
            '<a href="/pages/ErufailonMod" class="w3-bar-item w3-button">ErufailonMod</a>'+
        '</div>'+
    '</div>'+
    '<div class="w3-dropdown-hover">'+
        '<button class="w3-button">Tutorials</button>'+
        '<div class="w3-dropdown-content w3-bar-block w3-card-4">'+
            '<a href="https://github.com/Erufailon4/Rift-Tutorial/wiki" class="w3-bar-item w3-button">Modding with Rift <i class="fa fa-external-link"></i></a>'+
        '</div>'+
    '</div>'+
    '<a href="https://github.com/Erufailon4" class="w3-bar-item w3-button w3-right">On GitHub <i class="fa fa-external-link"></i></a>'+
    '</div>';
    // print footer
    document.getElementById('footer').innerHTML = '<div class="w3-black w3-text-white w3-center">'+
    '<p>&copy; Erufailon4 2018&#8211;. </p>'+
    '<p>Published with <a href="https://pages.github.com/">GitHub Pages</a> </p>'+
    '<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" class="w3-hover-text-green">w3.css</a></p>'+
    '</div>';
}