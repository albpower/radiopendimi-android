//DergoMesazh
function onSuccess(data, status)
        {
            data = $.trim(data);
            $("#notification").text(data);
        }
  
        function onError(data, status)
        {
            // handle an error
        }        
  
        $(document).ready(function() {
            $("#submit").click(function(){
  
                var formData = $("#callAjaxForm").serialize();
  
                $.ajax({
                    type: "POST",
                    url: "http://radio-pendimi.com/mobile/v2/send.php",
                    crossDomain:true,
                    cache: false,
                    data: formData,
                    success: onSuccess,
                    error: onError
                });
				return false;
            });
			$("#reset").click(function() {
				$('#callAjaxForm').trigger("reset");
				$('#notification').text("");
			});
        });