jQuery(document).ready(function($) {
  $('div.hentry').jScrollPane({
    scrollbarWidth:25,
    scrollbarMargin:0,
    showArrows:true,
    dragMinHeight:17,
    dragMaxHeight:17
  });
  $('a[rel=gallery]').fancybox({
    overlayColor: '#3b2402',
    overlayOpacity: .95
  });
  $('div.textarea').css('height', '90px')
  .jScrollPane({
    scrollbarWidth:11,
    scrollbarMargin:0,
    showArrows:true,
    dragMinHeight:7,
    dragMaxHeight:7,
    maintainPosition: true
  });
  $('form .jScrollPaneContainer').after('<span class="input"></span>');
});
