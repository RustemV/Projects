$(document).ready(function(){ 
	$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize(); 
                    if(! ($('#agree-support').prop('checked'))) {
                       alert("Вы должны согласиться с обработкой персональных данных support");     
                      return false;  
                    }              
		$.ajax( { type: "POST", url: "contact.php", data: str, success: function(msg){ 
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
					{ result = '<div class="notification_ok">Ваше сообщение отправлено.<br> <a href="#" onclick="freset();return false;">Отправить еще одно сообщение</a></div>'; $("#fields").hide(); }
				else
					{ result = msg; } 
				$("#note").html(result); 
			} 
		}); 
		return false; 
	}); 
});
				
function freset(){ 	
	$("#note").html('');
	document.getElementById('ajax-contact-form').reset();
	$("#fields").show();
};


$(document).ready(function(){
//    $("#note_pod").hide();
    $("#ajax-contact-form_pod").submit(function(){ 
        var str = $(this).serialize();
                    if(! ($('#agree-new').prop('checked'))) {
                       alert("Вы должны согласиться с обработкой персональных данных new");     
                      return false;  
                    }        
        $.ajax( { type: "POST", url: "contact_pod.php", data: str, success: function(msg){
            if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
            { result = '<div class="notification_ok">Ваше сообщение отправлено.<br> <a href="#" onclick="freset2();return false;">Отправить еще одно сообщение</a></div>'; $("#fields_pod").hide();
                $('#page_PODKL').find('.jspPane').css('top', '0px'); }
            else
            {   $('#page_PODKL').find('.jspPane').css('top', '0px');
                result = msg; }

            $("#note_pod").html(result);

        }
        });
        return false;
    });
});

function freset2(){
    $("#note_pod").html('');
    document.getElementById('ajax-contact-form_pod').reset();
    $('#capth').attr('src','captcha/captcha.php');
    $("#fields_pod").show();
};


$(document).ready(function(){
//    $("#note_pod").hide();
    $("#ajax-contact-form_tarif").submit(function(){ 
        var str = $(this).serialize();
                    if(! ($('#agree-new').prop('checked'))) {
                       alert("Вы должны согласиться с обработкой персональных данных new");     
                      return false;  
                    }        
        $.ajax( { type: "POST", url: "contact_tarif.php", data: str, success: function(msg){
            if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
            { result = '<div class="notification_ok">Ваше сообщение отправлено.<br> <a href="#" onclick="freset3();return false;">Отправить еще одно сообщение</a></div>'; 
                $("#fields_tarif").hide();
                $('#page_TARIFS').find('.jspPane').css('top', '0px'); }
            else
            {   $('#page_TARIFS').find('.jspPane').css('top', '0px');
                result = msg; }

            $("#note_tarif").html(result);

        }
        });
        return false;
    });
});

function freset3(){
    $("#note_tarif").html('');
    document.getElementById('ajax-contact-form_tarif').reset();
    $('#capth_tarif').attr('src','captcha/captcha.php');
    $("#fields_tarif").show();
};