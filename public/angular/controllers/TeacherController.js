convopal.controller('TeacherController',
function($scope,$rootScope,$location,profileService,$http,moment,socialLoginService) {
	//$scope.username = $rootscope.$scope.name;
	userDetails = function(imageUrl,username,user_id)
	{
		this.imageUrl = imageUrl;
		this.username = username;
		this.user_id = user_id;
	}
	var availableCountries = [
		{ "value":"AF", "title":"Afghanistan"},
			{ "value":"AX", "title":"Åland Islands"},
			{ "value":"AL", "title":"Albania"},
			{ "value":"DZ", "title":"Algeria"},
			{ "value":"AS", "title":"American Samoa"},
			{ "value":"AD", "title":"Andorra"},
			{ "value":"AO", "title":"Angola"},
			{ "value":"AI", "title":"Anguilla"},
			{ "value":"AQ", "title":"Antarctica"},
			{ "value":"AG", "title":"Antigua and Barbuda"},
			{ "value":"AR", "title":"Argentina"},
			{ "value":"AM", "title":"Armenia"},
			{ "value":"AW", "title":"Aruba"},
			{ "value":"AU", "title":"Australia"},
			{ "value":"AT", "title":"Austria"},
			{ "value":"AZ", "title":"Azerbaijan"},
			{ "value":"BS", "title":"Bahamas"},
			{ "value":"BH", "title":"Bahrain"},
			{ "value":"BD", "title":"Bangladesh"},
			{ "value":"BB", "title":"Barbados"},
			{ "value":"BY", "title":"Belarus"},
			{ "value":"BE", "title":"Belgium"},
			{ "value":"BZ", "title":"Belize"},
			{ "value":"BJ", "title":"Benin"},
			{ "value":"BM", "title":"Bermuda"},
			{ "value":"BT", "title":"Bhutan"},
			{ "value":"BO", "title":"Bolivia, Plurinational State of"},
			{ "value":"BQ", "title":"Bonaire, Sint Eustatius and Saba"},
			{ "value":"BA", "title":"Bosnia and Herzegovina"},
			{ "value":"BW", "title":"Botswana"},
			{ "value":"BV", "title":"Bouvet Island"},
			{ "value":"BR", "title":"Brazil"},
			{ "value":"IO", "title":"British Indian Ocean Territory"},
			{ "value":"BN", "title":"Brunei Darussalam"},
			{ "value":"BG", "title":"Bulgaria"},
			{ "value":"BF", "title":"Burkina Faso"},
			{ "value":"BI", "title":"Burundi"},
			{ "value":"KH", "title":"Cambodia"},
			{ "value":"CM", "title":"Cameroon"},
			{ "value":"CA", "title":"Canada"},
			{ "value":"CV", "title":"Cape Verde"},
			{ "value":"KY", "title":"Cayman Islands"},
			{ "value":"CF", "title":"Central African Republic"},
			{ "value":"TD", "title":"Chad"},
			{ "value":"CL", "title":"Chile"},
			{ "value":"CN", "title":"China"},
			{ "value":"CX", "title":"Christmas Island"},
			{ "value":"CC", "title":"Cocos (Keeling) Islands"},
			{ "value":"CO", "title":"Colombia"},
			{ "value":"KM", "title":"Comoros"},
			{ "value":"CG", "title":"Congo"},
			{ "value":"CD", "title":"Congo, the Democratic Republic of the"},
			{ "value":"CK", "title":"Cook Islands"},
			{ "value":"CR", "title":"Costa Rica"},
			{ "value":"CI", "title":"Côte d'Ivoire"},
			{ "value":"HR", "title":"Croatia"},
			{ "value":"CU", "title":"Cuba"},
			{ "value":"CW", "title":"Curaçao"},
			{ "value":"CY", "title":"Cyprus"},
			{ "value":"CZ", "title":"Czech Republic"},
			{ "value":"DK", "title":"Denmark"},
			{ "value":"DJ", "title":"Djibouti"},
			{ "value":"DM", "title":"Dominica"},
			{ "value":"DO", "title":"Dominican Republic"},
			{ "value":"EC", "title":"Ecuador"},
			{ "value":"EG", "title":"Egypt"},
			{ "value":"SV", "title":"El Salvador"},
			{ "value":"GQ", "title":"Equatorial Guinea"},
			{ "value":"ER", "title":"Eritrea"},
			{ "value":"EE", "title":"Estonia"},
			{ "value":"ET", "title":"Ethiopia"},
			{ "value":"FK", "title":"Falkland Islands (Malvinas)"},
			{ "value":"FO", "title":"Faroe Islands"},
			{ "value":"FJ", "title":"Fiji"},
			{ "value":"FI", "title":"Finland"},
			{ "value":"FR", "title":"France"},
			{ "value":"GF", "title":"French Guiana"},
			{ "value":"PF", "title":"French Polynesia"},
			{ "value":"TF", "title":"French Southern Territories"},
			{ "value":"GA", "title":"Gabon"},
			{ "value":"GM", "title":"Gambia"},
			{ "value":"GE", "title":"Georgia"},
			{ "value":"DE", "title":"Germany"},
			{ "value":"GH", "title":"Ghana"},
			{ "value":"GI", "title":"Gibraltar"},
			{ "value":"GR", "title":"Greece"},
			{ "value":"GL", "title":"Greenland"},
			{ "value":"GD", "title":"Grenada"},
			{ "value":"GP", "title":"Guadeloupe"},
			{ "value":"GU", "title":"Guam"},
			{ "value":"GT", "title":"Guatemala"},
			{ "value":"GG", "title":"Guernsey"},
			{ "value":"GN", "title":"Guinea"},
			{ "value":"GW", "title":"Guinea-Bissau"},
			{ "value":"GY", "title":"Guyana"},
			{ "value":"HT", "title":"Haiti"},
			{ "value":"HM", "title":"Heard Island and McDonald Islands"},
			{ "value":"VA", "title":"Holy See (Vatican City State)"},
			{ "value":"HN", "title":"Honduras"},
			{ "value":"HK", "title":"Hong Kong"},
			{ "value":"HU", "title":"Hungary"},
			{ "value":"IS", "title":"Iceland"},
			{ "value":"IN", "title":"India"},
			{ "value":"ID", "title":"Indonesia"},
			{ "value":"IR", "title":"Iran, Islamic Republic of"},
			{ "value":"IQ", "title":"Iraq"},
			{ "value":"IE", "title":"Ireland"},
			{ "value":"IM", "title":"Isle of Man"},
			{ "value":"IL", "title":"Israel"},
			{ "value":"IT", "title":"Italy"},
			{ "value":"JM", "title":"Jamaica"},
			{ "value":"JP", "title":"Japan"},
			{ "value":"JE", "title":"Jersey"},
			{ "value":"JO", "title":"Jordan"},
			{ "value":"KZ", "title":"Kazakhstan"},
			{ "value":"KE", "title":"Kenya"},
			{ "value":"KI", "title":"Kiribati"},
			{ "value":"KP", "title":"Korea, Democratic People's Republic of"},
			{ "value":"KR", "title":"Korea, Republic of"},
			{ "value":"KW", "title":"Kuwait"},
			{ "value":"KG", "title":"Kyrgyzstan"},
			{ "value":"LA", "title":"Lao People's Democratic Republic"},
			{ "value":"LV", "title":"Latvia"},
			{ "value":"LB", "title":"Lebanon"},
			{ "value":"LS", "title":"Lesotho"},
			{ "value":"LR", "title":"Liberia"},
			{ "value":"LY", "title":"Libya"},
			{ "value":"LI", "title":"Liechtenstein"},
			{ "value":"LT", "title":"Lithuania"},
			{ "value":"LU", "title":"Luxembourg"},
			{ "value":"MO", "title":"Macao"},
			{ "value":"MK", "title":"Macedonia, the former Yugoslav Republic of"},
			{ "value":"MG", "title":"Madagascar"},
			{ "value":"MW", "title":"Malawi"},
			{ "value":"MY", "title":"Malaysia"},
			{ "value":"MV", "title":"Maldives"},
			{ "value":"ML", "title":"Mali"},
			{ "value":"MT", "title":"Malta"},
			{ "value":"MH", "title":"Marshall Islands"},
			{ "value":"MQ", "title":"Martinique"},
			{ "value":"MR", "title":"Mauritania"},
			{ "value":"MU", "title":"Mauritius"},
			{ "value":"YT", "title":"Mayotte"},
			{ "value":"MX", "title":"Mexico"},
			{ "value":"FM", "title":"Micronesia, Federated States of"},
			{ "value":"MD", "title":"Moldova, Republic of"},
			{ "value":"MC", "title":"Monaco"},
			{ "value":"MN", "title":"Mongolia"},
			{ "value":"ME", "title":"Montenegro"},
			{ "value":"MS", "title":"Montserrat"},
			{ "value":"MA", "title":"Morocco"},
			{ "value":"MZ", "title":"Mozambique"},
			{ "value":"MM", "title":"Myanmar"},
			{ "value":"NA", "title":"Namibia"},
			{ "value":"NR", "title":"Nauru"},
			{ "value":"NP", "title":"Nepal"},
			{ "value":"NL", "title":"Netherlands"},
			{ "value":"NC", "title":"New Caledonia"},
			{ "value":"NZ", "title":"New Zealand"},
			{ "value":"NI", "title":"Nicaragua"},
			{ "value":"NE", "title":"Niger"},
			{ "value":"NG", "title":"Nigeria"},
			{ "value":"NU", "title":"Niue"},
			{ "value":"NF", "title":"Norfolk Island"},
			{ "value":"MP", "title":"Northern Mariana Islands"},
			{ "value":"NO", "title":"Norway"},
			{ "value":"OM", "title":"Oman"},
			{ "value":"PK", "title":"Pakistan"},
			{ "value":"PW", "title":"Palau"},
			{ "value":"PS", "title":"Palestinian Territory, Occupied"},
			{ "value":"PA", "title":"Panama"},
			{ "value":"PG", "title":"Papua New Guinea"},
			{ "value":"PY", "title":"Paraguay"},
			{ "value":"PE", "title":"Peru"},
			{ "value":"PH", "title":"Philippines"},
			{ "value":"PN", "title":"Pitcairn"},
			{ "value":"PL", "title":"Poland"},
			{ "value":"PT", "title":"Portugal"},
			{ "value":"PR", "title":"Puerto Rico"},
			{ "value":"QA", "title":"Qatar"},
			{ "value":"RE", "title":"Réunion"},
			{ "value":"RO", "title":"Romania"},
			{ "value":"RU", "title":"Russian Federation"},
			{ "value":"RW", "title":"Rwanda"},
			{ "value":"BL", "title":"Saint Barthélemy"},
			{ "value":"SH", "title":"Saint Helena, Ascension and Tristan da Cunha"},
			{ "value":"KN", "title":"Saint Kitts and Nevis"},
			{ "value":"LC", "title":"Saint Lucia"},
			{ "value":"MF", "title":"Saint Martin (French part)"},
			{ "value":"PM", "title":"Saint Pierre and Miquelon"},
			{ "value":"VC", "title":"Saint Vincent and the Grenadines"},
			{ "value":"WS", "title":"Samoa"},
			{ "value":"SM", "title":"San Marino"},
			{ "value":"ST", "title":"Sao Tome and Principe"},
			{ "value":"SA", "title":"Saudi Arabia"},
			{ "value":"SN", "title":"Senegal"},
			{ "value":"RS", "title":"Serbia"},
			{ "value":"SC", "title":"Seychelles"},
			{ "value":"SL", "title":"Sierra Leone"},
			{ "value":"SG", "title":"Singapore"},
			{ "value":"SX", "title":"Sint Maarten (Dutch part)"},
			{ "value":"SK", "title":"Slovakia"},
			{ "value":"SI", "title":"Slovenia"},
			{ "value":"SB", "title":"Solomon Islands"},
			{ "value":"SO", "title":"Somalia"},
			{ "value":"ZA", "title":"South Africa"},
			{ "value":"GS", "title":"South Georgia and the South Sandwich Islands"},
			{ "value":"SS", "title":"South Sudan"},
			{ "value":"ES", "title":"Spain"},
			{ "value":"LK", "title":"Sri Lanka"},
			{ "value":"SD", "title":"Sudan"},
			{ "value":"SR", "title":"Suriname"},
			{ "value":"SJ", "title":"Svalbard and Jan Mayen"},
			{ "value":"SZ", "title":"Swaziland"},
			{ "value":"SE", "title":"Sweden"},
			{ "value":"CH", "title":"Switzerland"},
			{ "value":"SY", "title":"Syrian Arab Republic"},
			{ "value":"TW", "title":"Taiwan, Province of China"},
			{ "value":"TJ", "title":"Tajikistan"},
			{ "value":"TZ", "title":"Tanzania, United Republic of"},
			{ "value":"TH", "title":"Thailand"},
			{ "value":"TL", "title":"Timor-Leste"},
			{ "value":"TG", "title":"Togo"},
			{ "value":"TK", "title":"Tokelau"},
			{ "value":"TO", "title":"Tonga"},
			{ "value":"TT", "title":"Trinidad and Tobago"},
			{ "value":"TN", "title":"Tunisia"},
			{ "value":"TR", "title":"Turkey"},
			{ "value":"TM", "title":"Turkmenistan"},
			{ "value":"TC", "title":"Turks and Caicos Islands"},
			{ "value":"TV", "title":"Tuvalu"},
			{ "value":"UG", "title":"Uganda"},
			{ "value":"UA", "title":"Ukraine"},
			{ "value":"AE", "title":"United Arab Emirates"},
			{ "value":"GB", "title":"United Kingdom"},
			{ "value":"US", "title":"United States"},
			{ "value":"UM", "title":"United States Minor Outlying Islands"},
			{ "value":"UY", "title":"Uruguay"},
			{ "value":"UZ", "title":"Uzbekistan"},
			{ "value":"VU", "title":"Vanuatu"},
			{ "value":"VE", "title":"Venezuela, Bolivarian Republic of"},
			{ "value":"VN", "title":"Viet Nam"},
			{ "value":"VG", "title":"Virgin Islands, British"},
			{ "value":"VI", "title":"Virgin Islands, U.S."},
			{ "value":"WF", "title":"Wallis and Futuna"},
			{ "value":"EH", "title":"Western Sahara"},
			{ "value":"YE", "title":"Yemen"},
			{ "value":"ZM", "title":"Zambia"},
			{ "value":"ZW", "title":"Zimbabwe"}
	];
	var years = [
			{ "value":"2003", "title":"2003"},
			{ "value":"2002", "title":"2002"},
			{ "value":"2001", "title":"2001"},
			{ "value":"2000", "title":"2000"},
			{ "value":"1999", "title":"1999"},
			{ "value":"1998", "title":"1998"},
			{ "value":"1997", "title":"1997"},
			{ "value":"1996", "title":"1996"},
			{ "value":"1995", "title":"1995"},
			{ "value":"1994", "title":"1994"},
			{ "value":"1993", "title":"1993"},
			{ "value":"1992", "title":"1992"},
			{ "value":"1991", "title":"1991"},
			{ "value":"1990", "title":"1990"},
			{ "value":"1989", "title":"1989"},
			{ "value":"1988", "title":"1988"},
			{ "value":"1987", "title":"1987"},
			{ "value":"1986", "title":"1986"},
			{ "value":"1985", "title":"1985"},
			{ "value":"1984", "title":"1984"},
			{ "value":"1983", "title":"1983"},
			{ "value":"1982", "title":"1982"},
			{ "value":"1981", "title":"1981"},
			{ "value":"1980", "title":"1980"},
			{ "value":"1979", "title":"1979"},
			{ "value":"1978", "title":"1978"},
			{ "value":"1977", "title":"1977"},
			{ "value":"1976", "title":"1976"},
			{ "value":"1975", "title":"1975"},
			{ "value":"1974", "title":"1974"},
			{ "value":"1973", "title":"1973"},
			{ "value":"1972", "title":"1972"},
			{ "value":"1971", "title":"1971"},
			{ "value":"1970", "title":"1970"},
			{ "value":"1969", "title":"1969"},
			{ "value":"1968", "title":"1968"},
			{ "value":"1967", "title":"1967"},
			{ "value":"1966", "title":"1966"},
			{ "value":"1965", "title":"1965"},
			{ "value":"1964", "title":"1964"},
			{ "value":"1963", "title":"1963"},
			{ "value":"1962", "title":"1962"},
			{ "value":"1961", "title":"1961"},
			{ "value":"1960", "title":"1960"},
			{ "value":"1959", "title":"1959"},
			{ "value":"1958", "title":"1958"},
			{ "value":"1957", "title":"1957"},
			{ "value":"1956", "title":"1956"},
			{ "value":"1955", "title":"1955"},
			{ "value":"1954", "title":"1954"},
			{ "value":"1953", "title":"1953"},
			{ "value":"1952", "title":"1952"},
			{ "value":"1951", "title":"1951"},
			{ "value":"1950", "title":"1950"},
			{ "value":"1949", "title":"1949"},
			{ "value":"1948", "title":"1948"},
			{ "value":"1947", "title":"1947"},
			{ "value":"1946", "title":"1946"},
			{ "value":"1945", "title":"1945"},
			{ "value":"1944", "title":"1944"},
			{ "value":"1943", "title":"1943"},
			{ "value":"1942", "title":"1942"},
			{ "value":"1941", "title":"1941"},
			{ "value":"1940", "title":"1940"},
			{ "value":"1939", "title":"1939"},
			{ "value":"1938", "title":"1938"},
			{ "value":"1937", "title":"1937"},
			{ "value":"1936", "title":"1936"},
			{ "value":"1935", "title":"1935"},
			{ "value":"1934", "title":"1934"},
			{ "value":"1933", "title":"1933"},
			{ "value":"1932", "title":"1932"},
			{ "value":"1931", "title":"1931"},
			{ "value":"1930", "title":"1930"},
			{ "value":"1929", "title":"1929"},
			{ "value":"1928", "title":"1928"},
			{ "value":"1927", "title":"1927"},
			{ "value":"1926", "title":"1926"},
			{ "value":"1925", "title":"1925"},
			{ "value":"1924", "title":"1924"},
			{ "value":"1923", "title":"1923"},
			{ "value":"1922", "title":"1922"},
			{ "value":"1921", "title":"1921"},
			{ "value":"1920", "title":"1920"},
			{ "value":"1919", "title":"1919"},
			{ "value":"1918", "title":"1918"},
			{ "value":"1917", "title":"1917"},
			{ "value":"1916", "title":"1916"},
			{ "value":"1915", "title":"1915"},
			{ "value":"1914", "title":"1914"},
			{ "value":"1913", "title":"1913"},
			{ "value":"1912", "title":"1912"},
			{ "value":"1911", "title":"1911"},
			{ "value":"1910", "title":"1910"},
			{ "value":"1909", "title":"1909"},
			{ "value":"1908", "title":"1908"},
			{ "value":"1907", "title":"1907"},
			{ "value":"1906", "title":"1906"},
			{ "value":"1905", "title":"1905"},
			{ "value":"1904", "title":"1904"},
			{ "value":"1903", "title":"1903"},
			{ "value":"1902", "title":"1902"},
			{ "value":"1901", "title":"1901"},
			{ "value":"1900", "title":"1900"},
			{ "value":"1899", "title":"1899"},
			{ "value":"1898", "title":"1898"},
			{ "value":"1897", "title":"1897"},
			{ "value":"1896", "title":"1896"},
			{ "value":"1895", "title":"1895"},
			{ "value":"1894", "title":"1894"},
			{ "value":"1893", "title":"1893"},
			{ "value":"1892", "title":"1892"},
			{ "value":"1891", "title":"1891"}
	];
	var degrees =[
		{ "value":"Bacholar", "title":"Bacholar"},
		{ "value":"Master", "title":"Master"},
		{ "value":"Doctor", "title":"Doctor"},
		{ "value":"PostDoctor", "title":"PostDoctor"},
	];
	var experience = function(id,from,to,city,country,company,position,description)
	{
		this.id = id;
		this.from = from;
		this.to = to;
		this.city = city;
		this.company = company;
		this.position = position;
		this.description = description;
	}
	var education = function(id,from,to,institute,major,degree,description)
	{
		this.id = id;
		this.from = from;
		this.to = to;
		this.institute = institute;
		this.major = major;
		this.degree = degree;
		this.description = description;
	}
	$scope.experiences =[];
	$scope.educations =[];
	$scope.created_at = "28 March 2017";
	$scope.C_countries = {
		model:null,
		availableOptions: availableCountries
	};
	$scope.From_countries = {
		model:null,
		availableOptions:availableCountries};
	
	$scope.liveIncountries = {
		model:null,
		availableOptions:	availableCountries
	};
	$scope.expCountry = {
		model:null,
		availableOptions:	availableCountries
	};
	$scope.timezone = {
		model:null,
		availableOptions:	[
	  { "timeZoneId":"1" ,"gmtAdjustment":"GMT-12:00" ,"useDaylightTime":"0", "value":"-12", "title" :"(GMT-12:00) International data Line West"},
	 { "timeZoneId":"2" ,"gmtAdjustment":"GMT-11:00" ,"useDaylightTime":"0", "value":"-11", "title" :"(GMT-11:00) Midway Island, Samoa"},
	 { "timeZoneId":"3" ,"gmtAdjustment":"GMT-10:00" ,"useDaylightTime":"0", "value":"-10", "title" :"(GMT-10:00) Hawaii"},
	 { "timeZoneId":"4" ,"gmtAdjustment":"GMT-09:00" ,"useDaylightTime":"1", "value":"-9", "title" :"(GMT-09:00) Alaska"},
	 { "timeZoneId":"5" ,"gmtAdjustment":"GMT-08:00" ,"useDaylightTime":"1", "value":"-8", "title" :"(GMT-08:00) Pacific Time (US & Canada)"},
	 { "timeZoneId":"6" ,"gmtAdjustment":"GMT-08:00" ,"useDaylightTime":"1", "value":"-8", "title" :"(GMT-08:00) Tijuana, Baja California"},
	 { "timeZoneId":"7" ,"gmtAdjustment":"GMT-07:00" ,"useDaylightTime":"0", "value":"-7", "title" :"(GMT-07:00) Arizona"},
	 { "timeZoneId":"8" ,"gmtAdjustment":"GMT-07:00" ,"useDaylightTime":"1", "value":"-7", "title" :"(GMT-07:00) Chihuahua, La Paz, Mazatlan"},
	 { "timeZoneId":"9" ,"gmtAdjustment":"GMT-07:00" ,"useDaylightTime":"1", "value":"-7", "title" :"(GMT-07:00) Mountain Time (US & Canada)"},
	 { "timeZoneId":"10" ,"gmtAdjustment":"GMT-06:00" ,"useDaylightTime":"0", "value":"-6", "title" :"(GMT-06:00) Central America"},
	 { "timeZoneId":"11" ,"gmtAdjustment":"GMT-06:00" ,"useDaylightTime":"1", "value":"-6", "title" :"(GMT-06:00) Central Time (US & Canada)"},
	 { "timeZoneId":"12" ,"gmtAdjustment":"GMT-06:00" ,"useDaylightTime":"1", "value":"-6", "title" :"(GMT-06:00) Guadalajara, Mexico City, Monterrey"},
	 { "timeZoneId":"13" ,"gmtAdjustment":"GMT-06:00" ,"useDaylightTime":"0", "value":"-6", "title" :"(GMT-06:00) Saskatchewan"},
	 { "timeZoneId":"14" ,"gmtAdjustment":"GMT-05:00" ,"useDaylightTime":"0", "value":"-5", "title" :"(GMT-05:00) Bogota, Lima, Quito, Rio Branco"},
	 { "timeZoneId":"15" ,"gmtAdjustment":"GMT-05:00" ,"useDaylightTime":"1", "value":"-5", "title" :"(GMT-05:00) Eastern Time (US & Canada)"},
	 { "timeZoneId":"16" ,"gmtAdjustment":"GMT-05:00" ,"useDaylightTime":"1", "value":"-5", "title" :"(GMT-05:00) Indiana (East)"},
	 { "timeZoneId":"17" ,"gmtAdjustment":"GMT-04:00" ,"useDaylightTime":"1", "value":"-4", "title" :"(GMT-04:00) Atlantic Time (Canada)"},
	 { "timeZoneId":"18" ,"gmtAdjustment":"GMT-04:00" ,"useDaylightTime":"0", "value":"-4", "title" :"(GMT-04:00) Caracas, La Paz"},
	 { "timeZoneId":"19" ,"gmtAdjustment":"GMT-04:00" ,"useDaylightTime":"0", "value":"-4", "title" :"(GMT-04:00) Manaus"},
	 { "timeZoneId":"20" ,"gmtAdjustment":"GMT-04:00" ,"useDaylightTime":"1", "value":"-4", "title" :"(GMT-04:00) Santiago"},
	 { "timeZoneId":"21" ,"gmtAdjustment":"GMT-03:30" ,"useDaylightTime":"1", "value":"-3.5", "title" :"(GMT-03:30) Newfoundland"},
	 { "timeZoneId":"22" ,"gmtAdjustment":"GMT-03:00" ,"useDaylightTime":"1", "value":"-3", "title" :"(GMT-03:00) Brasilia"},
	 { "timeZoneId":"23" ,"gmtAdjustment":"GMT-03:00" ,"useDaylightTime":"0", "value":"-3", "title" :"(GMT-03:00) Buenos Aires, Georgetown"},
	 { "timeZoneId":"24" ,"gmtAdjustment":"GMT-03:00" ,"useDaylightTime":"1", "value":"-3", "title" :"(GMT-03:00) Greenland"},
	 { "timeZoneId":"25" ,"gmtAdjustment":"GMT-03:00" ,"useDaylightTime":"1", "value":"-3", "title" :"(GMT-03:00) Montevideo"},
	 { "timeZoneId":"26" ,"gmtAdjustment":"GMT-02:00" ,"useDaylightTime":"1", "value":"-2", "title" :"(GMT-02:00) Mid-Atlantic"},
	 { "timeZoneId":"27" ,"gmtAdjustment":"GMT-01:00" ,"useDaylightTime":"0", "value":"-1", "title" :"(GMT-01:00) Cape Verde Is."},
	 { "timeZoneId":"28" ,"gmtAdjustment":"GMT-01:00" ,"useDaylightTime":"1", "value":"-1", "title" :"(GMT-01:00) Azores"},
	 { "timeZoneId":"29" ,"gmtAdjustment":"GMT+00:00" ,"useDaylightTime":"0", "value":"0", "title" :"(GMT+00:00) Casablanca, Monrovia, Reykjavik"},
	 { "timeZoneId":"30" ,"gmtAdjustment":"GMT+00:00" ,"useDaylightTime":"1", "value":"0", "title" :"(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},
	 { "timeZoneId":"31" ,"gmtAdjustment":"GMT+01:00" ,"useDaylightTime":"1", "value":"1", "title" :"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},
	 { "timeZoneId":"32" ,"gmtAdjustment":"GMT+01:00" ,"useDaylightTime":"1", "value":"1", "title" :"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},
	 { "timeZoneId":"33" ,"gmtAdjustment":"GMT+01:00" ,"useDaylightTime":"1", "value":"1", "title" :"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris"},
	 { "timeZoneId":"34" ,"gmtAdjustment":"GMT+01:00" ,"useDaylightTime":"1", "value":"1", "title" :"(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb"},
	 { "timeZoneId":"35" ,"gmtAdjustment":"GMT+01:00" ,"useDaylightTime":"1", "value":"1", "title" :"(GMT+01:00) West Central Africa"},
	 { "timeZoneId":"36" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Amman"},
	 { "timeZoneId":"37" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Athens, Bucharest, Istanbul"},
	 { "timeZoneId":"38" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Beirut"},
	 { "timeZoneId":"39" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Cairo"},
	 { "timeZoneId":"40" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"0", "value":"2", "title" :"(GMT+02:00) Harare, Pretoria"},
	 { "timeZoneId":"41" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},
	 { "timeZoneId":"42" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Jerusalem"},
	 { "timeZoneId":"43" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Minsk"},
	 { "timeZoneId":"44" ,"gmtAdjustment":"GMT+02:00" ,"useDaylightTime":"1", "value":"2", "title" :"(GMT+02:00) Windhoek"},
	 { "timeZoneId":"45" ,"gmtAdjustment":"GMT+03:00" ,"useDaylightTime":"0", "value":"3", "title" :"(GMT+03:00) Kuwait, Riyadh, Baghdad"},
	 { "timeZoneId":"46" ,"gmtAdjustment":"GMT+03:00" ,"useDaylightTime":"1", "value":"3", "title" :"(GMT+03:00) Moscow, St. Petersburg, Volgograd"},
	 { "timeZoneId":"47" ,"gmtAdjustment":"GMT+03:00" ,"useDaylightTime":"0", "value":"3", "title" :"(GMT+03:00) Nairobi"},
	 { "timeZoneId":"48" ,"gmtAdjustment":"GMT+03:00" ,"useDaylightTime":"0", "value":"3", "title" :"(GMT+03:00) Tbilisi"},
	 { "timeZoneId":"49" ,"gmtAdjustment":"GMT+03:30" ,"useDaylightTime":"1", "value":"3.5", "title" :"(GMT+03:30) Tehran"},
	 { "timeZoneId":"50" ,"gmtAdjustment":"GMT+04:00" ,"useDaylightTime":"0", "value":"4", "title" :"(GMT+04:00) Abu Dhabi, Muscat"},
	 { "timeZoneId":"51" ,"gmtAdjustment":"GMT+04:00" ,"useDaylightTime":"1", "value":"4", "title" :"(GMT+04:00) Baku"},
	 { "timeZoneId":"52" ,"gmtAdjustment":"GMT+04:00" ,"useDaylightTime":"1", "value":"4", "title" :"(GMT+04:00) Yerevan"},
	 { "timeZoneId":"53" ,"gmtAdjustment":"GMT+04:30" ,"useDaylightTime":"0", "value":"4.5", "title" :"(GMT+04:30) Kabul"},
	 { "timeZoneId":"54" ,"gmtAdjustment":"GMT+05:00" ,"useDaylightTime":"1", "value":"5", "title" :"(GMT+05:00) Yekaterinburg"},
	 { "timeZoneId":"55" ,"gmtAdjustment":"GMT+05:00" ,"useDaylightTime":"0", "value":"5", "title" :"(GMT+05:00) Islamabad, Karachi, Tashkent"},
	 { "timeZoneId":"56" ,"gmtAdjustment":"GMT+05:30" ,"useDaylightTime":"0", "value":"5.5", "title" :"(GMT+05:30) Sri Jayawardenapura"},
	 { "timeZoneId":"57" ,"gmtAdjustment":"GMT+05:30" ,"useDaylightTime":"0", "value":"5.5", "title" :"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi"},
	 { "timeZoneId":"58" ,"gmtAdjustment":"GMT+05:45" ,"useDaylightTime":"0", "value":"5.75", "title" :"(GMT+05:45) Kathmandu"},
	 { "timeZoneId":"59" ,"gmtAdjustment":"GMT+06:00" ,"useDaylightTime":"1", "value":"6", "title" :"(GMT+06:00) Almaty, Novosibirsk"},
	 { "timeZoneId":"60" ,"gmtAdjustment":"GMT+06:00" ,"useDaylightTime":"0", "value":"6", "title" :"(GMT+06:00) Astana, Dhaka"},
	 { "timeZoneId":"61" ,"gmtAdjustment":"GMT+06:30" ,"useDaylightTime":"0", "value":"6.5", "title" :"(GMT+06:30) Yangon (Rangoon)"},
	 { "timeZoneId":"62" ,"gmtAdjustment":"GMT+07:00" ,"useDaylightTime":"0", "value":"7", "title" :"(GMT+07:00) Bangkok, Hanoi, Jakarta"},
	 { "timeZoneId":"63" ,"gmtAdjustment":"GMT+07:00" ,"useDaylightTime":"1", "value":"7", "title" :"(GMT+07:00) Krasnoyarsk"},
	 { "timeZoneId":"64" ,"gmtAdjustment":"GMT+08:00" ,"useDaylightTime":"0", "value":"8", "title" :"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi"},
	 { "timeZoneId":"65" ,"gmtAdjustment":"GMT+08:00" ,"useDaylightTime":"0", "value":"8", "title" :"(GMT+08:00) Kuala Lumpur, Singapore"},
	 { "timeZoneId":"66" ,"gmtAdjustment":"GMT+08:00" ,"useDaylightTime":"0", "value":"8", "title" :"(GMT+08:00) Irkutsk, Ulaan Bataar"},
	 { "timeZoneId":"67" ,"gmtAdjustment":"GMT+08:00" ,"useDaylightTime":"0", "value":"8", "title" :"(GMT+08:00) Perth"},
	 { "timeZoneId":"68" ,"gmtAdjustment":"GMT+08:00" ,"useDaylightTime":"0", "value":"8", "title" :"(GMT+08:00) Taipei"},
	 { "timeZoneId":"69" ,"gmtAdjustment":"GMT+09:00" ,"useDaylightTime":"0", "value":"9", "title" :"(GMT+09:00) Osaka, Sapporo, Tokyo"},
	 { "timeZoneId":"70" ,"gmtAdjustment":"GMT+09:00" ,"useDaylightTime":"0", "value":"9", "title" :"(GMT+09:00) Seoul"},
	 { "timeZoneId":"71" ,"gmtAdjustment":"GMT+09:00" ,"useDaylightTime":"1", "value":"9", "title" :"(GMT+09:00) Yakutsk"},
	 { "timeZoneId":"72" ,"gmtAdjustment":"GMT+09:30" ,"useDaylightTime":"0", "value":"9.5", "title" :"(GMT+09:30) Adelaide"},
	 { "timeZoneId":"73" ,"gmtAdjustment":"GMT+09:30" ,"useDaylightTime":"0", "value":"9.5", "title" :"(GMT+09:30) Darwin"},
	 { "timeZoneId":"74" ,"gmtAdjustment":"GMT+10:00" ,"useDaylightTime":"0", "value":"10", "title" :"(GMT+10:00) Brisbane"},
	 { "timeZoneId":"75" ,"gmtAdjustment":"GMT+10:00" ,"useDaylightTime":"1", "value":"10", "title" :"(GMT+10:00) Canberra, Melbourne, Sydney"},
	 { "timeZoneId":"76" ,"gmtAdjustment":"GMT+10:00" ,"useDaylightTime":"1", "value":"10", "title" :"(GMT+10:00) Hobart"},
	 { "timeZoneId":"77" ,"gmtAdjustment":"GMT+10:00" ,"useDaylightTime":"0", "value":"10", "title" :"(GMT+10:00) Guam, Port Moresby"},
	 { "timeZoneId":"78" ,"gmtAdjustment":"GMT+10:00" ,"useDaylightTime":"1", "value":"10", "title" :"(GMT+10:00) Vladivostok"},
	 { "timeZoneId":"79" ,"gmtAdjustment":"GMT+11:00" ,"useDaylightTime":"1", "value":"11", "title" :"(GMT+11:00) Magadan, Solomon Is., New Caledonia"},
	 { "timeZoneId":"80" ,"gmtAdjustment":"GMT+12:00" ,"useDaylightTime":"1", "value":"12", "title" :"(GMT+12:00) Auckland, Wellington"},
	 { "timeZoneId":"81" ,"gmtAdjustment":"GMT+12:00" ,"useDaylightTime":"0", "value":"12", "title" :"(GMT+12:00) Fiji, Kamchatka, Marshall Is."},
	 { "timeZoneId":"82" ,"gmtAdjustment":"GMT+13:00" ,"useDaylightTime":"0", "value":"13", "title" :"(GMT+13:00) Nuku alofa"}
	
		]};
		
	$scope.month = {
		model:null,
		availableOptions:	[
		{ "value":"1", "title" : "January"},
		{ "value":"2", "title" : "February"},
		{ "value":"3", "title" : "March"},
		{ "value":"4", "title" : "April"},
		{ "value":"5", "title" : "May"},
		{ "value":"6", "title" : "June"},
		{ "value":"7", "title" : "July"},
		{ "value":"8", "title" : "August"},
		{ "value":"9", "title" : "September"},
		{ "value":"10", "title" : "October"},
		{ "value":"11", "title" : "November"},
		{ "value":"12", "title" : "December"}
		]};
	$scope.year = {
		model:null,
		availableOptions:years
	};
	$scope.from = {
	model:null,
	availableOptions:years
};
$scope.educationFrom = {
	model:null,
	availableOptions:years
	};
	$scope.to = {
		model:null,
		availableOptions:years
	};
	$scope.educationTo = {
	model:null,
	availableOptions:years
	};
	$scope.gender = {
		model:null,
		availableOptions:	[
		{name:'Male'},
		{name:'Female'},
		]};
	$scope.day = {
		model:null,
		availableOptions:	[
		{ "value":"1", "title" : "1"},
		{ "value":"2", "title" : "2"},
		{ "value":"3", "title" : "3"},
		{ "value":"4", "title" : "4"},
		{ "value":"5", "title" : "5"},
		{ "value":"6", "title" : "6"},
		{ "value":"7", "title" : "7"},
		{ "value":"8", "title" : "8"},
		{ "value":"9", "title" : "9"},
		{ "value":"10", "title" : "10"},
		{ "value":"11", "title" : "11"},
		{ "value":"12", "title" : "12"},
		{ "value":"13", "title" : "13"},
		{ "value":"14", "title" : "14"},
		{ "value":"15", "title" : "15"},
		{ "value":"16", "title" : "16"},
		{ "value":"17", "title" : "17"},
		{ "value":"18", "title" : "18"},
		{ "value":"19", "title" : "19"},
		{ "value":"20", "title" : "20"},
		{ "value":"21", "title" : "21"},
		{ "value":"22", "title" : "22"},
		{ "value":"23", "title" : "23"},
		{ "value":"24", "title" : "24"},
		{ "value":"25", "title" : "25"},
		{ "value":"26", "title" : "26"},
		{ "value":"27", "title" : "27"},
		{ "value":"28", "title" : "28"},
		{ "value":"29", "title" : "29"},
		{ "value":"30", "title" : "30"},
		{ "value":"31", "title" : "31"}
		]};
	$scope.degree = {
	model:null,
	availableOptions:degrees
	};
	$scope.educationDegree = {
		model:null,
		availableOptions:degrees
	};
	
	$scope.save = function(){
		$http.post('teacher/update', {
				id:$scope.id,
				user_id:$scope.user_id,
				username:$scope.username,
				fname:$scope.fname,
				lname:$scope.lname,
				social_id:$scope.social_id,
				account_id:$scope.account_id,
				living_country:$scope.liveIncountries.model,
				city:$scope.city,
				C_fname:$scope.C_fname,
				C_lname:$scope.C_lname,
				C_streetadress:$scope.C_streetadress,
				C_city:$scope.C_city,
				C_state:$scope.C_state,
				C_zip:$scope.C_zip,
				C_country:$scope.C_countries.model,
				C_phone:$scope.C_phone,
				C_email:$scope.C_email,
				video_url:$scope.video_url,
				is_show_publicity:$scope.is_show_publicity,
				brief_into:$scope.brief_into,
			    long_intro:$scope.long_intro,
				availble_status:$scope.availble_status
		 }).then(function (response) {
					alert("Record submit successfully.");
			console.log(response);
		});
		//profileService.save($scope);
	}
	$scope.get = function(){
		$http({
		method: 'GET',
		url: 'teacher/show'
	}).then(function successCallback(response) {
			if($rootScope.loggedInUser == "")
			{
				$rootScope.loggedInUser = new userDetails(response.data.imageUrl,response.data.username,response.data.user_id);
				//$rootScope.loggedInUser.imageUrl = response.data.imageUrl;
			}
			$rootScope.isAuthorized = response.data.isAuthorized;
			$scope.id = response.data.id;
			$scope.user_id = response.data.user_id;
			$scope.username = response.data.username;
			$scope.lname = response.data.lname;
			$scope.fname = response.data.fname;
			$scope.city = response.data.city;
			$scope.liveIncountries.model = response.data.living_country;
			$scope.From_countries.model = response.data.country;
			$scope.created_at = response.data.created_at;
			$scope.imageUrl = response.data.imageUrl;
			
			$scope.C_countries.model = response.data.C_country;
			$scope.C_city = response.data.C_city;
			$scope.C_country = response.data.C_country;
			$scope.C_email = response.data.C_email;
			$scope.C_fname = response.data.C_fname;
			$scope.C_lname = response.data.C_lname;
			$scope.C_phone = response.data.C_phone;
			$scope.C_state = response.data.C_state;
			$scope.C_streetadress = response.data.C_streetadress;
			$scope.C_zip = response.data.C_zip;
			$scope.account_id = response.data.account_id;
			$scope.availble_status = response.data.availble_status;
			$scope.brief_into = response.data.brief_into;
			$scope.is_show_publicity = response.data.is_show_publicity;
			//$scope.living_country = response.data.living_country;
			$scope.long_intro = response.data.long_intro;
			$scope.social_id = response.data.social_id;
			$scope.video_url = response.data.video_url;
			//$scope.experiences = response.data.experiences;
			$.each(response.data.experiences,function(i,j){
					$scope.experiences.push(new experience(j.id,j.from_date,j.to_date,j.city,j.country,j.company,j.position,j.description));
			});
			// $.each(response.data.educations,function(i,j){
			// 		$scope.educations.push(new education(j.id,j.from_date,j.to_date,j.city,j.country,j.company,j.position,j.description));
			// })


			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response);
		});
	}
	$scope.saveExper = function(){
		$http.post('experience/create', {
				prof_id:$scope.id,
				from_date:$scope.from.model,
				to_date:$scope.to.model,
				degree:$scope.degree.model,
				city:$scope.ecity,
				country:$scope.expCountry.model,
				company:$scope.company,
				position:$scope.position,
				description:$scope.edescription
		 }).then(function (response) {
					alert("Record submit successfully.");
					$scope.experiences.push(new experience(response.id,$scope.from.model,$scope.to.model,$scope.ecity,
										$scope.expCountry.model,$scope.company,$scope.position,$scope.edescription));
			console.log(response);
		});
		
	}
	$scope.educationSave = function(){
		$http.post('education/create', {
				prof_id:$scope.id,
				from_date:$scope.educationFrom.model,
				to_date:$scope.educationTo.model,
				degree:$scope.educationDegree.model,
				institute:$scope.institute,
				topics:$scope.major,
				description:$scope.educationDescription
		 }).then(function (response) {
					alert("Record submit successfully.");
					$scope.educations.push(new education(response.id,response.from_date,response.to_date,response.institute,
										response.major,response.degree,response.description));
			console.log(response);
		});
	}
	//  $rootScope.logout = function(){
    //     socialLoginService.logout();
    //      $rootScope.isAuthorized = false;
    //         $rootScope.loggedInUser = "";
    //         $location.path("/login");
    //         $scope.$apply();
    // }
	
	//$location.path('/profile').replace();
	//$location.replace();
});