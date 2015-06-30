var MyController = Marionette.Controller.extend({
  home: function() {},
  contact: function() {console.log('hey2');},
  about: function() {console.log('hey2');}
});

// Instantiate it
var myController = new MyController();

// Pass it into the Router
var myRouter = new Marionette.AppRouter({
  controller: myController,
  appRoutes: {
    "home": "home",
    "contact": "contact",
    "about": "about"
  }
});

var app = {};

var app = new Mn.Application();

app.addRegions({
  mainRegion: "#main-content"
});


// Start history when our application is ready
app.on('start', function() {
  Backbone.history.start({pushState: true});
});

app.start();


var MyView = Marionette.ItemView.extend({
  template: "#content-home"
});

var view = new MyView();

//view.render(); //=> "I 100% think that Marionette is the coolest!";
app.mainRegion.show(view);
//layoutView.getRegion('menu').show(view.render());