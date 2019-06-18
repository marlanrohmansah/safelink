//<![CDATA[
$(function(){
    $('a:not([href^="https://takwehi.blogspot.com"]):not([href^=#])').each(function(){
        var anc = $(this),
            href = anc.prop('href'),
            dataHref = anc.data('href');
  anc.attr('target','_blank');
        anc.prop('href', 'https://safelinkconvert.tokomarlan.com/p/generate.html?url=' + window.btoa(unescape(encodeURIComponent( href ))));
    });
});

//]]>
