define(function() {
	
	return {
		onViewCreated: function(){
           this.view.flxPay.onClick=function(){
            alert("Pay");
          };
          this.view.flxMail.onClick=function(){
            alert("Mail");
          };
          this.view.flxFaceTime.onClick=function(){
            alert("Face Time");
          };
          this.view.flxCall.onClick=function(){
            alert("Call");
          };
          this.view.flxMessage.onClick=function(){
            alert("Message");
          };
        }
	};
});