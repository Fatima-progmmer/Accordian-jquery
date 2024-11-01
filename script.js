$(document).ready(function () {
    $('#headingOne .accordion-button').addClass('active');

    $('.accordion-button').on('click', function () {
        var target = $(this).data('bs.target');
        $('.accordion-button').removeClass('active');
        $(this).addClass('active');
        $('.accordion-collapse').removeClass('show');
        $(target).addClass('show');
        $($(this).data('bs.target')).collapse('toggle');
    });
});