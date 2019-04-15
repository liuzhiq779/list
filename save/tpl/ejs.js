module.exports = `<!DOCTYPE html>
<html>
    <head>
      <meta charset="utf-8">
       <meat name="viewport"conten="width=device-width, initial-scale=1"
       <title> koa Server Html</title>
       <link href="https://cdn.bootcss.com/twitter-bootstrap/4.0.0-beta.2/css /bootstrap-reboot.min.css"
             rel="stylesheet" >
        <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js" ></script> 
       <script src="https://cdn.bootcss.com/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js"></script>
</head>
 <body>
    <div class="container">
     <div class="row">
      <div class="col-md-8">
       <h1>Hi <%= you %></h1>
       <p>this is <%= me %></p>

       </div>
     </div>
     <div class="col-md-4">
      <p>测试动态的 ejs 模板引擎</p>
    </div>
    </div>

</body>

</html>
`


// <html>
// <head>
// <script src="../ejs.js"></script>
//   <script id="users" type="text/template">
//   <% if (names.length) { %>
// <ul>
//   <% names.forEach(function(name){ %>
//   <li><%= name %></li>
//       <% }) %>
//   </ul>
//   <% } %>
// </script>
// <script>
// onload = function(){
//     var users = document.getElementById('users').innerHTML;
//     var names = ['loki', 'tobi', 'jane'];
//     var html = ejs.render(users, { names: names });
//     document.body.innerHTML = html;
//   }
//   </script>
//   </head>
//   <body>
//   </body>
//   </html>


