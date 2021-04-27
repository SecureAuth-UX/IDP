$(window).on("load", function () {
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
    else if (menu.includes('/saml-application.html')) {
        $('#app').addClass('navActive');
    }
    else if (menu.includes('/edit-saml-application.html')) {
        $('#app').addClass('navActive');
    }
    else if (menu.includes('/office365-application.html')) {
        $('#app').addClass('navActive');
    }
    else if (menu.includes('/edit-office365-application.html')) {
        $('#app').addClass('navActive');
    }
    else if (menu.includes('/internal-application-manager.html')) {
        $('#customizedResources').addClass('navActive');
    }
    else if (menu.includes('/new-internal-application-manager.html')) {
        $('#customizedResources').addClass('navActive');
    }
    else if (menu.includes('/edit-internal-application-manager.html')) {
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
        $('.emailProvider').addClass('navActive');
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
});