define(function() {
	var skns={
      "red":"sknFlxContainerRed",
      "blue":"sknFlxContainerBlue",
      "yellow":"sknFlxContainerYellow"
    };
  
  	var changeColor= function (){
      var input=this.view.txtBox.text.toLowerCase();
      var skn=skns[input];
      
      if(skn){
        this.view.flxContainer.skin=skn;
      } else {
        alert("You can choose Red, Blue or Yellow");
        return;
      }
    };
  
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.skinColor="sknFlxContainerBlue";
          	this.view.btnColor.onClick=changeColor.bind(this);
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
// 			defineGetter(this, 'skinColor', () => {
//                 return this.skinColor;
//             });
//             defineSetter(this, 'skinColor', value => {
//                 if (this.skinColor === value) {
//                     return;
//                 }
//                 this.skinColor = value;
//             });
		}
	};
});