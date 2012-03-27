
module.exports = function() {
  return body(function() {
    div({
      id: 'wrap'
    }, function() {
      h1({
        "class": 'black_coffee'
      }, function() {
        return 'Black Coffee';
      });
      h4({
        "class": 'little_sugar'
      }, function() {
        return 'with a little sugar';
      });
      p({
        "class": 'text'
      }, function() {
        a({
          href: '/'
        }, function() {
          return '...or just plain black';
        });
        br();
        br();
        text('Built w/ ');
        a({
          href: 'https://github.com/gradus/black-coffee'
        }, function() {
          return 'black-coffee';
        });
        text(', a ');
        a({
          href: 'http://coffeescript.org/'
        }, function() {
          return 'CoffeeScript';
        });
        br();
        text(' and ');
        a({
          href: 'http://http://flatironjs.org/'
        }, function() {
          return 'Flatiron';
        });
        return text(' http server template.');
      });
      img({
        "class": 'fade_img',
        src: "/images/coffeesugar.jpg"
      });
      return p({
        "class": 'credits',
        style: 'float:right;padding-right:230px;'
      }, function() {
        text('created by ');
        return a({
          href: 'http://gradus.github.com/'
        }, function() {
          return 'Kris Windham';
        });
      });
    });
    return coffeescript(function() {
      return $(document).ready(function() {
        $('.black_coffee').hide();
        $('.little_sugar').hide();
        $('.text').hide();
        $('.fade_img').hide();
        $('.credits').hide();
        $('.black_coffee').fadeIn(1000);
        $('.little_sugar').fadeIn(3000);
        $('.text').fadeIn(4000);
        $('.fade_img').fadeIn(8000);
        return $('.credits').fadeIn(10000);
      });
    });
  });
};