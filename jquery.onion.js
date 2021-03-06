/**
 * jquery.onion
 *
 * 0.0.2
 *
 * image lightbox
 */
;(function($) {

  $.fn.onion = function() {
    var $el = $(this),
        $body = $('body')

    var $overflow = $("<div>").addClass('onion-overflow')
          .appendTo('body')
          .hide()
          .on('click', function() {
            $(this).hide()
          }),
        $bigimg = $("<img>").addClass('onion-img').appendTo($overflow)

    return this.each(function() {
      $(this).on('click', function(e) {
        e.preventDefault()
        $bigimg.prop('src', $(this).prop('href'))
        $overflow.show()
      })
    })
  }

})(jQuery)
