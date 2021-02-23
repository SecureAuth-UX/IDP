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

$(function () {
    rowNum++;
    var selectConditionRule = $("#perimeterRules option:selected").text();
    var radioRule = $('input[name=perimeterRulesRadio]:checked', '#perimeterRulesRadio').attr("value");
    var inputRule = $('input#distancePerimeter').val();
    var redirectTo = $('input#urlRedirectToPerimeter').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;" ondrop="drop(event)" ondragover="allowDrop(event)">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a class="mr-2" onclick="addPerimeterRuleModal()" data-toggle="modal" data-target="#addPerimeterRuleModal">Prompt for MFA</a>' +
        // '<a class="inputRedirectTo" onclick="addPerimeterRule()" data-toggle="modal" data-target="#addPerimeterRuleModal">' + redirectTo + '</a>' +
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
        '<select id="selectRulesDynamicIp" class="label ui selection dropdown fluid" style="padding: 0 10px;" disabled>' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option selected value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
        '<select name="dynamicIp" id="dynamicIpSelection" multiple="" class="ui search dropdown fluid ip-rule"></select>' +
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
    select();
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
        '<select id="perimeterRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
    select();
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
        '<select id="selectcountryRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
        '<select name="countries" id="countriesSelection" multiple="" class="label fluid ui selection dropdown">' +
        '<option>Afghanistan</option>' +
        '<option>Aland Islands</option>' +
        '<option>Albania</option>' +
        '<option>Algeria</option>' +
        '<option>American Samoa</option>' +
        '<option>Andorra</option>' +
        '<option>Angola</option>' +
        '<option>Anguilla</option>' +
        '<option>Antarctica</option>' +
        '<option>Antigua And Barbuda</option>' +
        '<option>Argentina</option>' +
        '<option>Armenia</option>' +
        '<option>Aruba</option>' +
        '<option>Australia</option>' +
        '<option>Austria</option>' +
        '<option>Azerbaijan</option>' +
        '<option>Bahamas</option>' +
        '<option>Bahrain</option>' +
        '<option>Bangladesh</option>' +
        '<option>Barbados</option>' +
        '<option>Belarus</option>' +
        '<option>Belgium</option>' +
        '<option>Belize</option>' +
        '<option>Benin</option>' +
        '<option>Bermuda</option>' +
        '<option>Bhutan</option>' +
        '<option>Bolivia</option>' +
        '<option>Bosnia And Herzegovina</option>' +
        '<option>Botswana</option>' +
        '<option>Bouvet Island</option>' +
        '<option>Brazil</option>' +
        '<option>British Indian Ocean Territory</option>' +
        '<option>Brunei Darussalam</option>' +
        '<option>Bulgaria</option>' +
        '<option>Burkina Faso</option>' +
        '<option>Burundi</option>' +
        '<option>Cambodia</option>' +
        '<option>Cameroon</option>' +
        '<option>Canada</option>' +
        '<option>Cape Verde</option>' +
        '<option>Cayman Islands</option>' +
        '<option>Central African Republic</option>' +
        '<option>Chad</option>' +
        '<option>Chile</option>' +
        '<option>China</option>' +
        '<option>Christmas Island</option>' +
        '<option>Cocos (Keeling) Islands</option>' +
        '<option>Colombia</option>' +
        '<option>Comoros</option>' +
        '<option>Congo</option>' +
        '<option>Congo}, Democratic Republic</option>' +
        '<option>Cook Islands</option>' +
        '<option>Costa Rica</option>' +
        '<option>Cote D\</option>' +
        '<option>Croatia</option>' +
        '<option>Cuba</option>' +
        '<option>Cyprus</option>' +
        '<option>Czech Republic</option>' +
        '<option>Denmark</option>' +
        '<option>Djibouti</option>' +
        '<option>Dominica</option>' +
        '<option>Dominican Republic</option>' +
        '<option>Ecuador</option>' +
        '<option>Egypt</option>' +
        '<option>El Salvador</option>' +
        '<option>Equatorial Guinea</option>' +
        '<option>Eritrea</option>' +
        '<option>Estonia</option>' +
        '<option>Ethiopia</option>' +
        '<option>Falkland Islands (Malvinas)</option>' +
        '<option>Faroe Islands</option>' +
        '<option>Fiji</option>' +
        '<option>Finland</option>' +
        '<option>France</option>' +
        '<option>French Guiana</option>' +
        '<option>French Polynesia</option>' +
        '<option>French Southern Territories</option>' +
        '<option>Gabon</option>' +
        '<option>Gambia</option>' +
        '<option>Georgia</option>' +
        '<option>Germany</option>' +
        '<option>Ghana</option>' +
        '<option>Gibraltar</option>' +
        '<option>Greece</option>' +
        '<option>Greenland</option>' +
        '<option>Grenada</option>' +
        '<option>Guadeloupe</option>' +
        '<option>Guam</option>' +
        '<option>Guatemala</option>' +
        '<option>Guernsey</option>' +
        '<option>Guinea</option>' +
        '<option>Guinea-Bissau</option>' +
        '<option>Guyana</option>' +
        '<option>Haiti</option>' +
        '<option>Heard Island & Mcdonald Islands</option>' +
        '<option>Holy See (Vatican City State)</option>' +
        '<option>Honduras</option>' +
        '<option>Hong Kong</option>' +
        '<option>Hungary</option>' +
        '<option>Iceland</option>' +
        '<option>India</option>' +
        '<option>Indonesia</option>' +
        '<option>Iran}, Islamic Republic Of</option>' +
        '<option>Iraq</option>' +
        '<option>Ireland</option>' +
        '<option>Isle Of Man</option>' +
        '<option>Israel</option>' +
        '<option>Italy</option>' +
        '<option>Jamaica</option>' +
        '<option>Japan</option>' +
        '<option>Jersey</option>' +
        '<option>Jordan</option>' +
        '<option>Kazakhstan</option>' +
        '<option>Kenya</option>' +
        '<option>Kiribati</option>' +
        '<option>Korea</option>' +
        '<option>Kuwait</option>' +
        '<option>Kyrgyzstan</option>' +
        '<option>Lao People\</option>' +
        '<option>Latvia</option>' +
        '<option>Lebanon</option>' +
        '<option>Lesotho</option>' +
        '<option>Liberia</option>' +
        '<option>Libyan Arab Jamahiriya</option>' +
        '<option>Liechtenstein</option>' +
        '<option>Lithuania</option>' +
        '<option>Luxembourg</option>' +
        '<option>Macao</option>' +
        '<option>Macedonia</option>' +
        '<option>Madagascar</option>' +
        '<option>Malawi</option>' +
        '<option>Malaysia</option>' +
        '<option>Maldives</option>' +
        '<option>Mali</option>' +
        '<option>Malta</option>' +
        '<option>Marshall Islands</option>' +
        '<option>Martinique</option>' +
        '<option>Mauritania</option>' +
        '<option>Mauritius</option>' +
        '<option>Mayotte</option>' +
        '<option>Mexico</option>' +
        '<option>Micronesia}, Federated States Of</option>' +
        '<option>Moldova</option>' +
        '<option>Monaco</option>' +
        '<option>Mongolia</option>' +
        '<option>Montenegro</option>' +
        '<option>Montserrat</option>' +
        '<option>Morocco</option>' +
        '<option>Mozambique</option>' +
        '<option>Myanmar</option>' +
        '<option>Namibia</option>' +
        '<option>Nauru</option>' +
        '<option>Nepal</option>' +
        '<option>Netherlands</option>' +
        '<option>Netherlands Antilles</option>' +
        '<option>New Caledonia</option>' +
        '<option>New Zealand</option>' +
        '<option>Nicaragua</option>' +
        '<option>Niger</option>' +
        '<option>Nigeria</option>' +
        '<option>Niue</option>' +
        '<option>Norfolk Island</option>' +
        '<option>Northern Mariana Islands</option>' +
        '<option>Norway</option>' +
        '<option>Oman</option>' +
        '<option>Pakistan</option>' +
        '<option>Palau</option>' +
        '<option>Palestinian Territory}, Occupied</option>' +
        '<option>Panama</option>' +
        '<option>Papua New Guinea</option>' +
        '<option>Paraguay</option>' +
        '<option>Peru</option>' +
        '<option>Philippines</option>' +
        '<option>Pitcairn</option>' +
        '<option>Poland</option>' +
        '<option>Portugal</option>' +
        '<option>Puerto Rico</option>' +
        '<option>Qatar</option>' +
        '<option>Reunion</option>' +
        '<option>Romania</option>' +
        '<option>Russian Federation</option>' +
        '<option>Rwanda</option>' +
        '<option>Saint Barthelemy</option>' +
        '<option>Saint Helena</option>' +
        '<option>Saint Kitts And Nevis</option>' +
        '<option>Saint Lucia</option>' +
        '<option>Saint Martin</option>' +
        '<option>Saint Pierre And Miquelon</option>' +
        '<option>Saint Vincent And Grenadines</option>' +
        '<option>Samoa</option>' +
        '<option>San Marino</option>' +
        '<option>Sao Tome And Principe</option>' +
        '<option>Saudi Arabia</option>' +
        '<option>Senegal</option>' +
        '<option>Serbia</option>' +
        '<option>Seychelles</option>' +
        '<option>Sierra Leone</option>' +
        '<option>Singapore</option>' +
        '<option>Slovakia</option>' +
        '<option>Slovenia</option>' +
        '<option>Solomon Islands</option>' +
        '<option>Somalia</option>' +
        '<option>South Africa</option>' +
        '<option>South Georgia And Sandwich Isl.</option>' +
        '<option>Spain</option>' +
        '<option>Sri Lanka</option>' +
        '<option>Sudan</option>' +
        '<option>Suriname</option>' +
        '<option>Svalbard And Jan Mayen</option>' +
        '<option>Swaziland</option>' +
        '<option>Sweden</option>' +
        '<option>Switzerland</option>' +
        '<option>Syrian Arab Republic</option>' +
        '<option>Taiwan</option>' +
        '<option>Tajikistan</option>' +
        '<option>Tanzania</option>' +
        '<option>Thailand</option>' +
        '<option>Timor-Leste</option>' +
        '<option>Togo</option>' +
        '<option>Tokelau</option>' +
        '<option>Tonga</option>' +
        '<option>Trinidad And Tobago</option>' +
        '<option>Tunisia</option>' +
        '<option>Turkey</option>' +
        '<option>Turkmenistan</option>' +
        '<option>Turks And Caicos Islands</option>' +
        '<option>Tuvalu</option>' +
        '<option>Uganda</option>' +
        '<option>Ukraine</option>' +
        '<option>United Arab Emirates</option>' +
        '<option>United Kingdom</option>' +
        '<option>United States</option>' +
        '<option>United States Outlying Islands</option>' +
        '<option>Uruguay</option>' +
        '<option>Uzbekistan</option>' +
        '<option>Vanuatu</option>' +
        '<option>Venezuela</option>' +
        '<option>Viet Nam</option>' +
        '<option>Virgin Islands}, British</option>' +
        '<option>Virgin Islands}, U.S.</option>' +
        '<option>Wallis And Futuna</option>' +
        '<option>Western Sahara</option>' +
        '<option>Yemen</option>' +
        '<option>Zambia</option>' +
        '<option>Zimbabwe</option>' +
        '</select>' +
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
    select();
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
        '<select id="selectGeoRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
    select();
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
        '<select id="selectGroupRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
    select();
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
        '<select id="selectIpRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
        '<select name="ip" id="ipSelection" multiple="" class="ui search dropdown fluid ip-rule"></select>' +
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
    select();
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
        '<select id="selectServiceRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
    select();
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
        '<select id="selectUserRules" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
    select();
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
        '<select id="selectRulesUserRisk" class="label ui selection dropdown fluid" style="padding: 0 10px;">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
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
    select();
}

// OR RULE

function addConditionalPassword() {
    rowNum++;

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center flex-wrap">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong> <strong> Conditional Password</strong></p>' +
        '<p style="color:#2372B8; flex-basis:100%;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M8.25 6.75H9.75V5.25H8.25V6.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5ZM8.25 12.75H9.75V8.25H8.25V12.75Z" fill="#2372B8"/></svg>'+
        'You must add at least one and not more than four unique conditions.</p>'+
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
        '<div class="form-group card-policies remove_field" style="position:relative;" ondrop="drop(event)" ondragover="allowDrop(event)">' +
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
    var selectConditionRule = $("#selectcountryRules option:selected").text();
    var radioRule = $('input[name=countryRadio]:checked', '#countryRadio').attr("value");
    var inputRule = $('#countriesSelection option:selected').text();
    var redirectTo = $('input#urlRedirectToCountry').val();

    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-9 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<a href="" class="mr-2">' + selectConditionRule + '</a>' +
        '<a href="">' + redirectTo + '</a>' +
        '<p>IF the user’s current location </p>' +
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
        '<div class="sa-color-tertiary">the user</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<div class="sa-color-tertiary mr-2">within</div>' +
        '<input type="number" placeholder="Set distance" class="w-auto">' +
        '<div class="sa-color-tertiary ml-2">from their previous location</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addCountryRuleAnd() {
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
        '<select name="countries" id="countriesSelection" multiple="" class="label ui selection dropdown">' +
        '<option>Afghanistan</option>' +
        '<option>Aland Islands</option>' +
        '<option>Albania</option>' +
        '<option>Algeria</option>' +
        '<option>American Samoa</option>' +
        '<option>Andorra</option>' +
        '<option>Angola</option>' +
        '<option>Anguilla</option>' +
        '<option>Antarctica</option>' +
        '<option>Antigua And Barbuda</option>' +
        '<option>Argentina</option>' +
        '<option>Armenia</option>' +
        '<option>Aruba</option>' +
        '<option>Australia</option>' +
        '<option>Austria</option>' +
        '<option>Azerbaijan</option>' +
        '<option>Bahamas</option>' +
        '<option>Bahrain</option>' +
        '<option>Bangladesh</option>' +
        '<option>Barbados</option>' +
        '<option>Belarus</option>' +
        '<option>Belgium</option>' +
        '<option>Belize</option>' +
        '<option>Benin</option>' +
        '<option>Bermuda</option>' +
        '<option>Bhutan</option>' +
        '<option>Bolivia</option>' +
        '<option>Bosnia And Herzegovina</option>' +
        '<option>Botswana</option>' +
        '<option>Bouvet Island</option>' +
        '<option>Brazil</option>' +
        '<option>British Indian Ocean Territory</option>' +
        '<option>Brunei Darussalam</option>' +
        '<option>Bulgaria</option>' +
        '<option>Burkina Faso</option>' +
        '<option>Burundi</option>' +
        '<option>Cambodia</option>' +
        '<option>Cameroon</option>' +
        '<option>Canada</option>' +
        '<option>Cape Verde</option>' +
        '<option>Cayman Islands</option>' +
        '<option>Central African Republic</option>' +
        '<option>Chad</option>' +
        '<option>Chile</option>' +
        '<option>China</option>' +
        '<option>Christmas Island</option>' +
        '<option>Cocos (Keeling) Islands</option>' +
        '<option>Colombia</option>' +
        '<option>Comoros</option>' +
        '<option>Congo</option>' +
        '<option>Congo}, Democratic Republic</option>' +
        '<option>Cook Islands</option>' +
        '<option>Costa Rica</option>' +
        '<option>Cote D\</option>' +
        '<option>Croatia</option>' +
        '<option>Cuba</option>' +
        '<option>Cyprus</option>' +
        '<option>Czech Republic</option>' +
        '<option>Denmark</option>' +
        '<option>Djibouti</option>' +
        '<option>Dominica</option>' +
        '<option>Dominican Republic</option>' +
        '<option>Ecuador</option>' +
        '<option>Egypt</option>' +
        '<option>El Salvador</option>' +
        '<option>Equatorial Guinea</option>' +
        '<option>Eritrea</option>' +
        '<option>Estonia</option>' +
        '<option>Ethiopia</option>' +
        '<option>Falkland Islands (Malvinas)</option>' +
        '<option>Faroe Islands</option>' +
        '<option>Fiji</option>' +
        '<option>Finland</option>' +
        '<option>France</option>' +
        '<option>French Guiana</option>' +
        '<option>French Polynesia</option>' +
        '<option>French Southern Territories</option>' +
        '<option>Gabon</option>' +
        '<option>Gambia</option>' +
        '<option>Georgia</option>' +
        '<option>Germany</option>' +
        '<option>Ghana</option>' +
        '<option>Gibraltar</option>' +
        '<option>Greece</option>' +
        '<option>Greenland</option>' +
        '<option>Grenada</option>' +
        '<option>Guadeloupe</option>' +
        '<option>Guam</option>' +
        '<option>Guatemala</option>' +
        '<option>Guernsey</option>' +
        '<option>Guinea</option>' +
        '<option>Guinea-Bissau</option>' +
        '<option>Guyana</option>' +
        '<option>Haiti</option>' +
        '<option>Heard Island & Mcdonald Islands</option>' +
        '<option>Holy See (Vatican City State)</option>' +
        '<option>Honduras</option>' +
        '<option>Hong Kong</option>' +
        '<option>Hungary</option>' +
        '<option>Iceland</option>' +
        '<option>India</option>' +
        '<option>Indonesia</option>' +
        '<option>Iran}, Islamic Republic Of</option>' +
        '<option>Iraq</option>' +
        '<option>Ireland</option>' +
        '<option>Isle Of Man</option>' +
        '<option>Israel</option>' +
        '<option>Italy</option>' +
        '<option>Jamaica</option>' +
        '<option>Japan</option>' +
        '<option>Jersey</option>' +
        '<option>Jordan</option>' +
        '<option>Kazakhstan</option>' +
        '<option>Kenya</option>' +
        '<option>Kiribati</option>' +
        '<option>Korea</option>' +
        '<option>Kuwait</option>' +
        '<option>Kyrgyzstan</option>' +
        '<option>Lao People\</option>' +
        '<option>Latvia</option>' +
        '<option>Lebanon</option>' +
        '<option>Lesotho</option>' +
        '<option>Liberia</option>' +
        '<option>Libyan Arab Jamahiriya</option>' +
        '<option>Liechtenstein</option>' +
        '<option>Lithuania</option>' +
        '<option>Luxembourg</option>' +
        '<option>Macao</option>' +
        '<option>Macedonia</option>' +
        '<option>Madagascar</option>' +
        '<option>Malawi</option>' +
        '<option>Malaysia</option>' +
        '<option>Maldives</option>' +
        '<option>Mali</option>' +
        '<option>Malta</option>' +
        '<option>Marshall Islands</option>' +
        '<option>Martinique</option>' +
        '<option>Mauritania</option>' +
        '<option>Mauritius</option>' +
        '<option>Mayotte</option>' +
        '<option>Mexico</option>' +
        '<option>Micronesia}, Federated States Of</option>' +
        '<option>Moldova</option>' +
        '<option>Monaco</option>' +
        '<option>Mongolia</option>' +
        '<option>Montenegro</option>' +
        '<option>Montserrat</option>' +
        '<option>Morocco</option>' +
        '<option>Mozambique</option>' +
        '<option>Myanmar</option>' +
        '<option>Namibia</option>' +
        '<option>Nauru</option>' +
        '<option>Nepal</option>' +
        '<option>Netherlands</option>' +
        '<option>Netherlands Antilles</option>' +
        '<option>New Caledonia</option>' +
        '<option>New Zealand</option>' +
        '<option>Nicaragua</option>' +
        '<option>Niger</option>' +
        '<option>Nigeria</option>' +
        '<option>Niue</option>' +
        '<option>Norfolk Island</option>' +
        '<option>Northern Mariana Islands</option>' +
        '<option>Norway</option>' +
        '<option>Oman</option>' +
        '<option>Pakistan</option>' +
        '<option>Palau</option>' +
        '<option>Palestinian Territory}, Occupied</option>' +
        '<option>Panama</option>' +
        '<option>Papua New Guinea</option>' +
        '<option>Paraguay</option>' +
        '<option>Peru</option>' +
        '<option>Philippines</option>' +
        '<option>Pitcairn</option>' +
        '<option>Poland</option>' +
        '<option>Portugal</option>' +
        '<option>Puerto Rico</option>' +
        '<option>Qatar</option>' +
        '<option>Reunion</option>' +
        '<option>Romania</option>' +
        '<option>Russian Federation</option>' +
        '<option>Rwanda</option>' +
        '<option>Saint Barthelemy</option>' +
        '<option>Saint Helena</option>' +
        '<option>Saint Kitts And Nevis</option>' +
        '<option>Saint Lucia</option>' +
        '<option>Saint Martin</option>' +
        '<option>Saint Pierre And Miquelon</option>' +
        '<option>Saint Vincent And Grenadines</option>' +
        '<option>Samoa</option>' +
        '<option>San Marino</option>' +
        '<option>Sao Tome And Principe</option>' +
        '<option>Saudi Arabia</option>' +
        '<option>Senegal</option>' +
        '<option>Serbia</option>' +
        '<option>Seychelles</option>' +
        '<option>Sierra Leone</option>' +
        '<option>Singapore</option>' +
        '<option>Slovakia</option>' +
        '<option>Slovenia</option>' +
        '<option>Solomon Islands</option>' +
        '<option>Somalia</option>' +
        '<option>South Africa</option>' +
        '<option>South Georgia And Sandwich Isl.</option>' +
        '<option>Spain</option>' +
        '<option>Sri Lanka</option>' +
        '<option>Sudan</option>' +
        '<option>Suriname</option>' +
        '<option>Svalbard And Jan Mayen</option>' +
        '<option>Swaziland</option>' +
        '<option>Sweden</option>' +
        '<option>Switzerland</option>' +
        '<option>Syrian Arab Republic</option>' +
        '<option>Taiwan</option>' +
        '<option>Tajikistan</option>' +
        '<option>Tanzania</option>' +
        '<option>Thailand</option>' +
        '<option>Timor-Leste</option>' +
        '<option>Togo</option>' +
        '<option>Tokelau</option>' +
        '<option>Tonga</option>' +
        '<option>Trinidad And Tobago</option>' +
        '<option>Tunisia</option>' +
        '<option>Turkey</option>' +
        '<option>Turkmenistan</option>' +
        '<option>Turks And Caicos Islands</option>' +
        '<option>Tuvalu</option>' +
        '<option>Uganda</option>' +
        '<option>Ukraine</option>' +
        '<option>United Arab Emirates</option>' +
        '<option>United Kingdom</option>' +
        '<option>United States</option>' +
        '<option>United States Outlying Islands</option>' +
        '<option>Uruguay</option>' +
        '<option>Uzbekistan</option>' +
        '<option>Vanuatu</option>' +
        '<option>Venezuela</option>' +
        '<option>Viet Nam</option>' +
        '<option>Virgin Islands}, British</option>' +
        '<option>Virgin Islands}, U.S.</option>' +
        '<option>Wallis And Futuna</option>' +
        '<option>Western Sahara</option>' +
        '<option>Yemen</option>' +
        '<option>Zambia</option>' +
        '<option>Zimbabwe</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
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
        '<div class="sa-color-tertiary">the user</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>has</option>' +
        '<option>has not</option>' +
        '</select>' +
        '<div class="sa-color-tertiary mr-2">moved faster than</div>' +
        '<input type="number" class="w-auto" value="575">' +
        '<div class="sa-color-tertiary ml-2">mph</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addGroupRuleAnd() {
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
        '<div class="sa-color-tertiary">user</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<div class="sa-color-tertiary mr-2">in</div>' +
        '<select multiple="" class="label ui selection dropdown group-rule">' +
        '<option>Group 01</option>' +
        '<option>Group 02</option>' +
        '<option>Group 03</option>' +
        '<option>Group 04</option>' +
        '<option>Group 05</option>' +
        '<option>Group 06</option>' +
        '</select>' +
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
        '<div class="sa-color-tertiary">the user</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<div class="sa-color-tertiary mr-2">coming from the following IP address(s)</div>' +
        '<select name="skills" multiple="" class="ui search dropdown ip-rule"></select>' +
        '</div>' +
        '<div class="col-2 text-right">' +
        '<img src="images/remove.svg" alt="" class="float-right btnRemove" />' +
        '</div>' +
        '</div>' +
        '</div>');
    callDropdown();
}

function addThreatRuleAnd() {
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
        '<div class="sa-color-tertiary mr-2">the user’s Threat Service level is</div>' +
        '<select multiple="" class="label ui selection dropdown">' +
        '<option selected>Extreme</option>' +
        '<option>High</option>' +
        '<option>Medium</option>' +
        '<option>Low</option>' +
        '</select>' +
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
        '<div class="sa-color-tertiary">the user’s ID</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<select name="skills" multiple="" class="ui search dropdown user-id"></select>' +
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
        '<div class="sa-color-tertiary mr-2">the user’s User Risk level is</div>' +
        '<select multiple="" class="label ui selection dropdown">' +
        '<option selected>High</option>' +
        '<option>Medium</option>' +
        '<option>Low</option>' +
        '</select>' +
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
        '<div class="card-policies-grey remove_and">' +
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
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>uses</option>' +
        '<option>doesn' + "'" + 't use</option>' +
        '</select>' +
        '<select multiple="" class="label ui selection dropdown">' +
        '<option>Biometric Identification</option>' +
        '<option>Yubikey</option>' +
        '<option>Text Message</option>' +
        '<option>Email</option>' +
        '<option>PIN</option>' +
        '</select>' +
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
        '<div class="col-9 d-flex align-items-center">' +
        '<p class="numberOrder"><strong>' + ee + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<p>All Logins</p>' +
        '</div>' +
        '</div>'
    );
    callDropdown();
});