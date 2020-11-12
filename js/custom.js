$(document).ready(function () {

    //ACTIVE MENU
    var menu = $(location).attr('href');

    if (menu.includes('/policies.html')) {
        $('#policies').addClass('navActive');
    }
    else if (menu.includes('/new-policy.html')) {
        $('#policies').addClass('navActive');
    }
    else if (menu.includes('/edit-policy.html')) {
        $('#policies').addClass('navActive');
    }

    else if (menu.includes('/dashboard.html')) {
        $('#home').addClass('navActive');
    }

    else if (menu.includes('/multi-factor.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-fido.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-yubikey.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-auth-apps.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-text-message.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-email.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-voice-phone-call.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-security-questions.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-pin.html')) {
        $('#mfa').addClass('navActive');
    }
    else if (menu.includes('/mfa-symantec-vip.html')) {
        $('#mfa').addClass('navActive');
    }

    else if (menu.includes('/risk-providers.html')) {
        $('#risk').addClass('navActive');
    }
    else if (menu.includes('/new-risk-provider.html')) {
        $('#risk').addClass('navActive');
    }
    else if (menu.includes('/edit-risk-provider.html')) {
        $('#risk').addClass('navActive');
    }

    else if (menu.includes('/adaptive-logs-configuration.html')) {
        $('#ip').addClass('navActive');
    }

    else if (menu.includes('/datastores.html')) {
        $('#datastores').addClass('navActive');
    }
    else if (menu.includes('/new-datastore.html')) {
        $('#datastores').addClass('navActive');
    }
    else if (menu.includes('/edit-datastore.html')) {
        $('#datastores').addClass('navActive');
    }

    else if (menu.includes('/applications.html')) {
        $('#app').addClass('navActive');
    }
    else if (menu.includes('/new-application.html')) {
        $('#app').addClass('navActive');
    }
    else if (menu.includes('/edit-application.html')) {
        $('#app').addClass('navActive');
    }

    else if (menu.includes('/redirect-manager.html')) {
        $('#customizedResources').addClass('navActive');
    }
    else if (menu.includes('/new-redirect.html')) {
        $('#customizedResources').addClass('navActive');
    }
    else if (menu.includes('/edit-redirect.html')) {
        $('#customizedResources').addClass('navActive');
    }

    else if (menu.includes('/portal-manager.html')) {
        $('#portal').addClass('navActive');
    }
    else if (menu.includes('/new-portal.html')) {
        $('#portal').addClass('navActive');
    }
    else if (menu.includes('/edit-portal.html')) {
        $('#portal').addClass('navActive');
    }

    else if (menu.includes('/oidc-manager.html')) {
        $('#oidc').addClass('navActive');
    }
    else if (menu.includes('/new-oidc-configuration.html')) {
        $('#oidc').addClass('navActive');
    }
    else if (menu.includes('/edit-oidc-configuration.html')) {
        $('#oidc').addClass('navActive');
    }

    else if (menu.includes('/clients.html')) {
        $('#oidc').addClass('navActive');
    }
    else if (menu.includes('/new-client.html')) {
        $('#oidc').addClass('navActive');
    }
    else if (menu.includes('/edit-client.html')) {
        $('#oidc').addClass('navActive');
    }

    else if (menu.includes('/user-tools.html')) {
        $('#userTools').addClass('navActive');
    }
    else if (menu.includes('/new-user-tool.html')) {
        $('#userTools').addClass('navActive');
    }
    else if (menu.includes('/edit-user-tool.html')) {
        $('#userTools').addClass('navActive');
    }

    else if (menu.includes('/system-settings.html')) {
        $('#systemSettings').addClass('navActive');
    }

    else if (menu.includes('/email-provider.html')) {
        $('#emailProvider').addClass('navActive');
    }

    else if (menu.includes('/email-templates.html')) {
        $('#emailTemplates').addClass('navActive');
    }

    else if (menu.includes('/whats-new.html')) {
        $('#news').addClass('navActive');
    }

    else if (menu.includes('/getting-started.html')) {
        $('#gettingStarted').addClass('navActive');
    }

    else if (menu.includes('/identity-store.html')) {
        $('#identityStore').addClass('navActive');
    }

    //SEE GROUPS
    $('#groupsSwitch').each(function () {
        $(this).click(function () {
            $("#groupFields").toggle();
        });
    });

    //SEE CERTIFICATE OIDC
    $('.radiobuttons input[type="radio"]').each(function () {
        $("#opt1").click(function () {
            $('#certificateField').show();
        });
        $("#opt2").click(function () {
            $('#certificateField').hide();
        });
    });

    //ACCORDION ARROW
    $('.accordion-head a').on('click', function () {
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).find('span').html('<img src="images/chevron-right.svg" alt=""/>');
        } else {
            $(this).find('span').html('<img src="images/chevron-down.svg" alt=""/>');
        }
    });

    //DROPDOWN USER

    $('.chevron-top').css('display', 'none');
    $("#avatarName").click(function () {
        if ($('#submenu').hasClass('show')) {
            $('.avatar .profile .profile-picture').removeClass('imgSubmenu');
            $('.chevron-bottom').css('display', 'inline');
            $('.chevron-top').css('display', 'none');
        }
        else {
            $('.avatar .profile .profile-picture').addClass('imgSubmenu');
            $('.chevron-top').css('display', 'inline');
            $('.chevron-bottom').css('display', 'none');
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

    //STEPPER
    var index = $(".step.active").index(".step"),
        stepsCount = $(".step").length,
        prevBtn = $("#prev"),
        nextBtn = $("#next");

    $(prevBtn).css("display", "none");

    if (menu.includes('/saml-application.html')) {
        if ("#stepApp") {
            $(prevBtn).css("display", "inline-block");
            $(prevBtn).html('<a href="new-application.html">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">' +
                '<path d="M11.5575 12.5302L8.1225 9.09521L11.5575 5.65271L10.5 4.59521L6 9.09521L10.5 13.5952L11.5575 12.5302Z" fill="#2995F5" />' +
                '</svg>' +
                'Previous Step</a>');
        }
    }

    prevBtn.click(function () {
        $(nextBtn).html("Next Step" +
            "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>" +
            "<path d='M6.44238 12.435L9.87738 9L6.44238 5.5575L7.49988 4.5L11.9999 9L7.49988 13.5L6.44238 12.435Z' fill='white' />" +
            "</svg>");
        $(".circle-step").eq(index).removeClass("circle-active");

        if (index > 0) {
            index--;
            $(".steper").removeClass("step-active").eq(index).addClass("step-active");
            $(".sa-tabs-list-item").removeClass("sa-tabs-list-item-active").eq(index).addClass("sa-tabs-list-item-active");
            $(".step").removeClass("active").eq(index).addClass("active");
        };

        if (index === 0) {
            $(".circle-step").eq(index).addClass("circle-active");
            $(this).css("display", "none");
        }

        if (menu.includes('/saml-application.html')) {
            if ("#stepApp") {
                $(prevBtn).css("display", "inline-block");
                $(prevBtn).html('<a href="new-application.html">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">' +
                    '<path d="M11.5575 12.5302L8.1225 9.09521L11.5575 5.65271L10.5 4.59521L6 9.09521L10.5 13.5952L11.5575 12.5302Z" fill="#2995F5" />' +
                    '</svg>' +
                    'Previous Step</a>');
            }
        }
    });

    nextBtn.click(function () {
        prevBtn.css("display", "inline-block");

        if (index < stepsCount - 1) {
            index++;
            $(".sa-tabs-list-item").removeClass("sa-tabs-list-item-active").eq(index).addClass("sa-tabs-list-item-active");
            $(".steper").removeClass("step-active").eq(index).addClass("step-active");
            $(".circle-step").eq(index).addClass("circle-active");
            $(".step").removeClass("active").eq(index).addClass("active");
        };

        if (index === stepsCount - 1) {
            if (menu.includes('/new-datastore.html')) {
                $(nextBtn).html("<a href='datastores.html'>Save</a>");
            }
            else if (menu.includes('/edit-datastore.html')) {
                $(nextBtn).html("<a href='datastores.html'>Save</a>");
            }
            else if (menu.includes('/new-policy.html')) {
                $(nextBtn).html("<a href='policies.html'>Save</a>");
            }
            else if (menu.includes('/edit-policy.html')) {
                $(nextBtn).html("<a href='policies.html'>Save</a>");
            }
            else if (menu.includes('/new-risk-provider.html')) {
                $(nextBtn).html("<a href='risk-providers.html'>Save</a>");
            }
            else if (menu.includes('/edit-risk-provider.html')) {
                $(nextBtn).html("<a href='risk-providers.html'>Save</a>");
            }
            else if (menu.includes('/new-application.html')) {
                $(nextBtn).hide();
            }
            else if (menu.includes('/saml-application.html')) {
                $(nextBtn).html("<a href='applications.html'>Save</a>");
            }
            else if (menu.includes('/edit-saml-application.html')) {
                $(nextBtn).html("<a href='applications.html'>Save</a>");
            }
            else if (menu.includes('/office365-application.html')) {
                $(nextBtn).html("<a href='applications.html'>Save</a>");
            }
            else if (menu.includes('/edit-office365-application.html')) {
                $(nextBtn).html("<a href='applications.html'>Save</a>");
            }
            else if (menu.includes('/new-portal.html')) {
                $(nextBtn).html("<a href='portal-manager.html'>Save</a>");
            }
            else if (menu.includes('/edit-portal.html')) {
                $(nextBtn).html("<a href='portal-manager.html'>Save</a>");
            }
            else if (menu.includes('/new-user-tool.html')) {
                $(nextBtn).html("<a href='user-tools.html'>Save</a>");
            }
            else if (menu.includes('/edit-user-tool.html')) {
                $(nextBtn).html("<a href='user-tools.html'>Save</a>");
            }
            else if (menu.includes('/new-oidc-configuration.html')) {
                $(nextBtn).html("<a href='oidc-manager.html'>Save</a>");
            }
            else if (menu.includes('/new-client.html')) {
                $(nextBtn).html("<a href='clients.html'>Save</a>");
            }
        }
    });

    //ACTIONS LIST

    $(".btnActions").each(function () {
        $('.actionsListOpen').hide();

        $(".btnActions").click(function () {
            var row = $(this).closest(".grid-actions").find('.actionsListOpen');
            $('.actionsListOpen').hide();
            $(row).show();
        });

        $(".closeActions").click(function () {
            var row = $(this).closest(".grid-actions").find('.actionsListOpen');
            $(row).hide();
        });
    });

});
