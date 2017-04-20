console.log('test');

$(document).ready(docReady);

function docReady() {
  console.log('doc ready');

  //event listener
  $('#add-song').on('click', addSong);
}

// add Song function
function addSong() {
  console.log('in addSong');
  var songName = $('#song-name').val();
  console.log('songName ->', songName);

  var objectToSend = {
    name: songName
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
