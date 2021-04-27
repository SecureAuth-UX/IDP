$(document).ready(function () {
    $(".button-dropdown").on('click', function () {
        $(this).parent().addClass("dropdownParent");
        $(".dropdownParent .multiple-dropdown").slideToggle('fast').css("display", "flow-root");

        insertFunction();
    });

    function insertFunction() {

        $(".dropdownParent .mutliSelect input[type='checkbox']").on('click', function () {

            var title = $(this).val();

            if ($(this).is(':checked')) {
                $('.dropdownParent .mutliSelect input[value="' + title + '"]').prop("checked", true);
                var html = '<span title="' + title + '" value="' + title + '" class="keywords-container">' + title + '<a class="remove-tag" style="margin-left:20px; vertical-align: text-bottom;"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z" fill="#242D80"/></svg></a></span>';
                $('.dropdownParent .multiSel').append(html).css("display", "flex");
            } else {
                $('span[title="' + title + '"]').remove();
                var ret = $(".select-options-btn");
            }

            var counter = 0;
            counter = $(".dropdownParent .mutliSelect input[type='checkbox']:checked").length;

            if ($(counter).length > 0) {
                $(".dropdownParent .keywords-count").html(counter + " Selected").addClass("keywords-container").css("display", "block");
            }
            else {
                $(".dropdownParent .keywords-count").hide();
                $(".dropdownParent .multiSel").hide();
            }

            findDuplicate();
        });

        $(document).on("click", ".dropdownParent .remove-tag", function () {
            $(this).parent().remove();
            var value = $(this).parent().attr("value");

            $('.dropdownParent .mutliSelect input[value="' + value + '"]').prop("checked", false);

            var counter = 0;
            counter = $(".dropdownParent .multiSel .keywords-container").length;
            if ($(counter).length > 0) {
                $(".dropdownParent .keywords-count").html(counter + " Selected").addClass("keywords-container").css("display", "block");
            }
            else {
                $(".dropdownParent .keywords-count").hide();
                $(".dropdownParent .multiSel").hide();
            }
        });

        $(".dropdownParent .multiple-dropdown .select-options-btn").on('click', function () {
            $(".dropdownParent  .multiple-dropdown .mutliSelect").css("display", "block");
        });

        $(".dropdownParent .multiple-dropdown .close-dropdown").on('click', function () {
            $(".dropdownParent .multiple-dropdown").slideUp('fast');
            $(".dropdownParent .button-dropdown").parent().removeClass("dropdownParent");
        });

        var $dropdown = $('.dropdownParent .multiple-dropdown .mutliSelect');

        $(document).mouseup(e => {
            if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
                $dropdown.slideUp();
                $dropdown.parent().removeClass("dropdownParent");
            }
        });
    }

    function findDuplicate() {
        var retval = 0;
        $(".dropdownParent .multiSel").each(function () {
            if (str.trim() == $(this).text().trim()) {
                retval = 1;
                return false;
            }
        });
        return retval;
    }
});