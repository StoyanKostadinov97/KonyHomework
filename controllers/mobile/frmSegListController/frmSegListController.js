define({ 

 segDataList: [
    {name: "Ivan Minchev",
     phone: "0888010203",
     email: "janeappleseed@icloud.com",
     img: "https://img.icons8.com/color/96/000000/circled-user-female-skin-type-4--v1.png"
    },
    {name: "Denica Stoeva",
     phone: "0888040253",
     email: "janeappleseed@icloud.com",
     img: "userfemale96.png"
    },
    {name: "Magazin za mebeli",
     phone: "0888123456",
     email: "janeappleseed@icloud.com"
     },
    {name: "Ivan Minchev",
     phone: "0888010203",
     email: "janeappleseed@icloud.com",
     img: "usermale96.png"
    },
    {name: "Denica Stoeva",
     phone: "0888040253",
     email: "janeappleseed@icloud.com",
     img: "userfemale96.png"
    },
    {name: "Magazin za mebeli",
     phone: "0888123456",
     email: "janeappleseed@icloud.com"
     },
    {name: "Ivan Minchev",
     phone: "0888010203",
     email: "janeappleseed@icloud.com",
     img: "usermale96.png"
    },
    {name: "Denica Stoeva",
     phone: "0888040253",
     email: "janeappleseed@icloud.com",
     img: "userfemale96.png"
    },
    {name: "Magazin za mebeli",
     phone: "0888123456",
     email: "janeappleseed@icloud.com"
     }
    
  ],
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },
  init: function() {  
    console.log("fromInit acc");
    this.view.segList.onRowClick = this.onRowClicked;
  },
  
  preShow: function() {
    var editedUser=kony.store.getItem("contactDetails") || undefined;
    if(editedUser){
      this.segDataList[editedUser.index]=editedUser.user;
    }
    this.formatedData = [];
    this.formatedSegmentData.call(this,this.segDataList,this.formatedData);  
    this.view.segList.setData(this.formatedData);
  },
    
  onRowClicked: function() {
    var indexOfSelectedRow = this.view.segList.selectedRowIndex[1];
    var contactData = this.segDataList[indexOfSelectedRow];
    kony.store.setItem("contactDetails", {index:indexOfSelectedRow, contact:contactData});
    var frmAccNavigation=new kony.mvc.Navigation("frmAcc");
    frmAccNavigation.navigate();
  },
  
  formatedSegmentData: function(responseData,formatedData) {
    responseData.forEach(function(contact) {
      formatedData.push({
        "lblHeading": {"text": contact.name || "N/A"},
        "lblDescription": {"text": contact.phone},
        "lblStrip": {"width": "2%"}
      });
    });
    console.log(this.formatedData);
  },

 });