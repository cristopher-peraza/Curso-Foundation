$(document).foundation()

$('[data-toggle-dia]').click(function (ev){
  const panel = $(this).data('toggleDia')
  $('#lineup-tabs').fondation('selecTab',panel)
})

const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function (ev) {
  $offCanvas.foundation('close')
  setTineout(function (){
    $sticky.css('left','0px')
  },300)
})
