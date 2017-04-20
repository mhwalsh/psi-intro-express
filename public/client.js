console.log('test sourced');

$(document).ready(docReady);

function docReady() {
  // event listeners
  $('#add-song').on('click', addSong);
}

function addSong() {
  var songTitle = $('#song-title').val();
  console.log('songTitle ->', songTitle);

  var objectToSend = {
    songName: songTitle
  }

  $.ajax({
    method: 'POST',
    url: '/song',
    data: objectToSend,
    success: function(response) {
      console.log(response);
    }
  })
}
