(function(){

var data = [
   {
      name: 'emmet',
      description: 'Emmet is the number one code snippet tool.',
      author: 'emmetio',
      url: 'https://atom.io/packages/emmet',
      downloads: 4761400,
      stars: 2927,
      price: 10.50,
      selector: 'p1'
   },
   {
      name: 'atom-beautify',
      description: 'The atom-beautify package will clean up your code, and make it more readable.',
      author: 'Glavin001',
      url: 'https://atom.io/packages/atom-beautify',
      downloads: 9133846,
      stars: 5492,
      price: 6.75,
      selector: 'p2'
   },
   {
      name: 'git-time-machine',
      description: 'It shows a visual time plot of commits to the current file over time in a time range.',
      author: 'littlebee',
      url: 'https://atom.io/packages/git-time-machine',
      downloads: 433999,
      stars: 1052,
      price: 12.34,
      selector: 'p3'
   }
];

function Package(data){
   this.name = data.name;
   this.description = data.description;
   this.author = data.author;
   this.url = data.url;
   this.downloads = data.downloads;
   this.stars = data.stars;
   this.price = data.price;
   this.selector = data.selector;

this.getFormattedDownloads = function(){
   return this.downloads.toLocaleString();
};

this.getFormattedStars = function(){
   return this.stars.toLocaleString();
};

};

var getTodaysDate = function(){
   var today = new Date();
   return today.toDateString();
};

var getEl = function(id){
   return document.getElementById(id);
};

var writePackageInfo = function(package){
   var selector = package.selector,
   nameEl = getEl(selector + '-name'),
   descEl = getEl(selector + '-description'),
   authEl = getEl(selector + '-author'),
   downloadEl = getEl(selector + '-downloads'),
   starsEl = getEl(selector + '-stars');
   
nameEl.textContent = package.name;
descEl.textContent = package.description;
authEl.textContent = package.author;
downloadEl.textContent = package.getFormattedDownloads();
starsEl.textContent = package.getFormattedStars();
};

var dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

var emmet = new Package(data[0]);
writePackageInfo(emmet);

var beautify = new Package(data[1]);
writePackageInfo(beautify);

var time = new Package(data[2]);
writePackageInfo(time);
}());