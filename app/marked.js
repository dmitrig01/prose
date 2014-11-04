module.exports = function(text, a, b) {
  var request = new XMLHttpRequest();
  request.open('POST', '/marked', false);  // `false` makes the request synchronous
  request.send(text);

  if (request.status === 200) {
    if (typeof a == 'function') {
      a(null, request.responseText);
    }
    else if (typeof b == 'function') {
      b(null, request.resonseText);
    }
  }
};
