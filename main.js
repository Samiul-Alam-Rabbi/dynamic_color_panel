$(document).ready(function(){
    $('.control-btn').click(function(){
        $('#panel-box').toggleClass('controlbtnactive');
    })
    $('.red-color').click(function(){
        $('body').addClass('red-color-bar').css({"color": "red", "font-size": "24px"}).removeClass('green-color-bar').removeClass('yellow-color-bar').removeClass('violet-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    $('.green-color').click(function(){
        $('body').addClass('green-color-bar').css({"color": "green", "font-size": "24px"}).removeClass('red-color-bar').removeClass('yellow-color-bar').removeClass('violet-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    $('.yellow-color').click(function(){
        $('body').addClass('yellow-color-bar').css({"color": "yellow", "font-size": "24px"}).removeClass('green-color-bar').removeClass('red-color-bar').removeClass('violet-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    $('.violet-color').click(function(){
        $('body').addClass('violet-color-bar').css({"color": "violet", "font-size": "24px"}).removeClass('red-color-bar').removeClass('yellow-color-bar').removeClass('green-color-bar').removeClass('cyan-color-bar').removeClass('blue-color-bar')
    })
    $('.cyan-color').click(function(){
        $('body').addClass('cyan-color-bar').css({"color": "cyan", "font-size": "24px"}).removeClass('green-color-bar').removeClass('red-color-bar').removeClass('yellow-color-bar').removeClass('violet-color-bar').removeClass('blue-color-bar')
    })
    $('.blue-color').click(function(){
        $('body').addClass('blue-color-bar').css({"color": "blue", "font-size": "24px"}).removeClass('red-color-bar').removeClass('green-color-bar').removeClass('yellow-color-bar').removeClass('cyan-color-bar').removeClass('violet-color-bar')
    })
})
