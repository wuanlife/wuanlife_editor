Quill.register('modules/counter', function(quill, options) {
  var container = document.querySelector(options.container);
  quill.on('text-change', function() {
    var text = quill.getText();
    console.log(text);
    if (options.unit === 'word') {
      container.innerText = text.split(/\s+/).length + ' words';
    } else {
      container.innerText = text.length + ' characters';
    }
  });
});

var quill = new Quill('#editor-container', {
  modules: {
    counter: {
      container: '#counter',
      unit: 'word'
    }
  }
});

// var quill = new Quill('#editor-container', {
//     debug: true,
//     modules: {
//       toolbar: [
//         [{ header: [1, 2, false] }],
//         ['bold', 'italic', 'underline'],
//         ['image', 'code-block', 'link'],
//         ['video']
//       ],
//     },
//     handlers: {
//       // handlers object will be merged with default handlers object
//       'link': function(value) {
//         if (value) {
//           var href = prompt('Enter the URL');
//           this.quill.format('link', href);
//         } else {
//           this.quill.format('link', false);
//         }
//       }
//     },
//     placeholder: 'Compose an epic...',
//     theme: 'snow'  // or 'bubble'
// });
