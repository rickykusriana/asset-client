export function capitalize(str) 
{
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function get_img(html) 
{
	var elem = document.createElement("span");
	elem.innerHTML = html;

	var images = elem.getElementsByTagName("img");
	
	var str;
	for (var i=0; i < 1; i++) {
		if (images.length > 0) {
	   		str = images[i].src;
		}
		else {
			str = '/assets/img/200x110.gif';
		}
	}
	return str;
}

export function cut_htmltag(str)
{
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();
		str = str.replace(/<[^>]*>/g, '');

	return str.substring(0, 257)+ ' ...';
}