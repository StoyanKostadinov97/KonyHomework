define({ 
  onViewCreated : function(){

    this.view.preShow=this.preShow;


  },
  preShow:function(){
    this.view.flxBlue.onClick=this.changeColor;
    this.view.flxRed.onTouchStart=this.changeColor;
    this.view.flxYellow.onTouchStart=this.changeColor;
  },

  changeColor:function(target){
    var skns={
      "red":"sknFlxContainerRed",
      "blue":"sknFlxContainerBlue",
      "yellow":"sknFlxContainerYellow"
    };

    if(target.id.includes('Blue')){
      this.view.changingbtn.skinColor=skns['blue'];
    } else if(target.id.includes("Red")){
      this.view.changingbtn.skinColor=skns['red'];
    } else if(target.id.includes("Yellow")){
      this.view.changingbtn.skinColor=skns['yellow'];
    }
  }
});