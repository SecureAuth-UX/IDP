function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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

rowNum = 0;
buttonID = 0;

$(function () {
    rowNum++;
    var selectConditionRule = $("#perimeterRules option:selected").text();
    var radioRule = $('input[name=perimeterRulesRadio]:checked', '#perimeterRulesRadio').attr("value");
    var inputRule = $('input#distancePerimeter').val();
    var redirectTo = $('input#urlRedirectToPerimeter').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a class="mr-2" onclick="addPerimeterRuleModal()" data-toggle="modal" data-target="#addPerimeterRuleModal">Prompt for MFA</a>' +
        '<p>IF the user</p>' +
        '<a onclick="addPerimeterRule()" data-toggle="modal" data-target="#addPerimeterRuleModal"> is</a>' +
        '<p>within</p>' +
        '<a onclick="addPerimeterRule()" data-toggle="modal" data-target="#addPerimeterRuleModal"> 575</a>' +
        '<p>miles from their previous location</p>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
});

// MODAL RULES

function addDynamicIPModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addDynamicIPModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - Dynamic IP Blocking</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +
        '<div class="select-container" id="selectRulesDynamicIp">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect to</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToDynamicIp" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<p class="mr-3"><strong>IP Address for:</strong> 24 hours' +
        '<a href="#" data-toggle="tooltip" title="Update these settings in the IP Filtering section.">' +
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.25 6.75H9.75V5.25H8.25V6.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5ZM8.25 12.75H9.75V8.25H8.25V12.75Z" fill="#FF7B00"/></svg></a></p>' +
        '<p class="mr-3"><strong>Failed login attempts against different user accounts:</strong> 5' +
        '<a href="#" data-toggle="tooltip" title="Update these settings in the IP Filtering section."><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.25 6.75H9.75V5.25H8.25V6.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5ZM8.25 12.75H9.75V8.25H8.25V12.75Z" fill="#FF7B00"/>' +
        '</svg></a></p>' +
        '</div>' +
        '<div class="form-group">' +
        '<label>Set IP Addresses <span class="asterisk">*</span></label>' +
        '<p class="subtitle">Separate IP entries with a comma. IPs can only be in IPv4 format</p>' +
        '<input type="text" value="" data-role="tagsinput" placeholder="Add IP(s)" />' +
        '</div>' +

        '<div data-id="sa-toast" class="sa-toast sa-toast-info-no-hover">' +
        '<div class="sa-toast-icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" class="sa-icon-info sa-icon-large" transform="translate(1,1)">' +
        '<path d="M9 7H11V5H9V7ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM9 15H11V9H9V15Z">' +
        '</path>' +
        '</svg>' +
        '</div>' +
        '<div class="sa-toast-text" data-id="sa-toast-text">' +
        '<div class="sa-toast-text" data-id="sa-toast-text" style="font-size:10px;">' +
        'Create a list of trusted IP addresses that will not be blocked if the maximum amount of failed login attempts is reached. This list applies to all policies in which the rule is enabled.' +
        'IPv4 addresses can be entered as individual values, ranges, or using CIDR Notation <br/>' +
        'Examples <br/>' +
        '<span class="sa-tag sa-tag-secondary"><div class="sa-type-caption"> 123.123.123.23 </div></span> <span class="sa-tag sa-tag-secondary"><div class="sa-type-caption"> 123.123.123.23-123.123.123.27 </div></span> ' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addDynamicIPRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addPerimeterRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addPerimeterRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - Dynamic Perimeter</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +
        '<div class="select-container" id="perimeterRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToPerimeter" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="card-block radiobuttons" id="perimeterRulesRadio">' +
        '<span class="mr-3">IF the user</span>' +
        '<label for="is" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="perimeterRulesRadio" id="is" value="is" class="hidden" checked />' +
        '<span class="label"></span>is' +
        '</label>' +
        '<label for="isNot" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="perimeterRulesRadio" id="isNot" value="is not" class="hidden" />' +
        '<span class="label"></span>is not' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<label>Set distance <span class="asterisk">*</span></label>' +
        '<input type="number" placeholder="Set distance in miles" id="distancePerimeter">' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addPerimeterRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addCountryRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addCountryRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - Country</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +
        '<div class="select-container" id="selectcountryRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Select condiction</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToCountry" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="card-block radiobuttons" id="countryRadio">' +
        '<span class="mr-3">IF the user’s current location </span>' +
        '<label for="isCountry" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="countryRadio" id="isCountry" value="is" class="hidden" checked />' +
        '<span class="label"></span>is' +
        '</label>' +
        '<label for="isNotCountry" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="countryRadio" id="isNotCountry" value="is not" class="hidden" />' +
        '<span class="label"></span>is not' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<label>Select Country <span class="asterisk">*</span></label>' +
        '<div class="position-relative">'+
        '<button class="button-dropdown" id="countriesSelection">Select Countries</button>' +
        '<span title="" class="keywords-count"></span>' +
        '<div class="multiple-dropdown" style="top:45px;">' +
        '<div class="select-option">' +
        '<input type="button" class="select-options-btn" placeholder="Select option"' +
        'value="Select options" />' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '</svg>' +
        '</div>' +
        '<div class="multiSel"></div>' +
        '<div class="mutliSelect">' +
        '<input id="myInput" class="search-input" type="text" placeholder="Search Application.." onkeyup="keyup()">'+
        '<ul id="listCountries">' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAfghanistan" class="sa-form-checkbox-label">' +
        '<input id="andAfghanistan" type="checkbox" value="Afghanistan">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Afghanistan</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAlandIslands" class="sa-form-checkbox-label">' +
        '<input id="andAlandIslands" type="checkbox" value="Aland Islands">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Aland Islands</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAlbania" class="sa-form-checkbox-label">' +
        '<input id="andAlbania" type="checkbox" value="Albania">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Albania</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAlgeria" class="sa-form-checkbox-label">' +
        '<input id="andAlgeria" type="checkbox" value="Algeria">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Algeria</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAmericanSamoa" class="sa-form-checkbox-label">' +
        '<input id="andAmericanSamoa" type="checkbox" value="American Samoa">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">American Samoa</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAndorra" class="sa-form-checkbox-label">' +
        '<input id="andAndorra" type="checkbox" value="Andorra">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Andorra</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAngola" class="sa-form-checkbox-label">' +
        '<input id="andAngola" type="checkbox" value="Angola">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Angola</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAnguilla" class="sa-form-checkbox-label">' +
        '<input id="andAnguilla" type="checkbox" value="Anguilla">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Anguilla</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAntarctica" class="sa-form-checkbox-label">' +
        '<input id="andAntarctica" type="checkbox" value="Antarctica">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Antarctica</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAntiguaAndBarbuda" class="sa-form-checkbox-label">' +
        '<input id="andAntiguaAndBarbuda" type="checkbox" value="Antigua And Barbuda">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Antigua And Barbuda</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andArgentina" class="sa-form-checkbox-label">' +
        '<input id="andArgentina" type="checkbox" value="Argentina">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Argentina</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andArmenia" class="sa-form-checkbox-label">' +
        '<input id="andArmenia" type="checkbox" value="Armenia">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Armenia</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAruba" class="sa-form-checkbox-label">' +
        '<input id="andAruba" type="checkbox" value="Aruba">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Aruba</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andAustralia" class="sa-form-checkbox-label">' +
        '             <input id="andAustralia" type="checkbox" value="Australia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Australia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andAustria" class="sa-form-checkbox-label">' +
        '             <input id="andAustria" type="checkbox" value="Austria">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Austria</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andAzerbaijan" class="sa-form-checkbox-label">' +
        '             <input id="andAzerbaijan" type="checkbox" value="Azerbaijan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Azerbaijan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBahamas" class="sa-form-checkbox-label">' +
        '             <input id="andBahamas" type="checkbox" value="Bahamas">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bahamas</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBahrain" class="sa-form-checkbox-label">' +
        '             <input id="andBahrain" type="checkbox" value="Bahrain">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bahrain</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBangladesh" class="sa-form-checkbox-label">' +
        '             <input id="andBangladesh" type="checkbox" value="Bangladesh">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bangladesh</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBarbados" class="sa-form-checkbox-label">' +
        '             <input id="andBarbados" type="checkbox" value="Barbados">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Barbados</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBelarus" class="sa-form-checkbox-label">' +
        '             <input id="andBelarus" type="checkbox" value="Belarus">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Belarus</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBelgium" class="sa-form-checkbox-label">' +
        '             <input id="andBelgium" type="checkbox" value="Belgium">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Belgium</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBelize" class="sa-form-checkbox-label">' +
        '             <input id="andBelize" type="checkbox" value="Belize">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Belize</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="Benin" class="sa-form-checkbox-label">' +
        '             <input id="Benin" type="checkbox" value="Benin">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Benin</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBermuda" class="sa-form-checkbox-label">' +
        '             <input id="andBermuda" type="checkbox" value="Bermuda">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bermuda</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBhutan" class="sa-form-checkbox-label">' +
        '             <input id="andBhutan" type="checkbox" value="Bhutan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bhutan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBolivia" class="sa-form-checkbox-label">' +
        '             <input id="andBolivia" type="checkbox" value="Bolivia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bolivia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBosniaAndHerzegovina" class="sa-form-checkbox-label">' +
        '             <input id="andBosniaAndHerzegovina" type="checkbox" value="Bosnia And Herzegovina">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bosnia And Herzegovina</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBotswana" class="sa-form-checkbox-label">' +
        '             <input id="andBotswana" type="checkbox" value="Botswana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Botswana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBouvetIsland" class="sa-form-checkbox-label">' +
        '             <input id="andBouvetIsland" type="checkbox" value="Bouvet Island">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bouvet Island</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBrazil" class="sa-form-checkbox-label">' +
        '             <input id="andBrazil" type="checkbox" value="Brazil">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Brazil</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBritishIndianOceanTerritory" class="sa-form-checkbox-label">' +
        '             <input id="andBritishIndianOceanTerritory" type="checkbox" value="British Indian Ocean Territory">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">British Indian Ocean Territory</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBruneiDarussalam" class="sa-form-checkbox-label">' +
        '             <input id="andBruneiDarussalam" type="checkbox" value="Brunei Darussalam">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Brunei Darussalam</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBulgaria" class="sa-form-checkbox-label">' +
        '             <input id="andBulgaria" type="checkbox" value="Bulgaria">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bulgaria</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBurkinaFaso" class="sa-form-checkbox-label">' +
        '             <input id="andBurkinaFaso" type="checkbox" value="Burkina Faso">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Burkina Faso</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBurundi" class="sa-form-checkbox-label">' +
        '             <input id="andBurundi" type="checkbox" value="Burundi">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Burundi</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCambodia" class="sa-form-checkbox-label">' +
        '             <input id="andCambodia" type="checkbox" value="Cambodia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cambodia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCameroon" class="sa-form-checkbox-label">' +
        '             <input id="andCameroon" type="checkbox" value="Cameroon">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cameroon</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCanada" class="sa-form-checkbox-label">' +
        '             <input id="andCanada" type="checkbox" value="Canada">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Canada</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCapeVerde" class="sa-form-checkbox-label">' +
        '             <input id="andCapeVerde" type="checkbox" value="Cape Verde">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cape Verde</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCaymanIslands" class="sa-form-checkbox-label">' +
        '             <input id="andCaymanIslands" type="checkbox" value="Cayman Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cayman Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCentralAfricanRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andCentralAfricanRepublic" type="checkbox" value="Central African Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Central African Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChad" class="sa-form-checkbox-label">' +
        '             <input id="andChad" type="checkbox" value="Chad">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Chad</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChile" class="sa-form-checkbox-label">' +
        '             <input id="andChile" type="checkbox" value="Chile">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Chile</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChina" class="sa-form-checkbox-label">' +
        '             <input id="andChina" type="checkbox" value="China">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">China</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChristmasIsland" class="sa-form-checkbox-label">' +
        '             <input id="andChristmasIsland" type="checkbox" value="Christmas Island">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Christmas Island</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCocos(Keeling)Islands" class="sa-form-checkbox-label">' +
        '             <input id="andCocos(Keeling)Islands" type="checkbox" value="Cocos (Keeling) Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cocos (Keeling) Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andColombia" class="sa-form-checkbox-label">' +
        '             <input id="andColombia" type="checkbox" value="Colombia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Colombia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andComoros" class="sa-form-checkbox-label">' +
        '             <input id="andComoros" type="checkbox" value="Comoros">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Comoros</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCongo" class="sa-form-checkbox-label">' +
        '             <input id="andCongo" type="checkbox" value="Congo">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Congo</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCongoDemocraticRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andCongoDemocraticRepublic" type="checkbox" value="Congo, Democratic Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Congo, Democratic Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCookIslands" class="sa-form-checkbox-label">' +
        '             <input id="andCookIslands" type="checkbox" value="Cook Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cook Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCostaRica" class="sa-form-checkbox-label">' +
        '             <input id="andCostaRica" type="checkbox" value="Costa Rica">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Costa Rica</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCroatia" class="sa-form-checkbox-label">' +
        '             <input id="andCroatia" type="checkbox" value="Croatia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Croatia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCuba" class="sa-form-checkbox-label">' +
        '             <input id="andCuba" type="checkbox" value="Cuba">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cuba</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCyprus" class="sa-form-checkbox-label">' +
        '             <input id="andCyprus" type="checkbox" value="Cyprus">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cyprus</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCzechRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andCzechRepublic" type="checkbox" value="Czech Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Czech Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDenmark" class="sa-form-checkbox-label">' +
        '             <input id="andDenmark" type="checkbox" value="Denmark">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Denmark</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDjibouti" class="sa-form-checkbox-label">' +
        '             <input id="andDjibouti" type="checkbox" value="Djibouti">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Djibouti</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDominica" class="sa-form-checkbox-label">' +
        '             <input id="andDominica" type="checkbox" value="Dominica">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Dominica</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDominicanRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andDominicanRepublic" type="checkbox" value="Dominican Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Dominican Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEcuador" class="sa-form-checkbox-label">' +
        '             <input id="andEcuador" type="checkbox" value="Ecuador">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ecuador</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEgypt" class="sa-form-checkbox-label">' +
        '             <input id="andEgypt" type="checkbox" value="Egypt">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Egypt</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andElSalvador" class="sa-form-checkbox-label">' +
        '             <input id="andElSalvador" type="checkbox" value="El Salvador">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">El Salvador</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEquatorialGuinea" class="sa-form-checkbox-label">' +
        '             <input id="andEquatorialGuinea" type="checkbox" value="Equatorial Guinea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Equatorial Guinea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEritrea" class="sa-form-checkbox-label">' +
        '             <input id="andEritrea" type="checkbox" value="Eritrea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Eritrea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEstonia" class="sa-form-checkbox-label">' +
        '             <input id="andEstonia" type="checkbox" value="Estonia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Estonia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEthiopia" class="sa-form-checkbox-label">' +
        '             <input id="andEthiopia" type="checkbox" value="Ethiopia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ethiopia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFalklandIslands" class="sa-form-checkbox-label">' +
        '             <input id="andFalklandIslands" type="checkbox" value="Falkland Islands (Malvinas)">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Falkland Islands (Malvinas)</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFiji" class="sa-form-checkbox-label">' +
        '             <input id="andFiji" type="checkbox" value="Fiji">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Fiji</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFinland" class="sa-form-checkbox-label">' +
        '             <input id="andFinland" type="checkbox" value="Finland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Finland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFrance" class="sa-form-checkbox-label">' +
        '             <input id="andFrance" type="checkbox" value="France">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">France</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFrenchGuiana" class="sa-form-checkbox-label">' +
        '             <input id="andFrenchGuiana" type="checkbox" value="French Guiana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">French Guiana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFrenchPolynesia" class="sa-form-checkbox-label">' +
        '             <input id="andFrenchPolynesia" type="checkbox" value="French Polynesia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">French Polynesia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGabon" class="sa-form-checkbox-label">' +
        '             <input id="andGabon" type="checkbox" value="Gabon">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Gabon</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGambia" class="sa-form-checkbox-label">' +
        '             <input id="andGambia" type="checkbox" value="Gambia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Gambia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGeorgia" class="sa-form-checkbox-label">' +
        '             <input id="andGeorgia" type="checkbox" value="Georgia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Georgia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGermany" class="sa-form-checkbox-label">' +
        '             <input id="andGermany" type="checkbox" value="Germany">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Germany</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGhana" class="sa-form-checkbox-label">' +
        '             <input id="andGhana" type="checkbox" value="Ghana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ghana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGibraltar" class="sa-form-checkbox-label">' +
        '             <input id="andGibraltar" type="checkbox" value="Gibraltar">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Gibraltar</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGreece" class="sa-form-checkbox-label">' +
        '             <input id="andGreece" type="checkbox" value="Greece">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Greece</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGreenland" class="sa-form-checkbox-label">' +
        '             <input id="andGreenland" type="checkbox" value="Greenland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Greenland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGrenada" class="sa-form-checkbox-label">' +
        '             <input id="andGrenada" type="checkbox" value="Grenada">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Grenada</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuadeloupe" class="sa-form-checkbox-label">' +
        '             <input id="andGuadeloupe" type="checkbox" value="Guadeloupe">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guadeloupe</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuam" class="sa-form-checkbox-label">' +
        '             <input id="andGuam" type="checkbox" value="Guam">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guam</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuatemala" class="sa-form-checkbox-label">' +
        '             <input id="andGuatemala" type="checkbox" value="Guatemala">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guatemala</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuernsey" class="sa-form-checkbox-label">' +
        '             <input id="andGuernsey" type="checkbox" value="Guernsey">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guernsey</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuinea" class="sa-form-checkbox-label">' +
        '             <input id="andGuinea" type="checkbox" value="Guinea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guinea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuyana" class="sa-form-checkbox-label">' +
        '             <input id="andGuyana" type="checkbox" value="Guyana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guyana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHaiti" class="sa-form-checkbox-label">' +
        '             <input id="andHaiti" type="checkbox" value="Haiti">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Haiti</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHonduras" class="sa-form-checkbox-label">' +
        '             <input id="andHonduras" type="checkbox" value="Honduras">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Honduras</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHongKong" class="sa-form-checkbox-label">' +
        '             <input id="andHongKong" type="checkbox" value="Hong Kong">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Hong Kong</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHungary" class="sa-form-checkbox-label">' +
        '             <input id="andHungary" type="checkbox" value="Hungary">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Hungary</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="anbdIceland" class="sa-form-checkbox-label">' +
        '             <input id="andIceland" type="checkbox" value="Iceland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Iceland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIndia" class="sa-form-checkbox-label">' +
        '             <input id="andIndia" type="checkbox" value="India">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">India</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIndonesia" class="sa-form-checkbox-label">' +
        '             <input id="andIndonesia" type="checkbox" value="Indonesia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Indonesia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIranIslamicRepublicOf" class="sa-form-checkbox-label">' +
        '             <input id="andIranIslamicRepublicOf" type="checkbox" value="Iran, Islamic Republic Of">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Iran, Islamic Republic Of</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIraq" class="sa-form-checkbox-label">' +
        '             <input id="andIraq" type="checkbox" value="Iraq">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Iraq</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIreland" class="sa-form-checkbox-label">' +
        '             <input id="andIreland" type="checkbox" value="Ireland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ireland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIsrael" class="sa-form-checkbox-label">' +
        '             <input id="andIsrael" type="checkbox" value="Israel">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Israel</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andItaly" class="sa-form-checkbox-label">' +
        '             <input id="andItaly" type="checkbox" value="Italy">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Italy</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJamaica" class="sa-form-checkbox-label">' +
        '             <input id="andJamaica" type="checkbox" value="Jamaica">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Jamaica</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJapan" class="sa-form-checkbox-label">' +
        '             <input id="andJapan" type="checkbox" value="Japan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Japan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJersey" class="sa-form-checkbox-label">' +
        '             <input id="andJersey" type="checkbox" value="Jersey">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Jersey</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJordan" class="sa-form-checkbox-label">' +
        '             <input id="andJordan" type="checkbox" value="Jordan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Jordan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKazakhstan" class="sa-form-checkbox-label">' +
        '             <input id="andKazakhstan" type="checkbox" value="Kazakhstan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Kazakhstan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKenya" class="sa-form-checkbox-label">' +
        '             <input id="andKenya" type="checkbox" value="Kenya">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Kenya</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKorea" class="sa-form-checkbox-label">' +
        '             <input id="andKorea" type="checkbox" value="Korea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Korea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKuwait" class="sa-form-checkbox-label">' +
        '             <input id="andKuwait" type="checkbox" value="Kuwait">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Kuwait</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLatvia" class="sa-form-checkbox-label">' +
        '             <input id="andLatvia" type="checkbox" value="Latvia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Latvia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLebanon" class="sa-form-checkbox-label">' +
        '             <input id="andLebanon" type="checkbox" value="Lebanon">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Lebanon</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLiberia" class="sa-form-checkbox-label">' +
        '             <input id="andLiberia" type="checkbox" value="Liberia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Liberia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLiechtenstein" class="sa-form-checkbox-label">' +
        '             <input id="andLiechtenstein" type="checkbox" value="Liechtenstein">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Liechtenstein</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLithuania" class="sa-form-checkbox-label">' +
        '             <input id="andLithuania" type="checkbox" value="Lithuania">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Lithuania</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andsLuxembourg" class="sa-form-checkbox-label">' +
        '             <input id="andLuxembourg" type="checkbox" value="Luxembourg">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Luxembourg</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMacao" class="sa-form-checkbox-label">' +
        '             <input id="andMacao" type="checkbox" value="Macao">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Macao</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMacedonia" class="sa-form-checkbox-label">' +
        '             <input id="andMacedonia" type="checkbox" value="Macedonia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Macedonia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMadagascar" class="sa-form-checkbox-label">' +
        '             <input id="andMadagascar" type="checkbox" value="Madagascar">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Madagascar</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMalawi" class="sa-form-checkbox-label">' +
        '             <input id="andMalawi" type="checkbox" value="Malawi">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Malawi</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMalaysia" class="sa-form-checkbox-label">' +
        '             <input id="andMalaysia" type="checkbox" value="Malaysia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Malaysia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMaldives" class="sa-form-checkbox-label">' +
        '             <input id="andMaldives" type="checkbox" value="Maldives">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Maldives</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMali" class="sa-form-checkbox-label">' +
        '             <input id="andMali" type="checkbox" value="Mali">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mali</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMalta" class="sa-form-checkbox-label">' +
        '             <input id="andMalta" type="checkbox" value="Malta">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Malta</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMarshallIslands" class="sa-form-checkbox-label">' +
        '             <input id="andMarshallIslands" type="checkbox" value="Marshall Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Marshall Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMexico" class="sa-form-checkbox-label">' +
        '             <input id="andMexico" type="checkbox" value="Mexico">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mexico</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMoldova" class="sa-form-checkbox-label">' +
        '             <input id="andMoldova" type="checkbox" value="Moldova">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Moldova</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMonaco" class="sa-form-checkbox-label">' +
        '             <input id="andMonaco" type="checkbox" value="Monaco">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Monaco</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMongolia" class="sa-form-checkbox-label">' +
        '             <input id="andMongolia" type="checkbox" value="Mongolia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mongolia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMontenegro" class="sa-form-checkbox-label">' +
        '             <input id="andMontenegro" type="checkbox" value="Montenegro">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Montenegro</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMontserrat" class="sa-form-checkbox-label">' +
        '             <input id="andMontserrat" type="checkbox" value="Montserrat">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Montserrat</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMozambique" class="sa-form-checkbox-label">' +
        '             <input id="andMozambique" type="checkbox" value="Mozambique">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mozambique</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNamibia" class="sa-form-checkbox-label">' +
        '             <input id="andNamibia" type="checkbox" value="Namibia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Namibia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNauru" class="sa-form-checkbox-label">' +
        '             <input id="andNauru" type="checkbox" value="Nauru">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nauru</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNepal" class="sa-form-checkbox-label">' +
        '             <input id="andNepal" type="checkbox" value="Nepal">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nepal</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNetherlands" class="sa-form-checkbox-label">' +
        '             <input id="andNetherlands" type="checkbox" value="Netherlands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Netherlands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNewZealand" class="sa-form-checkbox-label">' +
        '             <input id="andNewZealand" type="checkbox" value="New Zealand">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">New Zealand</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNicaragua" class="sa-form-checkbox-label">' +
        '             <input id="andNicaragua" type="checkbox" value="Nicaragua">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nicaragua</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNiger" class="sa-form-checkbox-label">' +
        '             <input id="andNiger" type="checkbox" value="Niger">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Niger</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNigeria" class="sa-form-checkbox-label">' +
        '             <input id="andNigeria" type="checkbox" value="Nigeria">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nigeria</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNorway" class="sa-form-checkbox-label">' +
        '             <input id="andNorway" type="checkbox" value="Norway">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Norway</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andOman" class="sa-form-checkbox-label">' +
        '             <input id="andOman" type="checkbox" value="Oman">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Oman</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPakistan" class="sa-form-checkbox-label">' +
        '             <input id="andPakistan" type="checkbox" value="Pakistan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Pakistan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPalau" class="sa-form-checkbox-label">' +
        '             <input id="andPalau" type="checkbox" value="Palau">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Palau</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPanama" class="sa-form-checkbox-label">' +
        '             <input id="andPanama" type="checkbox" value="Panama">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Panama</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andParaguay" class="sa-form-checkbox-label">' +
        '             <input id="andParaguay" type="checkbox" value="Paraguay">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Paraguay</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPeru" class="sa-form-checkbox-label">' +
        '             <input id="andPeru" type="checkbox" value="Peru">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Peru</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPhilippines" class="sa-form-checkbox-label">' +
        '             <input id="andPhilippines" type="checkbox" value="Philippines">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Philippines</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPoland" class="sa-form-checkbox-label">' +
        '             <input id="andPoland" type="checkbox" value="Poland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Poland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPortugal" class="sa-form-checkbox-label">' +
        '             <input id="andPortugal" type="checkbox" value="Portugal">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Portugal</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPuertoRico" class="sa-form-checkbox-label">' +
        '             <input id="andPuertoRico" type="checkbox" value="Puerto Rico">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Puerto Rico</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andQatar" class="sa-form-checkbox-label">' +
        '             <input id="andQatar" type="checkbox" value="Qatar">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Qatar</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andRomania" class="sa-form-checkbox-label">' +
        '             <input id="andRomania" type="checkbox" value="Romania">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Romania</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andRwanda" class="sa-form-checkbox-label">' +
        '             <input id="andRwanda" type="checkbox" value="Rwanda">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Rwanda</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintBarthelemy" class="sa-form-checkbox-label">' +
        '             <input id="andSaintBarthelemy" type="checkbox" value="Saint Barthelemy">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Barthelemy</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintHelena" class="sa-form-checkbox-label">' +
        '             <input id="andSaintHelena" type="checkbox" value="Saint Helena">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Helena</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintLucia" class="sa-form-checkbox-label">' +
        '             <input id="andSaintLucia" type="checkbox" value="Saint Lucia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Lucia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintMartin" class="sa-form-checkbox-label">' +
        '             <input id="andSaintMartin" type="checkbox" value="Saint Martin">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Martin</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSamoa" class="sa-form-checkbox-label">' +
        '             <input id="andSamoa" type="checkbox" value="Samoa">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Samoa</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSanMarino" class="sa-form-checkbox-label">' +
        '             <input id="andSanMarino" type="checkbox" value="San Marino">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">San Marino</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaudiArabia" class="sa-form-checkbox-label">' +
        '             <input id="andSaudiArabia" type="checkbox" value="Saudi Arabia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saudi Arabia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSenegal" class="sa-form-checkbox-label">' +
        '             <input id="andSenegal" type="checkbox" value="Senegal">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Senegal</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSerbia" class="sa-form-checkbox-label">' +
        '             <input id="andSerbia" type="checkbox" value="Serbia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Serbia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSingapore" class="sa-form-checkbox-label">' +
        '             <input id="andSingapore" type="checkbox" value="Singapore">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Singapore</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSlovakia" class="sa-form-checkbox-label">' +
        '             <input id="andSlovakia" type="checkbox" value="Slovakia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Slovakia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSlovenia" class="sa-form-checkbox-label">' +
        '             <input id="andSlovenia" type="checkbox" value="Slovenia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Slovenia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSolomonIslands" class="sa-form-checkbox-label">' +
        '             <input id="andSolomonIslands" type="checkbox" value="Solomon Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Solomon Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSomalia" class="sa-form-checkbox-label">' +
        '             <input id="andSomalia" type="checkbox" value="Somalia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Somalia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSouthAfrica" class="sa-form-checkbox-label">' +
        '             <input id="andSouthAfrica" type="checkbox" value="South Africa">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">South Africa</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSouthGeorgiaAndSandwichIsl" class="sa-form-checkbox-label">' +
        '             <input id="andSouthGeorgiaAndSandwichIsl" type="checkbox" value="South Georgia And Sandwich Isl.">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">South Georgia And Sandwich Isl.</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSpain" class="sa-form-checkbox-label">' +
        '             <input id="andSpain" type="checkbox" value="Spain">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Spain</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSudan" class="sa-form-checkbox-label">' +
        '             <input id="andSudan" type="checkbox" value="Sudan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Sudan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="anbdSwaziland" class="sa-form-checkbox-label">' +
        '             <input id="andSwaziland" type="checkbox" value="Swaziland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Swaziland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSweden" class="sa-form-checkbox-label">' +
        '             <input id="andSweden" type="checkbox" value="Sweden">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Sweden</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSwitzerland" class="sa-form-checkbox-label">' +
        '             <input id="andSwitzerland" type="checkbox" value="Switzerland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Switzerland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSyrianArabRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andSyrianArabRepublic" type="checkbox" value="Syrian Arab Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Syrian Arab Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andTaiwan" class="sa-form-checkbox-label">' +
        '             <input id="andTaiwan" type="checkbox" value="Taiwan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Taiwan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andTajikistan" class="sa-form-checkbox-label">' +
        '             <input id="andTajikistan" type="checkbox" value="Tajikistan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Tajikistan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andTanzania" class="sa-form-checkbox-label">' +
        '             <input id="andTanzania" type="checkbox" value="Tanzania">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Tanzania</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andThailand" class="sa-form-checkbox-label">' +
        '             <input id="andThailand" type="checkbox" value="Thailand">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Thailand</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andTonga" class="sa-form-checkbox-label">' +
        '<input id="andTonga" type="checkbox" value="Tonga">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Tonga</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andTunisia" class="sa-form-checkbox-label">' +
        '<input id="andTunisia" type="checkbox" value="Tunisia">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Tunisia</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andTurkey" class="sa-form-checkbox-label">' +
        '<input id="andTurkey" type="checkbox" value="Turkey">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Turkey</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUganda" class="sa-form-checkbox-label">' +
        '<input id="andUganda" type="checkbox" value="Uganda">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Uganda</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUkraine" class="sa-form-checkbox-label">' +
        '<input id="andUkraine" type="checkbox" value="Ukraine">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Ukraine</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedArabEmirates" class="sa-form-checkbox-label">' +
        '<input id="andUnitedArabEmirates" type="checkbox" value="United Arab Emirates">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United Arab Emirates</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedKingdom" class="sa-form-checkbox-label">' +
        '<input id="andUnitedKingdom" type="checkbox" value="United Kingdom">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United Kingdom</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedStates" class="sa-form-checkbox-label">' +
        '<input id="andUnitedStates" type="checkbox" value="United States">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United States</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedStatesOutlyingIslands" class="sa-form-checkbox-label">' +
        '<input id="andUnitedStatesOutlyingIslands" type="checkbox" value="United States Outlying Islands">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United States Outlying Islands</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUruguay" class="sa-form-checkbox-label">' +
        '<input id="andUruguay" type="checkbox" value="Uruguay">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Uruguay</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUzbekistan" class="sa-form-checkbox-label">' +
        '<input id="andUzbekistan" type="checkbox" value="Uzbekistan">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Uzbekistan</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVenezuela" class="sa-form-checkbox-label">' +
        '<input id="andVenezuela" type="checkbox" value="Venezuela">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Venezuela</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVietNam" class="sa-form-checkbox-label">' +
        '<input id="andVietNam" type="checkbox" value="Viet Nam">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Viet Nam</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVirginIslands" class="sa-form-checkbox-label">' +
        '<input id="andVirginIslands" type="checkbox" value="Virgin Islands, British">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Virgin Islands, British</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVirginIslandsUS" class="sa-form-checkbox-label">' +
        '<input id="andVirginIslandsUS" type="checkbox" value="Virgin Islands, U.S">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Virgin Islands, U.S.</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andYemen" class="sa-form-checkbox-label">' +
        '<input id="andYemen" type="checkbox" value="Yemen">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Yemen</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andZambia" class="sa-form-checkbox-label">' +
        '<input id="andZambia" type="checkbox" value="Zambia">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Zambia</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andZimbabwe" class="sa-form-checkbox-label">' +
        '<input id="andZimbabwe" type="checkbox" value="Zimbabwe">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Zimbabwe</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '</div>' +
        '</div>'+
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addCountryRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addGeoRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addGeoRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - Geo Velocity</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +

        '<div class="select-container" id="selectGeoRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToGeo" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="card-block radiobuttons" id="GeoRadio">' +
        '<span class="mr-3">IF the user</span>' +
        '<label for="isGeo" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="GeoRadio" id="isGeo" value="has" class="hidden" checked />' +
        '<span class="label"></span>has' +
        '</label>' +
        '<label for="isNotGeo" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="GeoRadio" id="isNotGeo" value="has not" class="hidden" />' +
        '<span class="label"></span>has not' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label>Moved faster than <span class="asterisk">*</span></label>' +
        '<input type="number" placeholder="Set distance" id="movedGeo">' +
        '</div>' +
        '<div data-id="sa-toast" class="sa-toast sa-toast-info-no-hover">' +
        '<div class="sa-toast-icon"><svg xmlns="http://www.w3.org/2000/svg"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24"' +
        'class="sa-icon-info sa-icon-large" transform="translate(1,1)">' +
        '<path d="M9 7H11V5H9V7ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM9 15H11V9H9V15Z">' +
        '</path>' +
        '</svg></div>' +
        '<div class="sa-toast-text" data-id="sa-toast-text">' +
        '<div class="sa-toast-text" data-id="sa-toast-text" style="font-size:10px;">Average speed of a commercial airliner is approximately 575 PM/H.' +
        'This calculation users the time and distance since the user’s last successful authentication.</div>' +
        '</div>' +
        '</div>' +

        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addGeoRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addGroupRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addGroupRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - Group</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +
        '<div class="select-container" id="selectGroupRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToGroup" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="card-block radiobuttons" id="groupRadio">' +
        '<span class="mr-3">IF the user</span>' +
        '<label for="isGroup" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="groupRadio" id="isGroup" value="is" class="hidden" checked />' +
        '<span class="label"></span>is' +
        '</label>' +
        '<label for="isNotGroup" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="groupRadio" id="isNotGroup" value="is not" class="hidden" />' +
        '<span class="label"></span>is not' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<label>Select Groups <span class="asterisk">*</span></label>' +
        '<select name="groups" id="groupSelection" multiple="" class="label fluid ui selection dropdown">' +
        '<option>Group 01</option>' +
        '<option>Group 02</option>' +
        '<option>Group 03</option>' +
        '<option>Group 04</option>' +
        '<option>Group 05</option>' +
        '</select>' +
        '<div class="form-group clearfix">' +
        '             <label>Data Store <span class="asterisk">*</span></label>' +
        '             <p class="subtitle">Select the data stores for this internal application. Only users in' +
        '                 these data' +
        '                 stores can access this.</p>' +
        '      <button class="button-dropdown">Select Option</button>' +
        '      <span title="" class="keywords-count"></span>' +
        '   <div class="multiple-dropdown">' +
        '              <div class="select-option">' +
        '                 <input type="button" class="select-options-btn" placeholder="Select option"' +
        '     value="Select options" />' +
        ' <svg width="24" height="24" viewBox="0 0 24 24" fill="none"' +
        '      xmlns="http://www.w3.org/2000/svg">' +
        '      <path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '  </svg>' +
        '      </div>' +
        '   <div class="multiSel"></div>' +
        '     <div class="mutliSelect">' +
        '     <ul>' +
        '         <li>' +
        '           <div class="sa-form-checkbox violet-checkbox">' +
        '        <label for="DS01" class="sa-form-checkbox-label">' +
        '        <input id="DS01" type="checkbox" value="Data Store 01">' +
        '             <span class="sa-form-checkbox-pseudo-input">' +
        '                 <span></span>' +
        '             </span>' +
        '             <span class="sa-form-checkbox-label-text">Data Store 01</span>' +
        '         </label>' +
        '      </div>' +
        '      </li>' +
        '      <li>' +
        '    <div class="sa-form-checkbox violet-checkbox">' +
        '        <label for="DS02" class="sa-form-checkbox-label">' +
        '          <input id="DS02" type="checkbox" value="Data Store 02">' +
        '           <span class="sa-form-checkbox-pseudo-input">' +
        '              <span></span>' +
        '                   </span>' +
        '                  <span class="sa-form-checkbox-label-text">Data Store 02</span>' +
        '          </label>' +
        '       </div>' +
        '     </li>' +
        '     </ul>' +
        '         </div>' +
        '           <button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '        </div>' +
        '        </div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addGroupRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addIPRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addIPRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - IP Range</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +
        '<div class="select-container" id="selectIpRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToIp" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="card-block radiobuttons" id="ipRadio">' +
        '<span class="mr-3">IF the user</span>' +
        '<label for="isIp" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="ipRadio" id="isIp" value="is" class="hidden" checked />' +
        '<span class="label"></span>is' +
        '</label>' +
        '<label for="isNotIp" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="ipRadio" id="isNotIp" value="is not" class="hidden" />' +
        '<span class="label"></span>is not' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label>Set IP Addresses <span class="asterisk">*</span></label>' +
        '<p class="subtitle">Separate IP entries with a comma. IPs can only be in IPv4 format</p>' +
        '<input type="text" value="" data-role="tagsinput" placeholder="Add IP(s)" />' +
        '</div>' +

        '<div data-id="sa-toast" class="sa-toast sa-toast-info-no-hover">' +
        '<div class="sa-toast-icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" class="sa-icon-info sa-icon-large" transform="translate(1,1)">' +
        '<path d="M9 7H11V5H9V7ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0ZM9 15H11V9H9V15Z">' +
        '</path>' +
        '</svg>' +
        '</div>' +
        '<div class="sa-toast-text" data-id="sa-toast-text">' +
        '<div class="sa-toast-text" data-id="sa-toast-text" style="font-size:10px;">' +
        '<span style="color: #2995F5;">IP Address Formats</span><br/> IPv4 addresses can be entered as individual values, ranges, or using CIDR Notation. <br/>' +
        'Examples <br/>' +
        '<span class="sa-tag sa-tag-secondary"><div class="sa-type-caption"> 123.123.123.23 </div></span> <span class="sa-tag sa-tag-secondary"><div class="sa-type-caption"> 123.123.123.23-123.123.123.27 </div></span> ' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addIPRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addThreatRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addThreatRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - Threat Service</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +

        '<div class="select-container" id="selectServiceRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToService" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<p><strong>IF the user’s Threat Service level is</strong></p>' +

        '<div class="sa-form-checkbox" id="serviceRadio">' +
        '    <div class="sa-layout-item sa-layout-item-align-left sa-layout-item-v-align-top sa-layout-item-auto-width mr-2">' +
        '        <label for="extremeService" class="sa-form-checkbox-label mr-2">' +
        '           <input name="selectLevelService" value="Extreme" id="extremeService" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '            <span class="sa-form-checkbox-label-text">Extreme</span>' +
        '       </label>' +
        '        <label for="HighService" class="sa-form-checkbox-label mr-2">' +
        '           <input name="selectLevelService" value="High" id="HighService" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '            <span class="sa-form-checkbox-label-text">High</span>' +
        '       </label>' +
        '        <label for="MediumService" class="sa-form-checkbox-label mr-2">' +
        '           <input name="selectLevelService" value="Medium" id="MediumService" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '            <span class="sa-form-checkbox-label-text" for="MediumService">Medium</span>' +
        '       </label>' +
        '        <label for="LowService" class="sa-form-checkbox-label">' +
        '           <input name="selectLevelService" value="Low" id="LowService" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '            <span class="sa-form-checkbox-label-text">Low</span>' +
        '       </label>' +
        '    </div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addThreatRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addUserRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addUserRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - User</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +

        '<div class="select-container" id="selectUserRules">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToUser" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="card-block radiobuttons" id="userRadio">' +
        '<span class="mr-3">IF the users ID</span>' +
        '<label for="isUser" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="userRadio" id="isUser" value="is" class="hidden" checked />' +
        '<span class="label"></span>is' +
        '</label>' +
        '<label for="isNotUser" class="radio" style="margin:10px 15px 10px 0">' +
        '<input type="radio" name="userRadio" id="isNotUser" value="is not" class="hidden" />' +
        '<span class="label"></span>is not' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<label>Enter user IDs <span class="asterisk">*</span></label>' +
        '<select name="groups" id="userSelection" multiple="" class="label fluid ui selection dropdown">' +
        '<option>User01</option>' +
        '<option>User02</option>' +
        '<option>User03</option>' +
        '<option>User04</option>' +
        '<option>User05</option>' +
        '</select>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addUserRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

function addRiskRuleModal() {
    $("body").append(
        '<div class="modal" tabindex="-1" role="dialog" id="addRiskRuleModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title">New Rule - User Risk</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="form-group">' +
        '<label>Condition Rule</label>' +
        '<div class="select-container" id="selectRulesUserRisk">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group redirectTo" style="display:none;">' +
        '<label>Add URL</label>' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToUserRisk" class="urlRedirectTo" />' +
        '</div>' +
        '<div class="form-group">' +
        '<p><strong>IF the user’s User Risk is</strong></p>' +

        '<div class="sa-form-checkbox" id="userRiskRadio">' +
        '    <div class="sa-layout-item sa-layout-item-align-left sa-layout-item-v-align-top sa-layout-item-auto-width mr-2">' +
        '        <label for="HighUserRisk" class="sa-form-checkbox-label mr-2">' +
        '           <input name="selectLevelUserRisk" value="High" id="HighUserRisk" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '           <span class="sa-form-checkbox-label-text">High</span>' +
        '       </label>' +
        '        <label for="MediumUserRisk" class="sa-form-checkbox-label mr-2">' +
        '           <input name="selectLevelUserRisk" value="Medium" id="MediumUserRisk" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '           <span class="sa-form-checkbox-label-text">Medium</span>' +
        '       </label>' +
        '        <label for="LowUserRisk" class="sa-form-checkbox-label">' +
        '           <input name="selectLevelUserRisk" value="Low" id="LowUserRisk" type="checkbox">' +
        '           <span class="sa-form-checkbox-pseudo-input"><span></span></span>' +
        '           <span class="sa-form-checkbox-label-text">Low</span>' +
        '       </label>' +
        '    </div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="sa-button-tertiary" data-dismiss="modal">Cancel</button>' +
        '<button type="button" class="sa-button-primary" onclick="addRiskRule()" data-dismiss="modal">Add rule to this policy</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
}

// OR RULE

function addConditionalPassword() {
    rowNum++;

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field conditional-password" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center flex-wrap">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p> <strong> Conditional Password</strong>' +
        '<p style="color:#2372B8; flex-basis:100%;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.25 6.75H9.75V5.25H8.25V6.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5ZM8.25 12.75H9.75V8.25H8.25V12.75Z" fill="#2372B8"/></svg>' +
        'You must add at least one and not more than four unique conditions.</p>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addDeviceRecognitionAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/desktop.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Device Recognition</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addMfaAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/lock.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Multi-Factor Methods</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addDynamicIPRule() {
    rowNum++;
    var selectConditionRule = $("#selectRulesDynamicIp option:selected").text();
    var radioRule = $('input[name=dynamicIpRadio]:checked', '#dynamicIpRadio').attr("value");
    var inputRule = $("#dynamicIpSelection option:selected").text();
    var redirectTo = $('input#urlRedirectToDynamicIp').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>For 24 hours when 5 of failed login attemps occur from</p>' +
        '<a href="">' + inputRule + '</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addPerimeterRule() {
    rowNum++;
    var selectConditionRule = $("#perimeterRules option:selected").text();
    var radioRule = $('input[name=perimeterRulesRadio]:checked', '#perimeterRulesRadio').attr("value");
    var inputRule = $('input#distancePerimeter').val();
    var redirectTo = $('input#urlRedirectToPerimeter').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a class="mr-2" onclick="addPerimeterRuleModal()" data-toggle="modal" data-target="#addPerimeterRuleModal">' + selectConditionRule + '</a>' +
        '<a class="inputRedirectTo" onclick="addPerimeterRule()" data-toggle="modal" data-target="#addPerimeterRuleModal">' + redirectTo + '</a>' +
        '<p>IF the user</p>' +
        '<a onclick="addPerimeterRule()" data-toggle="modal" data-target="#addPerimeterRuleModal">' + radioRule + '</a>' +
        '<p>within</p>' +
        '<a onclick="addPerimeterRule()" data-toggle="modal" data-target="#addPerimeterRuleModal">' + inputRule + '</a>' +
        '<p>miles from their previous location</p>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addCountryRule() {
    rowNum++;
    var selectConditionRule = $("#selectcountryRules li.selected").text();
    var radioRule = $('input[name=countryRadio]:checked', '#countryRadio').attr("value");
    var inputRule = $("#listCountries input[type='checkbox']:checked").length;
    var redirectTo = $('input#urlRedirectToCountry').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a>' + selectConditionRule + '</a>' +
        '<a>'+ redirectTo +'</a>'+
        '<p>IF the user’s current location</p>' +
        '<a href="">' + radioRule + '</a>' +
        '<p>in</p>' +
        '<a href="">' + inputRule + ' Countries</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addGeoRule() {
    rowNum++;
    var selectConditionRule = $("#selectGeoRules option:selected").text();
    var radioRule = $('input[name=GeoRadio]:checked', '#GeoRadio').attr("value");
    var inputRule = $('#movedGeo').val();
    var redirectTo = $('input#urlRedirectToGeo').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user</p>' +
        '<a href="">' + radioRule + '</a>' +
        '<p>moved faster than</p>' +
        '<a href="">' + inputRule + '</a>' +
        '<p>mph</p>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addGroupRule() {
    rowNum++;
    var selectConditionRule = $("#selectGroupRules option:selected").text();
    var radioRule = $('input[name=groupRadio]:checked', '#groupRadio').attr("value");
    var inputRule = $('#groupSelection option:selected').text();
    var redirectTo = $('input#urlRedirectToGroup').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user</p>' +
        '<a href="">' + radioRule + '</a>' +
        '<p>in</p>' +
        '<a href="">' + inputRule + '</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addIPRule() {
    rowNum++;
    var selectConditionRule = $("#selectIpRules option:selected").text();
    var radioRule = $('input[name=ipRadio]:checked', '#ipRadio').attr("value");
    var inputRule = $("#ipSelection option:selected").text();
    var redirectTo = $('input#urlRedirectToIp').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user</p>' +
        '<a href="">' + radioRule + '</a>' +
        '<p>in</p>' +
        '<a href="">' + inputRule + '</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addThreatRule() {
    rowNum++;
    var selectConditionRule = $("#selectServiceRules option:selected").text();
    var redirectTo = $('input#urlRedirectToService').val();

    var checked = [];
    $("input[name='selectLevelService']:checked").each(function () {
        checked.push($(this).val());
    });

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user’s Threat Service level is</p>' +
        '<a href="" class="test">' + checked + '</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addUserRule() {
    rowNum++;
    var selectConditionRule = $("#selectUserRules option:selected").text();
    var radioRule = $('input[name=userRadio]:checked', '#userRadio').attr("value");
    var inputRule = $('#userSelection option:selected').text();
    var redirectTo = $('input#urlRedirectToUser').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user</p>' +
        '<a href="">' + radioRule + '</a>' +
        '<p>in</p>' +
        '<a href="">' + inputRule + '</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

function addRiskRule() {
    rowNum++;
    var selectConditionRule = $("#selectRulesUserRisk option:selected").text();
    var redirectTo = $('input#urlRedirectToUserRisk').val();

    var checked = [];
    $("input[name='selectLevelUserRisk']:checked").each(function () {
        checked.push($(this).val());
    });

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<p>Redirect to: </p>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user’s Threat Service level is</p>' +
        '<a href="" class="test">' + checked + '</a>' +
        '</div>' +
        '<div class="col-3 text-right">' +
        '<button class="dropbtn sa-type-link" id="dropdownMenuButton" data-toggle="dropdown">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">' +
        '<path d="M2 2H8.66667V6.44444H2V2ZM15.3333 9.77778H22V14.2222H15.3333V9.77778ZM15.3333 17.5556H22V22H15.3333V17.5556ZM13.1111 13.1111H6.44444V18.6667H13.1111V20.8889H6.44444H4.22222V8.66667H6.44444V10.8889H13.1111V13.1111Z" fill="#2995F5" />' +
        '</svg>' +
        'Add condition' +
        '</button>' +
        '<ul class="list-rules dropdown-menu" aria-labelledby="dropdownMenuButton">' +
        '<li>' +
        '<div onclick="addPerimeterRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/map-point.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Dynamic Perimeter</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addCountryRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/world.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Country</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGeoRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/airplane.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Geo-velocity</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addGroupRuleAnd()"' +
        'class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/groups.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Group</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addIPRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/ip.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">IP Range</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addThreatRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/risk.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">Threat Service</span>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addUserRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/user.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User</span></div>' +
        '</li>' +
        '<li>' +
        '<div onclick="addRiskRuleAnd()" class="sa-box-stack-top-xsmall-padding sa-box-stack-bottom-xsmall-padding">' +
        '<img src="images/rules/security.svg" alt="" />' +
        '<span class="sa-type-body sa-type-pointer">User Risk</span></div>' +
        '</li>' +
        '</ul>' +
        '<img src="images/delete.svg" alt="" class="float-right btnDelete" />' +
        '</div>' +
        '</div>' +
        '<div id="andContainer" class="andContainer"></div>' +
        '</div>');
    callDropdown();
}

// AND RULE
function addPerimeterRuleAnd() {
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class="">the user</div>' +
        '<div class="select-container select-noborder mr-1">' +
        '<div class="select-dropdown d-flex align-items-center">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">is</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option selected" value="is">is</li>' +
        '<li class="select-option" value="is not">is not</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class=" mr-2">within</div>' +
        '<input type="number" placeholder="Set distance" class="w-auto">' +
        '<div class=" ml-2">from their previous location</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addCountryRuleAnd() {
    buttonID++;
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF the user’s current location </p>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<p>in </p>' +
        '<button class="link-dropdown" id="'+ buttonID +'">Select Countries</button>' +
        '<span title="" class="keywords-count"></span>' +
        '<div class="multiple-dropdown">' +
        '<div class="select-option">' +
        '<input type="button" class="select-options-btn" placeholder="Select option"' +
        'value="Select options" />' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '</svg>' +
        '</div>' +
        '<div class="multiSel"></div>' +
        '<div class="mutliSelect">' +
        '<ul>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAfghanistan" class="sa-form-checkbox-label">' +
        '<input id="andAfghanistan" type="checkbox" value="Afghanistan">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Afghanistan</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAlandIslands" class="sa-form-checkbox-label">' +
        '<input id="andAlandIslands" type="checkbox" value="Aland Islands">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Aland Islands</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAlbania" class="sa-form-checkbox-label">' +
        '<input id="andAlbania" type="checkbox" value="Albania">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Albania</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAlgeria" class="sa-form-checkbox-label">' +
        '<input id="andAlgeria" type="checkbox" value="Algeria">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Algeria</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAmericanSamoa" class="sa-form-checkbox-label">' +
        '<input id="andAmericanSamoa" type="checkbox" value="American Samoa">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">American Samoa</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAndorra" class="sa-form-checkbox-label">' +
        '<input id="andAndorra" type="checkbox" value="Andorra">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Andorra</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAngola" class="sa-form-checkbox-label">' +
        '<input id="andAngola" type="checkbox" value="Angola">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Angola</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAnguilla" class="sa-form-checkbox-label">' +
        '<input id="andAnguilla" type="checkbox" value="Anguilla">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Anguilla</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAntarctica" class="sa-form-checkbox-label">' +
        '<input id="andAntarctica" type="checkbox" value="Antarctica">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Antarctica</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAntiguaAndBarbuda" class="sa-form-checkbox-label">' +
        '<input id="andAntiguaAndBarbuda" type="checkbox" value="Antigua And Barbuda">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Antigua And Barbuda</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andArgentina" class="sa-form-checkbox-label">' +
        '<input id="andArgentina" type="checkbox" value="Argentina">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Argentina</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andArmenia" class="sa-form-checkbox-label">' +
        '<input id="andArmenia" type="checkbox" value="Armenia">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Armenia</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andAruba" class="sa-form-checkbox-label">' +
        '<input id="andAruba" type="checkbox" value="Aruba">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Aruba</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andAustralia" class="sa-form-checkbox-label">' +
        '             <input id="andAustralia" type="checkbox" value="Australia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Australia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andAustria" class="sa-form-checkbox-label">' +
        '             <input id="andAustria" type="checkbox" value="Austria">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Austria</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andAzerbaijan" class="sa-form-checkbox-label">' +
        '             <input id="andAzerbaijan" type="checkbox" value="Azerbaijan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Azerbaijan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBahamas" class="sa-form-checkbox-label">' +
        '             <input id="andBahamas" type="checkbox" value="Bahamas">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bahamas</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBahrain" class="sa-form-checkbox-label">' +
        '             <input id="andBahrain" type="checkbox" value="Bahrain">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bahrain</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBangladesh" class="sa-form-checkbox-label">' +
        '             <input id="andBangladesh" type="checkbox" value="Bangladesh">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bangladesh</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBarbados" class="sa-form-checkbox-label">' +
        '             <input id="andBarbados" type="checkbox" value="Barbados">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Barbados</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBelarus" class="sa-form-checkbox-label">' +
        '             <input id="andBelarus" type="checkbox" value="Belarus">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Belarus</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBelgium" class="sa-form-checkbox-label">' +
        '             <input id="andBelgium" type="checkbox" value="Belgium">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Belgium</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBelize" class="sa-form-checkbox-label">' +
        '             <input id="andBelize" type="checkbox" value="Belize">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Belize</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="Benin" class="sa-form-checkbox-label">' +
        '             <input id="Benin" type="checkbox" value="Benin">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Benin</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBermuda" class="sa-form-checkbox-label">' +
        '             <input id="andBermuda" type="checkbox" value="Bermuda">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bermuda</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBhutan" class="sa-form-checkbox-label">' +
        '             <input id="andBhutan" type="checkbox" value="Bhutan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bhutan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBolivia" class="sa-form-checkbox-label">' +
        '             <input id="andBolivia" type="checkbox" value="Bolivia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bolivia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBosniaAndHerzegovina" class="sa-form-checkbox-label">' +
        '             <input id="andBosniaAndHerzegovina" type="checkbox" value="Bosnia And Herzegovina">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bosnia And Herzegovina</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBotswana" class="sa-form-checkbox-label">' +
        '             <input id="andBotswana" type="checkbox" value="Botswana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Botswana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBouvetIsland" class="sa-form-checkbox-label">' +
        '             <input id="andBouvetIsland" type="checkbox" value="Bouvet Island">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bouvet Island</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBrazil" class="sa-form-checkbox-label">' +
        '             <input id="andBrazil" type="checkbox" value="Brazil">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Brazil</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBritishIndianOceanTerritory" class="sa-form-checkbox-label">' +
        '             <input id="andBritishIndianOceanTerritory" type="checkbox" value="British Indian Ocean Territory">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">British Indian Ocean Territory</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBruneiDarussalam" class="sa-form-checkbox-label">' +
        '             <input id="andBruneiDarussalam" type="checkbox" value="Brunei Darussalam">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Brunei Darussalam</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBulgaria" class="sa-form-checkbox-label">' +
        '             <input id="andBulgaria" type="checkbox" value="Bulgaria">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Bulgaria</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBurkinaFaso" class="sa-form-checkbox-label">' +
        '             <input id="andBurkinaFaso" type="checkbox" value="Burkina Faso">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Burkina Faso</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andBurundi" class="sa-form-checkbox-label">' +
        '             <input id="andBurundi" type="checkbox" value="Burundi">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Burundi</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCambodia" class="sa-form-checkbox-label">' +
        '             <input id="andCambodia" type="checkbox" value="Cambodia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cambodia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCameroon" class="sa-form-checkbox-label">' +
        '             <input id="andCameroon" type="checkbox" value="Cameroon">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cameroon</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCanada" class="sa-form-checkbox-label">' +
        '             <input id="andCanada" type="checkbox" value="Canada">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Canada</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCapeVerde" class="sa-form-checkbox-label">' +
        '             <input id="andCapeVerde" type="checkbox" value="Cape Verde">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cape Verde</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCaymanIslands" class="sa-form-checkbox-label">' +
        '             <input id="andCaymanIslands" type="checkbox" value="Cayman Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cayman Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCentralAfricanRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andCentralAfricanRepublic" type="checkbox" value="Central African Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Central African Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChad" class="sa-form-checkbox-label">' +
        '             <input id="andChad" type="checkbox" value="Chad">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Chad</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChile" class="sa-form-checkbox-label">' +
        '             <input id="andChile" type="checkbox" value="Chile">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Chile</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChina" class="sa-form-checkbox-label">' +
        '             <input id="andChina" type="checkbox" value="China">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">China</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andChristmasIsland" class="sa-form-checkbox-label">' +
        '             <input id="andChristmasIsland" type="checkbox" value="Christmas Island">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Christmas Island</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCocos(Keeling)Islands" class="sa-form-checkbox-label">' +
        '             <input id="andCocos(Keeling)Islands" type="checkbox" value="Cocos (Keeling) Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cocos (Keeling) Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andColombia" class="sa-form-checkbox-label">' +
        '             <input id="andColombia" type="checkbox" value="Colombia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Colombia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andComoros" class="sa-form-checkbox-label">' +
        '             <input id="andComoros" type="checkbox" value="Comoros">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Comoros</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCongo" class="sa-form-checkbox-label">' +
        '             <input id="andCongo" type="checkbox" value="Congo">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Congo</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCongoDemocraticRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andCongoDemocraticRepublic" type="checkbox" value="Congo, Democratic Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Congo, Democratic Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCookIslands" class="sa-form-checkbox-label">' +
        '             <input id="andCookIslands" type="checkbox" value="Cook Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cook Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCostaRica" class="sa-form-checkbox-label">' +
        '             <input id="andCostaRica" type="checkbox" value="Costa Rica">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Costa Rica</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCroatia" class="sa-form-checkbox-label">' +
        '             <input id="andCroatia" type="checkbox" value="Croatia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Croatia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCuba" class="sa-form-checkbox-label">' +
        '             <input id="andCuba" type="checkbox" value="Cuba">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cuba</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCyprus" class="sa-form-checkbox-label">' +
        '             <input id="andCyprus" type="checkbox" value="Cyprus">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Cyprus</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andCzechRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andCzechRepublic" type="checkbox" value="Czech Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Czech Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDenmark" class="sa-form-checkbox-label">' +
        '             <input id="andDenmark" type="checkbox" value="Denmark">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Denmark</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDjibouti" class="sa-form-checkbox-label">' +
        '             <input id="andDjibouti" type="checkbox" value="Djibouti">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Djibouti</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDominica" class="sa-form-checkbox-label">' +
        '             <input id="andDominica" type="checkbox" value="Dominica">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Dominica</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andDominicanRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andDominicanRepublic" type="checkbox" value="Dominican Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Dominican Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEcuador" class="sa-form-checkbox-label">' +
        '             <input id="andEcuador" type="checkbox" value="Ecuador">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ecuador</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEgypt" class="sa-form-checkbox-label">' +
        '             <input id="andEgypt" type="checkbox" value="Egypt">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Egypt</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andElSalvador" class="sa-form-checkbox-label">' +
        '             <input id="andElSalvador" type="checkbox" value="El Salvador">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">El Salvador</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEquatorialGuinea" class="sa-form-checkbox-label">' +
        '             <input id="andEquatorialGuinea" type="checkbox" value="Equatorial Guinea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Equatorial Guinea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEritrea" class="sa-form-checkbox-label">' +
        '             <input id="andEritrea" type="checkbox" value="Eritrea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Eritrea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEstonia" class="sa-form-checkbox-label">' +
        '             <input id="andEstonia" type="checkbox" value="Estonia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Estonia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andEthiopia" class="sa-form-checkbox-label">' +
        '             <input id="andEthiopia" type="checkbox" value="Ethiopia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ethiopia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFalklandIslands" class="sa-form-checkbox-label">' +
        '             <input id="andFalklandIslands" type="checkbox" value="Falkland Islands (Malvinas)">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Falkland Islands (Malvinas)</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFiji" class="sa-form-checkbox-label">' +
        '             <input id="andFiji" type="checkbox" value="Fiji">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Fiji</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFinland" class="sa-form-checkbox-label">' +
        '             <input id="andFinland" type="checkbox" value="Finland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Finland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFrance" class="sa-form-checkbox-label">' +
        '             <input id="andFrance" type="checkbox" value="France">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">France</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFrenchGuiana" class="sa-form-checkbox-label">' +
        '             <input id="andFrenchGuiana" type="checkbox" value="French Guiana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">French Guiana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andFrenchPolynesia" class="sa-form-checkbox-label">' +
        '             <input id="andFrenchPolynesia" type="checkbox" value="French Polynesia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">French Polynesia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGabon" class="sa-form-checkbox-label">' +
        '             <input id="andGabon" type="checkbox" value="Gabon">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Gabon</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGambia" class="sa-form-checkbox-label">' +
        '             <input id="andGambia" type="checkbox" value="Gambia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Gambia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGeorgia" class="sa-form-checkbox-label">' +
        '             <input id="andGeorgia" type="checkbox" value="Georgia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Georgia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGermany" class="sa-form-checkbox-label">' +
        '             <input id="andGermany" type="checkbox" value="Germany">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Germany</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGhana" class="sa-form-checkbox-label">' +
        '             <input id="andGhana" type="checkbox" value="Ghana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ghana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGibraltar" class="sa-form-checkbox-label">' +
        '             <input id="andGibraltar" type="checkbox" value="Gibraltar">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Gibraltar</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGreece" class="sa-form-checkbox-label">' +
        '             <input id="andGreece" type="checkbox" value="Greece">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Greece</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGreenland" class="sa-form-checkbox-label">' +
        '             <input id="andGreenland" type="checkbox" value="Greenland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Greenland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGrenada" class="sa-form-checkbox-label">' +
        '             <input id="andGrenada" type="checkbox" value="Grenada">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Grenada</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuadeloupe" class="sa-form-checkbox-label">' +
        '             <input id="andGuadeloupe" type="checkbox" value="Guadeloupe">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guadeloupe</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuam" class="sa-form-checkbox-label">' +
        '             <input id="andGuam" type="checkbox" value="Guam">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guam</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuatemala" class="sa-form-checkbox-label">' +
        '             <input id="andGuatemala" type="checkbox" value="Guatemala">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guatemala</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuernsey" class="sa-form-checkbox-label">' +
        '             <input id="andGuernsey" type="checkbox" value="Guernsey">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guernsey</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuinea" class="sa-form-checkbox-label">' +
        '             <input id="andGuinea" type="checkbox" value="Guinea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guinea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andGuyana" class="sa-form-checkbox-label">' +
        '             <input id="andGuyana" type="checkbox" value="Guyana">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Guyana</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHaiti" class="sa-form-checkbox-label">' +
        '             <input id="andHaiti" type="checkbox" value="Haiti">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Haiti</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHonduras" class="sa-form-checkbox-label">' +
        '             <input id="andHonduras" type="checkbox" value="Honduras">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Honduras</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHongKong" class="sa-form-checkbox-label">' +
        '             <input id="andHongKong" type="checkbox" value="Hong Kong">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Hong Kong</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andHungary" class="sa-form-checkbox-label">' +
        '             <input id="andHungary" type="checkbox" value="Hungary">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Hungary</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="anbdIceland" class="sa-form-checkbox-label">' +
        '             <input id="andIceland" type="checkbox" value="Iceland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Iceland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIndia" class="sa-form-checkbox-label">' +
        '             <input id="andIndia" type="checkbox" value="India">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">India</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIndonesia" class="sa-form-checkbox-label">' +
        '             <input id="andIndonesia" type="checkbox" value="Indonesia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Indonesia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIranIslamicRepublicOf" class="sa-form-checkbox-label">' +
        '             <input id="andIranIslamicRepublicOf" type="checkbox" value="Iran, Islamic Republic Of">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Iran, Islamic Republic Of</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIraq" class="sa-form-checkbox-label">' +
        '             <input id="andIraq" type="checkbox" value="Iraq">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Iraq</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIreland" class="sa-form-checkbox-label">' +
        '             <input id="andIreland" type="checkbox" value="Ireland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Ireland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andIsrael" class="sa-form-checkbox-label">' +
        '             <input id="andIsrael" type="checkbox" value="Israel">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Israel</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andItaly" class="sa-form-checkbox-label">' +
        '             <input id="andItaly" type="checkbox" value="Italy">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Italy</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJamaica" class="sa-form-checkbox-label">' +
        '             <input id="andJamaica" type="checkbox" value="Jamaica">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Jamaica</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJapan" class="sa-form-checkbox-label">' +
        '             <input id="andJapan" type="checkbox" value="Japan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Japan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJersey" class="sa-form-checkbox-label">' +
        '             <input id="andJersey" type="checkbox" value="Jersey">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Jersey</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andJordan" class="sa-form-checkbox-label">' +
        '             <input id="andJordan" type="checkbox" value="Jordan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Jordan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKazakhstan" class="sa-form-checkbox-label">' +
        '             <input id="andKazakhstan" type="checkbox" value="Kazakhstan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Kazakhstan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKenya" class="sa-form-checkbox-label">' +
        '             <input id="andKenya" type="checkbox" value="Kenya">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Kenya</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKorea" class="sa-form-checkbox-label">' +
        '             <input id="andKorea" type="checkbox" value="Korea">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Korea</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andKuwait" class="sa-form-checkbox-label">' +
        '             <input id="andKuwait" type="checkbox" value="Kuwait">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Kuwait</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLatvia" class="sa-form-checkbox-label">' +
        '             <input id="andLatvia" type="checkbox" value="Latvia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Latvia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLebanon" class="sa-form-checkbox-label">' +
        '             <input id="andLebanon" type="checkbox" value="Lebanon">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Lebanon</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLiberia" class="sa-form-checkbox-label">' +
        '             <input id="andLiberia" type="checkbox" value="Liberia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Liberia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLiechtenstein" class="sa-form-checkbox-label">' +
        '             <input id="andLiechtenstein" type="checkbox" value="Liechtenstein">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Liechtenstein</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andLithuania" class="sa-form-checkbox-label">' +
        '             <input id="andLithuania" type="checkbox" value="Lithuania">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Lithuania</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andsLuxembourg" class="sa-form-checkbox-label">' +
        '             <input id="andLuxembourg" type="checkbox" value="Luxembourg">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Luxembourg</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMacao" class="sa-form-checkbox-label">' +
        '             <input id="andMacao" type="checkbox" value="Macao">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Macao</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMacedonia" class="sa-form-checkbox-label">' +
        '             <input id="andMacedonia" type="checkbox" value="Macedonia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Macedonia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMadagascar" class="sa-form-checkbox-label">' +
        '             <input id="andMadagascar" type="checkbox" value="Madagascar">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Madagascar</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMalawi" class="sa-form-checkbox-label">' +
        '             <input id="andMalawi" type="checkbox" value="Malawi">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Malawi</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMalaysia" class="sa-form-checkbox-label">' +
        '             <input id="andMalaysia" type="checkbox" value="Malaysia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Malaysia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMaldives" class="sa-form-checkbox-label">' +
        '             <input id="andMaldives" type="checkbox" value="Maldives">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Maldives</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMali" class="sa-form-checkbox-label">' +
        '             <input id="andMali" type="checkbox" value="Mali">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mali</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMalta" class="sa-form-checkbox-label">' +
        '             <input id="andMalta" type="checkbox" value="Malta">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Malta</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMarshallIslands" class="sa-form-checkbox-label">' +
        '             <input id="andMarshallIslands" type="checkbox" value="Marshall Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Marshall Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMexico" class="sa-form-checkbox-label">' +
        '             <input id="andMexico" type="checkbox" value="Mexico">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mexico</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMoldova" class="sa-form-checkbox-label">' +
        '             <input id="andMoldova" type="checkbox" value="Moldova">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Moldova</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMonaco" class="sa-form-checkbox-label">' +
        '             <input id="andMonaco" type="checkbox" value="Monaco">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Monaco</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMongolia" class="sa-form-checkbox-label">' +
        '             <input id="andMongolia" type="checkbox" value="Mongolia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mongolia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMontenegro" class="sa-form-checkbox-label">' +
        '             <input id="andMontenegro" type="checkbox" value="Montenegro">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Montenegro</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMontserrat" class="sa-form-checkbox-label">' +
        '             <input id="andMontserrat" type="checkbox" value="Montserrat">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Montserrat</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andMozambique" class="sa-form-checkbox-label">' +
        '             <input id="andMozambique" type="checkbox" value="Mozambique">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Mozambique</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNamibia" class="sa-form-checkbox-label">' +
        '             <input id="andNamibia" type="checkbox" value="Namibia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Namibia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNauru" class="sa-form-checkbox-label">' +
        '             <input id="andNauru" type="checkbox" value="Nauru">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nauru</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNepal" class="sa-form-checkbox-label">' +
        '             <input id="andNepal" type="checkbox" value="Nepal">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nepal</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNetherlands" class="sa-form-checkbox-label">' +
        '             <input id="andNetherlands" type="checkbox" value="Netherlands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Netherlands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNewZealand" class="sa-form-checkbox-label">' +
        '             <input id="andNewZealand" type="checkbox" value="New Zealand">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">New Zealand</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNicaragua" class="sa-form-checkbox-label">' +
        '             <input id="andNicaragua" type="checkbox" value="Nicaragua">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nicaragua</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNiger" class="sa-form-checkbox-label">' +
        '             <input id="andNiger" type="checkbox" value="Niger">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Niger</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNigeria" class="sa-form-checkbox-label">' +
        '             <input id="andNigeria" type="checkbox" value="Nigeria">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Nigeria</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andNorway" class="sa-form-checkbox-label">' +
        '             <input id="andNorway" type="checkbox" value="Norway">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Norway</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andOman" class="sa-form-checkbox-label">' +
        '             <input id="andOman" type="checkbox" value="Oman">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Oman</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPakistan" class="sa-form-checkbox-label">' +
        '             <input id="andPakistan" type="checkbox" value="Pakistan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Pakistan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPalau" class="sa-form-checkbox-label">' +
        '             <input id="andPalau" type="checkbox" value="Palau">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Palau</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPanama" class="sa-form-checkbox-label">' +
        '             <input id="andPanama" type="checkbox" value="Panama">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Panama</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andParaguay" class="sa-form-checkbox-label">' +
        '             <input id="andParaguay" type="checkbox" value="Paraguay">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Paraguay</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPeru" class="sa-form-checkbox-label">' +
        '             <input id="andPeru" type="checkbox" value="Peru">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Peru</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPhilippines" class="sa-form-checkbox-label">' +
        '             <input id="andPhilippines" type="checkbox" value="Philippines">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Philippines</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPoland" class="sa-form-checkbox-label">' +
        '             <input id="andPoland" type="checkbox" value="Poland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Poland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPortugal" class="sa-form-checkbox-label">' +
        '             <input id="andPortugal" type="checkbox" value="Portugal">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Portugal</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andPuertoRico" class="sa-form-checkbox-label">' +
        '             <input id="andPuertoRico" type="checkbox" value="Puerto Rico">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Puerto Rico</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andQatar" class="sa-form-checkbox-label">' +
        '             <input id="andQatar" type="checkbox" value="Qatar">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Qatar</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andRomania" class="sa-form-checkbox-label">' +
        '             <input id="andRomania" type="checkbox" value="Romania">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Romania</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andRwanda" class="sa-form-checkbox-label">' +
        '             <input id="andRwanda" type="checkbox" value="Rwanda">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Rwanda</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintBarthelemy" class="sa-form-checkbox-label">' +
        '             <input id="andSaintBarthelemy" type="checkbox" value="Saint Barthelemy">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Barthelemy</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintHelena" class="sa-form-checkbox-label">' +
        '             <input id="andSaintHelena" type="checkbox" value="Saint Helena">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Helena</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintLucia" class="sa-form-checkbox-label">' +
        '             <input id="andSaintLucia" type="checkbox" value="Saint Lucia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Lucia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaintMartin" class="sa-form-checkbox-label">' +
        '             <input id="andSaintMartin" type="checkbox" value="Saint Martin">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saint Martin</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSamoa" class="sa-form-checkbox-label">' +
        '             <input id="andSamoa" type="checkbox" value="Samoa">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Samoa</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSanMarino" class="sa-form-checkbox-label">' +
        '             <input id="andSanMarino" type="checkbox" value="San Marino">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">San Marino</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSaudiArabia" class="sa-form-checkbox-label">' +
        '             <input id="andSaudiArabia" type="checkbox" value="Saudi Arabia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Saudi Arabia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSenegal" class="sa-form-checkbox-label">' +
        '             <input id="andSenegal" type="checkbox" value="Senegal">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Senegal</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSerbia" class="sa-form-checkbox-label">' +
        '             <input id="andSerbia" type="checkbox" value="Serbia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Serbia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSingapore" class="sa-form-checkbox-label">' +
        '             <input id="andSingapore" type="checkbox" value="Singapore">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Singapore</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSlovakia" class="sa-form-checkbox-label">' +
        '             <input id="andSlovakia" type="checkbox" value="Slovakia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Slovakia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSlovenia" class="sa-form-checkbox-label">' +
        '             <input id="andSlovenia" type="checkbox" value="Slovenia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Slovenia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSolomonIslands" class="sa-form-checkbox-label">' +
        '             <input id="andSolomonIslands" type="checkbox" value="Solomon Islands">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Solomon Islands</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSomalia" class="sa-form-checkbox-label">' +
        '             <input id="andSomalia" type="checkbox" value="Somalia">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Somalia</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSouthAfrica" class="sa-form-checkbox-label">' +
        '             <input id="andSouthAfrica" type="checkbox" value="South Africa">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">South Africa</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSouthGeorgiaAndSandwichIsl" class="sa-form-checkbox-label">' +
        '             <input id="andSouthGeorgiaAndSandwichIsl" type="checkbox" value="South Georgia And Sandwich Isl.">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">South Georgia And Sandwich Isl.</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSpain" class="sa-form-checkbox-label">' +
        '             <input id="andSpain" type="checkbox" value="Spain">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Spain</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSudan" class="sa-form-checkbox-label">' +
        '             <input id="andSudan" type="checkbox" value="Sudan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Sudan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="anbdSwaziland" class="sa-form-checkbox-label">' +
        '             <input id="andSwaziland" type="checkbox" value="Swaziland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Swaziland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSweden" class="sa-form-checkbox-label">' +
        '             <input id="andSweden" type="checkbox" value="Sweden">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Sweden</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSwitzerland" class="sa-form-checkbox-label">' +
        '             <input id="andSwitzerland" type="checkbox" value="Switzerland">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Switzerland</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andSyrianArabRepublic" class="sa-form-checkbox-label">' +
        '             <input id="andSyrianArabRepublic" type="checkbox" value="Syrian Arab Republic">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Syrian Arab Republic</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andTaiwan" class="sa-form-checkbox-label">' +
        '             <input id="andTaiwan" type="checkbox" value="Taiwan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Taiwan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andTajikistan" class="sa-form-checkbox-label">' +
        '             <input id="andTajikistan" type="checkbox" value="Tajikistan">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Tajikistan</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andTanzania" class="sa-form-checkbox-label">' +
        '             <input id="andTanzania" type="checkbox" value="Tanzania">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Tanzania</span>' +
        '      </label>' +
        '    </div>' +
        '  </li>' +
        '  <li>' +
        '      <div class="sa-form-checkbox violet-checkbox">' +
        '      <label for="andThailand" class="sa-form-checkbox-label">' +
        '             <input id="andThailand" type="checkbox" value="Thailand">' +
        '          <span class="sa-form-checkbox-pseudo-input">' +
        '             <span></span>' +
        '         </span>' +
        '<span class="sa-form-checkbox-label-text">Thailand</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andTonga" class="sa-form-checkbox-label">' +
        '<input id="andTonga" type="checkbox" value="Tonga">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Tonga</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andTunisia" class="sa-form-checkbox-label">' +
        '<input id="andTunisia" type="checkbox" value="Tunisia">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Tunisia</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andTurkey" class="sa-form-checkbox-label">' +
        '<input id="andTurkey" type="checkbox" value="Turkey">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Turkey</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUganda" class="sa-form-checkbox-label">' +
        '<input id="andUganda" type="checkbox" value="Uganda">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Uganda</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUkraine" class="sa-form-checkbox-label">' +
        '<input id="andUkraine" type="checkbox" value="Ukraine">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Ukraine</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedArabEmirates" class="sa-form-checkbox-label">' +
        '<input id="andUnitedArabEmirates" type="checkbox" value="United Arab Emirates">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United Arab Emirates</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedKingdom" class="sa-form-checkbox-label">' +
        '<input id="andUnitedKingdom" type="checkbox" value="United Kingdom">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United Kingdom</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedStates" class="sa-form-checkbox-label">' +
        '<input id="andUnitedStates" type="checkbox" value="United States">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United States</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUnitedStatesOutlyingIslands" class="sa-form-checkbox-label">' +
        '<input id="andUnitedStatesOutlyingIslands" type="checkbox" value="United States Outlying Islands">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">United States Outlying Islands</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUruguay" class="sa-form-checkbox-label">' +
        '<input id="andUruguay" type="checkbox" value="Uruguay">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Uruguay</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andUzbekistan" class="sa-form-checkbox-label">' +
        '<input id="andUzbekistan" type="checkbox" value="Uzbekistan">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Uzbekistan</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVenezuela" class="sa-form-checkbox-label">' +
        '<input id="andVenezuela" type="checkbox" value="Venezuela">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Venezuela</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVietNam" class="sa-form-checkbox-label">' +
        '<input id="andVietNam" type="checkbox" value="Viet Nam">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Viet Nam</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVirginIslands" class="sa-form-checkbox-label">' +
        '<input id="andVirginIslands" type="checkbox" value="Virgin Islands, British">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Virgin Islands, British</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andVirginIslandsUS" class="sa-form-checkbox-label">' +
        '<input id="andVirginIslandsUS" type="checkbox" value="Virgin Islands, U.S">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Virgin Islands, U.S.</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andYemen" class="sa-form-checkbox-label">' +
        '<input id="andYemen" type="checkbox" value="Yemen">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Yemen</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andZambia" class="sa-form-checkbox-label">' +
        '<input id="andZambia" type="checkbox" value="Zambia">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Zambia</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="andZimbabwe" class="sa-form-checkbox-label">' +
        '<input id="andZimbabwe" type="checkbox" value="Zimbabwe">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Zimbabwe</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
    // Test();
}

function addGeoRuleAnd() {
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class="">the user</div>' +
        '<div class="select-container select-noborder mr-1">' +
        '<div class="select-dropdown d-flex align-items-center">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">has</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option selected" value="has">has</li>' +
        '<li class="select-option" value="has not">has not</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class=" mr-2">moved faster than</div>' +
        '<input type="number" class="w-auto" value="575">' +
        '<div class=" ml-2">mph</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addGroupRuleAnd() {
    buttonID++;
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and group-rule-and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class="">user</div>' +
        '<div class="select-container select-noborder mr-1">' +
        '<div class="select-dropdown d-flex align-items-center">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">is</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option selected" value="is">is</li>' +
        '<li class="select-option" value="is not">is not</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class=" mr-2">in</div>' +
        '<div class="multiple-container">' +
        '<button class="link-dropdown" id="'+ buttonID +'">Select Groups</button>' +
        '<div class="multiple-dropdown">' +
        '<div class="select-option">' +
        '<input type="button" class="select-options-btn" placeholder="Select Groups"' +
        'value="Select Groups" />' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '</svg>' +
        '</div>' +
        '<div class="multiSel"></div>' +
        '<div class="mutliSelect">' +
        '<ul>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="GroupAnd01" class="sa-form-checkbox-label">' +
        '<input id="GroupAnd01" type="checkbox" value="Group 01">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Group 01</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="GroupAnd02" class="sa-form-checkbox-label">' +
        '<input id="GroupAnd02" type="checkbox" value="Group 02">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Group 02</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="GroupAnd03" class="sa-form-checkbox-label">' +
        '<input id="GroupAnd03" type="checkbox" value="Group 03">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Group 03</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="GroupAnd04" class="sa-form-checkbox-label">' +
        '<input id="GroupAnd04" type="checkbox" value="Group 04">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Group 04</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="GroupAnd05" class="sa-form-checkbox-label">' +
        '<input id="GroupAnd05" type="checkbox" value="Group 05">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Group 05</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addIPRuleAnd() {
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class="">the user</div>' +
        '<div class="select-container select-noborder mr-1">' +
        '<div class="select-dropdown d-flex align-items-center">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">is</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option selected" value="is">is</li>' +
        '<li class="select-option" value="is not">is not</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class=" mr-2">coming from the following IP address(s)</div>' +
        '<input type="text" value="" data-role="tagsinput" placeholder="Add IP(s)" />' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addThreatRuleAnd() {
        buttonID++
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class=" mr-2">the user’s Threat Service level is</div>' +
        '<div class="multiple-container">' +
        '<button class="link-dropdown" id="'+ buttonID +'">Select level</button>' +
        '<div class="multiple-dropdown">' +
        '<div class="select-option">' +
        '<input type="button" class="select-options-btn" placeholder="Select level"' +
        'value="Select level" />' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '</svg>' +
        '</div>' +
        '<div class="multiSel"></div>' +
        '<div class="mutliSelect">' +
        '<ul>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="TSAndExtreme" class="sa-form-checkbox-label">' +
        '<input id="TSAndExtreme" type="checkbox" value="Extreme">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Extreme</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="TSAndHigh" class="sa-form-checkbox-label">' +
        '<input id="TSAndHigh" type="checkbox" value="High">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">High</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="TSAndMedium" class="sa-form-checkbox-label">' +
        '<input id="TSAndMedium" type="checkbox" value="Medium">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Medium</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="TSAndLow" class="sa-form-checkbox-label">' +
        '<input id="TSAndLow" type="checkbox" value="Low">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Low</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addUserRuleAnd() {
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class="">the user’s ID</div>' +
        '<div class="select-container select-noborder mr-1">' +
        '<div class="select-dropdown d-flex align-items-center">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">is</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option selected" value="is">is</li>' +
        '<li class="select-option" value="is not">is not</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<input type="text" value="" data-role="tagsinput" placeholder="Add User(s) ID" />' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addRiskRuleAnd() {
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF</p>' +
        '<div class=" mr-2">the user’s User Risk level is</div>' +
        '<div class="multiple-container">' +
        '<button class="link-dropdown" id="'+ buttonID +'">Select level</button>' +
        '<div class="multiple-dropdown">' +
        '<div class="select-option">' +
        '<input type="button" class="select-options-btn" placeholder="Select level"' +
        'value="Select level" />' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '</svg>' +
        '</div>' +
        '<div class="multiSel"></div>' +
        '<div class="mutliSelect">' +
        '<ul>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="URAndHigh" class="sa-form-checkbox-label">' +
        '<input id="URAndHigh" type="checkbox" value="High">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">High</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="URAndMedium" class="sa-form-checkbox-label">' +
        '<input id="URAndMedium" type="checkbox" value="Medium">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Medium</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="URAndLow" class="sa-form-checkbox-label">' +
        '<input id="URAndLow" type="checkbox" value="Low">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Low</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addDeviceRecognitionAnd() {
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and device-rule-and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF the Device is recognized</p>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addMfaAnd() {
        buttonID++;
    var hola = $('.card-policies').find('.dropdown-menu.show').closest('.card-policies');
    var drop = $('.dropdown-menu');

    $('.card-policies.card-relative').removeClass("card-relative");

    if ($(drop).hasClass('show')) {
        $(hola).addClass("card-relative");
    }

    $('.card-policies.card-relative #andContainer').append(
        '<div class="card-policies-grey remove_and">' +
        '<div class="condition-rule and-condition">AND</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p>IF Multi-factor Methods selected</p>' +
        '<div class="select-container select-noborder mr-1">' +
        '<div class="select-dropdown d-flex align-items-center">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">uses</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option selected" value="uses">uses</li>' +
        '<li class="select-option" value="doesn' + "'" + 't use">doesn' + "'" + 't use</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +

        '<div class="multiple-container">' +
        '<button class="link-dropdown" id="'+ buttonID +'">Select Multi-Factors</button>' +
        '<div class="multiple-dropdown">' +
        '<div class="select-option">' +
        '<input type="button" class="select-options-btn" placeholder="Select Groups"' +
        'value="Select Groups" />' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7 10L12 15L17 10H7Z" fill="#2995F5" />' +
        '</svg>' +
        '</div>' +
        '<div class="multiSel"></div>' +
        '<div class="mutliSelect">' +
        '<ul>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="BI" class="sa-form-checkbox-label">' +
        '<input id="BI" type="checkbox" value="Biometric Identification">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Biometric Identification</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="Yubikey" class="sa-form-checkbox-label">' +
        '<input id="Yubikey" type="checkbox" value="Yubikey">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Yubikey</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="TM" class="sa-form-checkbox-label">' +
        '<input id="TM" type="checkbox" value="Text Message">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Text Message</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="Email" class="sa-form-checkbox-label">' +
        '<input id="Email" type="checkbox" value="Email">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">Email</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<div class="sa-form-checkbox violet-checkbox">' +
        '<label for="PIN" class="sa-form-checkbox-label">' +
        '<input id="PIN" type="checkbox" value="PIN">' +
        '<span class="sa-form-checkbox-pseudo-input">' +
        '<span></span>' +
        '</span>' +
        '<span class="sa-form-checkbox-label-text">PIN</span>' +
        '</label>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<button class="sa-button-tertiary float-right mt-4 close-dropdown">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

$(function () {
    var n = $("div.card-policies").length;
    var ee = n + 1;

    $("#lastRule").append(
        '<div class="form-group card-policies d-flex align-items-center">' +
        '<div class="condition-rule else-condition">' +
        'ELSE' +
        '</div>' +
        '<div class="col-3 d-flex align-items-center">' +
        '<p class="numberOrder"><strong>' + ee + '</strong></p>' +
        '<div class="select-container">' +
        '<div class="select-dropdown">' +
        '<svg class="select-arrow" width="27" height="24" viewBox="0 0 27 24" fill="none"' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M8.2998 10L13.7998 15L19.2998 10H8.2998Z" fill="#2995F5" />' +
        '</svg>' +
        '<span class="store-default" value="">Prompt for MFA</span>' +
        '<ul class="s-dropdown u-hide">' +
        '<li class="select-option" value="Prompt for MFA">Prompt for MFA</li>' +
        '<li class="select-option" value="Skip MFA">Skip MFA</li>' +
        '<li class="select-option" value="BLOCK">BLOCK</li>' +
        '<li class="select-option" value="Redirect To">Redirect To</li>' +
        '<li class="select-option" value="Run Device / Browser Recognition">Run Device / Browser Recognition</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="redirectTo" style="display:none;">' +
        '<input type="text" placeholder="Add URL" id="urlRedirectToAllLogins" class="urlRedirectTo" />' +
        '</div>' +
        '<p>All Logins</p>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
});