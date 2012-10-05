var maxId = 1,
    $target = $('#tweets'),
    hashtag = '%23dataforcities';

var fetch = function(hashtag) {
  $.getJSON('http://search.twitter.com/search.json?q='+hashtag+'&result_type=recent&callback=?',
    function(data){
      maxId = data.max_id;

      if (data.results.length) {
        $.each(data.results, function(i, result){
          $target.append('<div class="item well">' + result.text + '</div>');
        });

        $('.carousel').carousel({
          interval: 10000
        });
      }
    }
  );
};

fetch(hashtag);
setInterval(function(){
  fetch(hashtag);
}, 10000);


