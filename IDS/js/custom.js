$(document).ready(function () {

    //ACTIVE MENU
    var menu = window.location.href;

    if (menu.includes('/identity-stores.html')) {
        $('.ids').addClass('navActive');
    }

    else if (menu.includes('/new-identity-store.html')) {
        $('.ids').addClass('navActive');
    }

    else if (menu.includes('/new-user.html')) {
        $('.ids').addClass('navActive');
    }

    else if (menu.includes('/groups.html')) {
        $('.groups-menu').addClass('navActive');
    }

    else if (menu.includes('/new-group.html')) {
        $('.groups-menu').addClass('navActive');
    }

    else if (menu.includes('/privileges.html')) {
        $('.privileges-menu').addClass('navActive');
    }

    else if (menu.includes('/new-privilege.html')) {
        $('.privileges-menu').addClass('navActive');
    }

    else if (menu.includes('/password-policies.html')) {
        $('.pwdPolicies').addClass('navActive');
    }

    else if (menu.includes('/new-password-policy.html')) {
        $('.pwdPolicies').addClass('navActive');
    }

    else if (menu.includes('/deny-lists.html')) {
        $('.deny-list-menu').addClass('navActive');
    }

    else if (menu.includes('/new-deny-list.html')) {
        $('.deny-list-menu').addClass('navActive');
    }

    else if (menu.includes('/index.html')) {
        $('#gettingStarted').addClass('navActive');
    }

    //ACCORDION ARROW
    $('.accordion-head a').on('click', function () {
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).find('span').html('<img src="../images/chevron-right.svg" alt=""/>');
        } else {
            $(this).find('span').html('<img src="../images/chevron-down.svg" alt=""/>');
        }
    });

    //DROPDOWN USER

    $('.chevron-top').css('display', 'none');
    $("#avatarName").click(function () {
        if ($('#submenu').hasClass('show')) {
            $('.avatar .profile .profile-picture').removeClass('imgSubmenu');
            $('.chevron-bottom').css('display', 'inline');
            $('.chevron-top').css('display', 'none');
            // $('#top-menu').css('top', '170px');
            // $('#top-menu').css('height', '85%');
        }
        else {
            $('.avatar .profile .profile-picture').addClass('imgSubmenu');
            $('.chevron-top').css('display', 'inline');
            $('.chevron-bottom').css('display', 'none');
            // $('#top-menu').css('top', '250px');
            // $('#top-menu').css('height', '65%');
        }
    });

    //COLLAPSE MENU
    var x = $(".sa-view-body").width();
    $(".buttons-footer").css("width", x);
    $('.collapseButton-expand').css('display', 'none');

    $("#collapseButton").click(function () {
        $('#header').toggleClass('menuIcons');

        if ($('#header').hasClass('menuIcons')) {
            $('.collapseButton-collapse').css('display', 'none');
            $('#submenu').removeClass('show');
            $('.collapseButton-expand').css('display', 'inline');
            $("#collapseButton").attr('style', 'left:85px; top:112px');
            $(".buttons-footer").css("width", x);
        }
        else {
            $('.collapseButton-collapse').css('display', 'inline');
            $('.collapseButton-expand').css('display', 'none');
            $("#collapseButton").attr('style', 'left:280px; top:112px');
            $(".buttons-footer").css("width", x);
        }
    });

    $('.dropdown-toggle').on('click', function (e) {
        $(this).parent().toggleClass('open');
        $(this).parent().siblings().removeClass('open');
    });

    $(document).on('mouseup', function (e) {
        var eleNotFound = false;
        if ($(e.target).attr("class") !== "dropdown-toggle") {
            eleNotFound = true;
            $(".dropdown-menu").each(function () {
                $(this).parent().removeClass('open');
            });
        }
        if (eleNotFound)
            e.preventDefault();
    });

    // TABLE CHECKBOX
    $('#allcb').click(function (e) {
        $('[name="cb[]"]').prop('checked', this.checked);
        var ckbChecked = $('[name="cb[]"]:checked');
        var ckbNoChecked = $('[name="cb[]"]:not(:checked)');
        $(ckbChecked).parent().parent().parent().parent().css('background-color', '#F2F2F2');
        $(ckbNoChecked).parent().parent().parent().parent().css('background-color', 'transparent');
    });

    $('[name="cb[]"]').click(function (e) {
        if ($('[name="cb[]"]:checked').length == $('[name="cb[]"]').length || !this.checked) {
            $('#allcb').prop('checked', this.checked);
            var ckbChecked = $('[name="cb[]"]:checked');
            var ckbNoChecked = $('[name="cb[]"]:not(:checked)');
            $(ckbChecked).parent().parent().parent().parent().css('background-color', '#F2F2F2');
            $(ckbNoChecked).parent().parent().parent().parent().css('background-color', 'transparent');
        }
    });

    $('[name="cb[]"]').click(function () {
        var ckbChecked = $('[name="cb[]"]:checked');
        var ckbNoChecked = $('[name="cb[]"]:not(:checked)');
        $(ckbChecked).parent().parent().parent().parent().css('background-color', '#F2F2F2');
        $(ckbNoChecked).parent().parent().parent().parent().css('background-color', 'transparent');
    });

    $("#bulkActionsButton").click(function () {
        $("#BulkActionsListOpen").css("display", "block");
    })

    $(".dropbtn").click(function () {
        document.getElementById("dropdownActions").classList.toggle("show");
    })

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    //EDIT TITLE AND DESCRIPTION

    $(".save-title").css("display", "none");
    $(".cancel-title").css("display", "none");

    $('#titleEditable').click(function () {
        $('#titleEditable').attr('contenteditable', 'true');
        $('#titleEditable').addClass('borderTitle');
        $(".edit-title").css("display", "none");
        $(".save-title").css("display", "inline-block");
        $(".cancel-title").css("display", "inline-block");
    });

    $('.edit-title').click(function () {
        $('#titleEditable').attr('contenteditable', 'true');
        $('#titleEditable').addClass('borderTitle');
        $(".edit-title").css("display", "none");
        $(".save-title").css("display", "inline-block");
        $(".cancel-title").css("display", "inline-block");
    });

    $('.save-title').click(function () {
        $('#titleEditable').attr('contenteditable', 'false');
        $('#titleEditable').removeClass('borderTitle');
        $(".edit-title").css("display", "inline-block");
        $(".save-title").css("display", "none");
        $(".cancel-title").css("display", "none");
    });

    $('.cancel-title').click(function () {
        $('#titleEditable').attr('contenteditable', 'false');
        $('#titleEditable').removeClass('borderTitle');
        $(".edit-title").css("display", "inline-block");
        $(".save-title").css("display", "none");
        $(".cancel-title").css("display", "none");
    });

    $(".save-description").css("display", "none");
    $(".cancel-description").css("display", "none");

    $('#descriptionEditable').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'true');
        $('#descriptionEditable').addClass('borderTitle');
        $(".edit-description").css("display", "none");
        $(".save-description").css("display", "inline-block");
        $(".cancel-description").css("display", "inline-block");
    });

    $('.edit-description').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'true');
        $('#descriptionEditable').addClass('borderTitle');
        $(".edit-description").css("display", "none");
        $(".save-description").css("display", "inline-block");
        $(".cancel-description").css("display", "inline-block");
    });

    $('.save-description').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'false');
        $('#descriptionEditable').removeClass('borderTitle');
        $(".edit-description").css("display", "inline-block");
        $(".save-description").css("display", "none");
        $(".cancel-description").css("display", "none");
    });

    $('.cancel-description').click(function () {
        $('#descriptionEditable').attr('contenteditable', 'false');
        $('#descriptionEditable').removeClass('borderTitle');
        $(".edit-description").css("display", "inline-block");
        $(".save-description").css("display", "none");
        $(".cancel-description").css("display", "none");
    });

    //SELECT ALL

    $('#all').change(function (e) {
        if (e.currentTarget.checked) {
            $('.rows').find('input[type="checkbox"]').prop('checked', true);
        } else {
            $('.rows').find('input[type="checkbox"]').prop('checked', false);
        }
    });


});
