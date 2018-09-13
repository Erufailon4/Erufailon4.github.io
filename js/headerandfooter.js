// HEADERANDFOOTER.JS
// (C) Erufailon4

function printHeaderAndFooter() {
    // print header
    document.getElementById('header').innerHTML = '<div class="w3-bar w3-black">'+
  '<a href="/" class="w3-bar-item w3-button w3-grey">Home</a>'+
  '<div class="w3-dropdown-hover">'+
      '<button class="w3-button">Mods</button>'+
      '<div class="w3-dropdown-content w3-bar-block w3-card-4">'+
          '<a href="/pages/ErufailonMod" class="w3-bar-item w3-button">ErufailonMod</a>'+
      '</div>'+
  '</div>'+
  '<a href="https://github.com/Erufailon4/Erufailon4.github.io" class="w3-bar-item w3-button w3-right">On GitHub <i class="fa fa-external-link"></i></a>'+
'</div>';
    // print footer
    document.getElementById('footer').innerHTML = '<div class="w3-black w3-text-white w3-center">'+
    '<p>&copy; Erufailon4 2018. </p>'+
    '<p>Published with <a href="https://pages.github.com/">GitHub Pages</a> </p>'+
    '<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" class="w3-hover-text-green">w3.css</a></p>'+
'</div>';
}