define({ 

  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function(){
    this.acc={};
    this.isEditable=false;
  },

  preShow:function(){

    this.acc=kony.store.getItem("contactDetails") || 
      {
      contact:{
        name:"Stoyan", 
        phone:"0887241706",
        img:"usermale96.png"
      }
    };

    this.view.imgAcc.src=this.acc.contact.img;
    this.view.txtBoxNumber.text=this.acc.contact.phone || "(408) 555-0909";
    this.view.txtBoxName.text=this.acc.contact.name || "Jane Appleseed";
    this.view.lblBack.onTouchStart=this.exit.bind(this);
    this.view.lblEdit.onTouchStart=this.toggleEdit;
    this.view.lblSend.onTouchStart=this.changeForm;
    this.view.lblShare.onTouchStart=this.changeTheme;
    this.changeSelectable(this.isEditable);
  },

  toggleEdit:function(){
    this.isEditable=!this.isEditable;
    this.changeSelectable(this.isEditable);
    if(this.isEditable){      
      this.view.lblEdit.text="Save";
    } else {
      this.view.lblEdit.text="Edit";      	
    }

  },

  changeSelectable:function(condition){
    this.view.txtBoxNumber.setEnabled(condition);
    this.view.txtBoxName.setEnabled(condition);
    this.view.txtBoxEmail.setEnabled(condition);
    this.view.txtAreaNotes.setEnabled(condition);
  },

  exit:function(){
    this.acc.user = {
      name:this.view.txtBoxName.text,
      phone:this.view.txtBoxNumber.text,
      email:this.view.txtBoxEmail.text,
      notes:this.view.txtAreaNotes.text
    };

    kony.store.setItem("contactDetails", this.acc);
    var frmSegListNavigation=new kony.mvc.Navigation("frmSegList");
    frmSegListNavigation.navigate();
  },

  changeForm:function(){
    var nav=new kony.mvc.Navigation("frmChangingColor");
    nav.navigate();
  },

  changeTheme:function(){
    if( kony.theme.getCurrentTheme()=='ContactTheme'){
      kony.theme.setCurrentTheme("defaultTheme",this.onSuccessThemeChange,this.onErrorThemeChange);
    } else {
      kony.theme.setCurrentTheme("ContactTheme",this.onSuccessThemeChange,this.onErrorThemeChange); 
    }
  },

  onSuccessThemeChange:function () {
    console.log("successfully set the theme to app");
  },

  onErrorThemeChange:function () {
    alert("Skin does not exist");
  }

});
