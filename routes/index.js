
/*
 * GET home page.
 */

exports.index = function(Link) {
  return function(req, res) {
    console.log("*** INDEX COM MongoDB ***");
    Link.find({}, function(error, data) {
       if(error) {
          console.log(">>> ERROR: " + error);
       }
       else {
          console.log("*** OK: " + JSON.stringify(data));
       }
      res.render('index', {
        title: 'MyLinks',
        "myLinks" : data
      });
    });
  };
};

/*
 * GET new data.
 */

exports.update = function(Link) {
   return function(req, res) {
      var resposta = "";
      console.log("*** Refresh dos dados ***");
      Link.find({}, function(error, data) {
       if(error) {
          console.log(">>> ERROR: " + error);
          resposta = {'erro' : error};
       }
       else {
          console.log("*** OK: " + JSON.stringify(data));
          resposta = data;
       }      
       res.header("Content-Type", "application/json; charset=utf-8");
       res.json({ 'myLinks' : resposta });
      });
   };
};