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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;" ondrop="drop(event)" ondragover="allowDrop(event)">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
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

// OR RULE

function addPerimeterRule() {
    rowNum++;
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;" ondrop="drop(event)" ondragover="allowDrop(event)">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
        '<p>IF</p>' +
        '<div class="sa-color-tertiary">the user’s current location</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<div class="sa-color-tertiary mr-2">within</div>' +
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
        '<div class="sa-color-tertiary ml-2">from their previous location</div>' +
        '</div>' +
        '<div class="col-2 text-right">' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
        '<p>IF</p>' +
        '<div class="sa-color-tertiary">the user’s ID</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<select name="skills" multiple="" class="ui search dropdown user-id"></select>' +
        '</div>' +
        '<div class="col-2 text-right">' +
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
    $("#orContainer").append(
        '<div class="form-group card-policies remove_field" style="position:relative;">' +
        '<div class="condition-rule or-condition">OR</div>' +
        '<div class="row">' +
        '<div class="col-10 d-flex align-items-center">' +
        '<a class="sa-type-link" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA4CAYAAAD959hAAAAA2ElEQVRYR2P8/////5+//zDcfvKc4d3nrwwgIMTLzaAqI8nAzsoC5qMDfOoZf/z6/f/4tdsMv//8QdHHysLCYKmlimEoyDB86hkv33v0//m7D1hdIikkwKCjKIsid+X+YwZ86hkPXrz+/+fv31gNZGdlZbDT00CRO3TpBgM+9dQ3kOpepnqkUD3ZgAzEGiNkCjKOGkhmyCG0jdQwHC0P4WlgtDwEBwXBSmq0PBwtbUgPgSFSwI6Wh6PlIWpPYLQ8xMjsQyQvk15I4dYxUr08Wh6OlocDXB4CAJlGbwe3urZkAAAAAElFTkSuQmCC&quot;); position: relative; display: block; width: 10px; height: 28px; background-position: center center; background-repeat: no-repeat; background-size: cover; cursor: move;"></a>' +
        '<p class="numberOrder"><strong>' + rowNum + '</strong></p>' +
        '<select name="rules" class="label ui selection dropdown selectCondition">' +
        '<option value="Prompt for MFA">Prompt for MFA</option>' +
        '<option value="Skip MFA">Skip MFA</option>' +
        '<option value="Block">BLOCK</option>' +
        '<option value="Redirect To">Redirect To</option>' +
        '</select>' +
        '<div id="redirectTo" class="ml-3" style="display:none;">' +
        '<input type="text" placeholder="Add URL" />' +
        '</div>' +
        '<p>IF</p>' +
        '<div class="sa-color-tertiary mr-2">the user’s User Risk level is</div>' +
        '<select multiple="" class="label ui selection dropdown">' +
        '<option selected>High</option>' +
        '<option>Medium</option>' +
        '<option>Low</option>' +
        '</select>' +
        '</div>' +
        '<div class="col-2 text-right">' +
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
        '<p>IF</p>' +
        '<div class="sa-color-tertiary">the user’s current location</div>' +
        '<select name="aaa" class="label ui selection dropdown select-noborder">' +
        '<option>is</option>' +
        '<option>is not</option>' +
        '</select>' +
        '<div class="sa-color-tertiary mr-2">within</div>' +
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
        '<div class="sa-color-tertiary ml-2">from their previous location</div>' +
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