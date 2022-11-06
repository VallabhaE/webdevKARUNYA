$(document).ready(function(){
    $("#bug1").hide()
    $("#fer1").hide()
    $("#lam1").hide()
    $("#audi1").hide()
    $("#bug").click(function(){
        $("#bug").hide();
        $("#bug1").show();
    });
    $("#lam").click(function(){
        $("#lam").hide();
        $("#lam1").show();
    });
    $("#fer").click(function(){
        $("#fer").hide();
        $("#fer1").show();
    });
    $("#audi").click(function(){
        $("#audi").hide();
        $("#audi1").show();
    });
    $("#start").click(function(){
    var CWidth = $('#bug1').width();
    var RaceTrackWidth = $(window).width() - (CWidth+100);
    var bugTime = Math.floor((Math.random() * 5000) + 1);
    var ferTime = Math.floor((Math.random() * 5000) + 1);
    var lamTime = Math.floor((Math.random() * 5000) + 1);
    var audiTime = Math.floor((Math.random() * 5000) + 1);
        $('#bug1').animate({left: RaceTrackWidth},bugTime);
        $('#fer1').animate({left: RaceTrackWidth},ferTime);
        $('#lam1').animate({left: RaceTrackWidth},lamTime);
        $('#audi1').animate({left: RaceTrackWidth},audiTime);
    $("#reset").click(function(){
        $('#bug1').css('left', '50px');
        $('#fer1').css('left', '50px');
        $('#lam1').css('left', '50px');
        $('#audi1').css('left', '50px');
    });
    });
});