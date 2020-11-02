$(document).ready(function () {
    //LIST & GRID VIEW
    var elements = document.getElementsByClassName("table-row");
    var i;

    // List View
    $("#listView").click(function () {
        for (i = 0; i < elements.length; i++) {
            $(elements[i]).addClass("listView");
            $(elements[i]).removeClass("gridView");
            $('.table').addClass("tableListView");
            $('.table').removeClass("tableGridView");
        }
    });

    // Grid View
    $("#gridView").click(function () {
        for (i = 0; i < elements.length; i++) {
            $(elements[i]).addClass("gridView");
            $(elements[i]).removeClass("listView");
            $('.table').addClass("tableGridView");
            $('.table').removeClass("tableListView");
        }
    });

    var container = document.getElementById("listGridViewButtons");
    var btns = container.getElementsByClassName("btn-view");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active-view");
            current[0].className = current[0].className.replace(" active-view", "");
            this.className += " active-view";
        });
    }

    //SORT TABLE

    var properties = [
        'name',
        'description',
        'users',
        'created',
        'email',
        'preferences',
        'expire',
        'status',
        'groupMembership',
        'activity',
        'when',
        'groups',
        'what',
        'actor',
        'resources',
        'privileges',
    ];

    $.each(properties, function (i, val) {

        var orderClass = '';

        $(".filter__link .imgSortDown").css('display', 'none');
        $(".filter__link .imgSortUp").css('display', 'none');

        $("#" + val).click(function (e) {
            e.preventDefault();
            $('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
            $(this).toggleClass('filter__link--active');
            $('.filter__link').removeClass('asc desc');

            $(".filter__link .imgSort").css('display', 'inline-block');
            $(".filter__link .imgSortDown").css('display', 'none');
            $(".filter__link .imgSortUp").css('display', 'none');

            if (orderClass == 'desc' || orderClass == '') {
                $(this).addClass('asc');
                orderClass = 'asc';
                $(".filter__link.filter__link--active.asc .imgSort").css('display', 'none');
                $(".filter__link.filter__link--active.asc .imgSortDown").css('display', 'inline-block');
                $(".filter__link.filter__link--active.asc .imgSortUp").css('display', 'none');
            } else {
                $(this).addClass('desc');
                orderClass = 'desc';
                $(".filter__link.desc .imgSort").css('display', 'none');
                $(".filter__link.desc .imgSortDown").css('display', 'none');
                $(".filter__link.desc .imgSortUp").css('display', 'inline-block');
            }

            var parent = $(this).closest('.header__item');
            var index = $(".header__item").index(parent);
            var $table = $('.table-content');
            var rows = $table.find('.table-row').get();
            var isSelected = $(this).hasClass('filter__link--active');
            var isNumber = $(this).hasClass('filter__link--number');

            rows.sort(function (a, b) {

                var x = $(a).find('.table-data').eq(index).text();
                var y = $(b).find('.table-data').eq(index).text();

                if (isNumber == true) {

                    if (isSelected) {
                        return x - y;
                    } else {
                        return y - x;
                    }

                } else {

                    if (isSelected) {
                        if (x < y) return -1;
                        if (x > y) return 1;
                        return 0;
                    } else {
                        if (x > y) return -1;
                        if (x < y) return 1;
                        return 0;
                    }
                }
            });

            $.each(rows, function (index, row) {
                $table.append(row);
            });

            return false;
        });

    });
});