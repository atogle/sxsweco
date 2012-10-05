var $target = $('#tweets'),
    tweetIds = [],
    hashtag = '%23dataforcities';

var fetch = function(hashtag) {
  var url = 'http://search.twitter.com/search.json?q='+hashtag+'&result_type=recent&rpp=5&show_user=true&callback=?';

  $.getJSON(url,
    function(data){
      // console.log(data);
      var added = 0;

      if (data.results.length) {
        $.each(data.results, function(i, result) {
          var active = '';
          if (tweetIds.indexOf(result.id) < 0) {
            if ($target.children().length === 0) {
              active = ' active';
            }
            $target.append('<div class="item well'+active+'"><small>@'+result.from_user + ' says:</small><br><strong>' + result.text + '</strong></div>');

            tweetIds.push(result.id);
            added++;
          }
        });
      }

      // console.log('added', added);
    }
  );
};

fetch(hashtag);
setInterval(function(){
  fetch(hashtag);
}, 10000);

$('.carousel').carousel({
  interval: 10000
});

