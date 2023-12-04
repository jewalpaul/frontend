document.getElementById('file-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {
        document.getElementById('upload-text').textContent = 'Selected file: ' + file.name;
    }
});
document.getElementById('remove-bg-button').addEventListener('click', function() {
      var fileUpload = document.getElementById('file-upload');
      var uploadText = document.getElementById('upload-text');
      var downloadLink = document.getElementById('download-link');
      var formatOptions = document.getElementById('format-options');
      var downloadContainer = document.getElementById('download-container');
      var files = fileUpload.files;
          if (files.length > 10) {
              alert('You can only upload up to 10 images at a time.');
              return;
          }
          for (var i = 0; i < files.length; i++) {
              var file = files[i];
              uploadText.textContent = file.name + '\n';
              var formData = new FormData();
              formData.append('file', file);
              fetch('http://127.0.0.1:81/remove-bg', {
                  method: 'POST',
                  body: formData
              })
              .then(response => response.blob())
              .then(image => {
                  downloadContainer.style.display = 'block';
                  formatOptions.style.display = 'block';
                  var imageUrl = URL.createObjectURL(image);
                  downloadLink.href = imageUrl;
                  downloadLink.download = 'image.' + formatOptions.value;
              })
              .catch(error => console.error('An error occurred while removing the background:', error));
          }
      });