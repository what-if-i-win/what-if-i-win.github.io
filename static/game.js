var items = ['rock', 'paper', 'scissors'];
var RESULTS = [];
var CURRENT = 0;
var ICONS = $('<i class="fa fa-hand-peace-o" aria-hidden="true"></i>' +
    '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>' +
    '<i class="fa fa-hand-paper-o" aria-hidden="true"></i>');

(function init() {
    $('.tile').each(function () {
        $(this).append(ICONS.clone());
    })
})();


function clearClass(selector) {
    for (var idx in items) {
        $(selector).removeClass(items[idx]);
    }
}

function updateCurrent() {
    clearClass('#current');
    $('#current').removeClass(['rock', 'paper', 'scissors']).addClass(RESULTS[CURRENT]);
    $('#results .tile').eq(CURRENT).addClass('active').siblings().removeClass('active');
}

function updateList() {
    clearClass('#results .tile');
    for (var idx in RESULTS) {
        var name = RESULTS[idx];
        $('#results .tile').eq(idx).addClass(name);
    }
}

function refreshList() {
    RESULTS = [];
    for (var i = 0; i < 5; i++) {
        var rand = items[Math.floor(Math.random() * items.length)];
        RESULTS.push(rand);
    }
    CURRENT = 0;
    updateList();
    updateCurrent();
}

$('li.tile').click(function () {
    CURRENT = $(this).index();
    updateCurrent();
});

$('#next').click(function () {
    CURRENT++;
    CURRENT = CURRENT > 4 ? 0 : CURRENT;
    updateCurrent();
});
$('#prev').click(function () {
    CURRENT--;
    CURRENT = CURRENT < 0 ? 4 : CURRENT;
    updateCurrent();
});

$('#refresh').click(function () {
    refreshList();
}).trigger('click');
