/* 
 * Funciones para escribir mailto en las paginas web
 * Prevencion de spybot antispam
 */
dominio="undav.edu.ar"
conector="@"
function dame_correo(usuario){
   return usuario + conector + dominio
}
function escribe_enlace_correo(usuario){
   document.write("<a href='mailto:" + dame_correo(usuario) + "' target='_blank'>" + dame_correo(usuario) + "</a>")
}

function escribe_enlace_maraton(){
   document.write('<a href="mailto:'+dame_correo('info')+'" target="_blank"><img src="imagenes/maraton_baner.jpg" alt="Maraton Undav" /></a>')
}

function abrirPopup( idcontenido, left, top, width, height)
{
 winHandle = window.open("http://www.undav.edu.ar/popup.php?id="+idcontenido, '_', "modal,toolbar=false,location=false,directories=false,status=false,menubar=false,scrollbars=no,resizable=no,left="+left+",top="+top+",width="+width+",height="+height);
 winHandle.focus();
}


function Popup(url,name,width,height,resize,scroll) {
	var dialogWin = new Object();
	dialogWin.width = width;
	dialogWin.height = height;
	now = new Date();
	var millis=now.getTime();
	var mstr=""+millis;
	if (navigator.appName == "Netscape") {
		dialogWin.left = window.screenX + ((window.outerWidth - dialogWin.width) / 2);
		dialogWin.top = window.screenY + ((window.outerHeight - dialogWin.height) / 2);
		var attr = 'screenX=' + dialogWin.left + ',screenY=' + dialogWin.top + ',resizable=' + resize + ',width=' + dialogWin.width + ',height=' + dialogWin.height + ',scrollbars=' + scroll + ',menubar=no,location=no,toolbar=no,status=no,directories=no';
	} else if (document.all) {
		dialogWin.left = (screen.width - dialogWin.width) / 2;
		dialogWin.top = (screen.height - dialogWin.height) / 2;
		var attr = 'left=' + dialogWin.left + ',top=' + dialogWin.top + ',resizable=' + resize + ',width=' + dialogWin.width + ',height=' + dialogWin.height + ',scrollbars=' + scroll + ',menubar=no,location=no,toolbar=no,status=no,directories=no';
	}
var ventana = window.open(url,name,attr);
ventana.focus();
}

