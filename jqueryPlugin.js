$(function(){

   $.fn.RadioForm = function(sTitle,sAction,sRadioName,sButtonText,oRadio){        
       
      var oForm = $("<form />",{class:"jumbotron",method:"post",action:sAction}).appendTo(this); 
      
      oForm.prepend("<h1>"+sTitle+"</h1>"); 
       
      var oDiv = $("<div/>",{}).appendTo(oForm);
       
       
      for(i = 0; i < oRadio.length;i++)
      {
          
          
          $("<input/>",
            { 
               type:"radio",               
               name:sRadioName,
               id:oRadio[i] ,
               value:oRadio[i]
           
            }
           ).appendTo(oDiv);
          
          
          
          $("<label/>",{
              text:oRadio[i],
              "for":oRadio[i]
              
          }).appendTo(oDiv);
          
          $("<br />").appendTo(oDiv);
      }
       
       $("<button/>",{
           text:sButtonText,
           class:"btn btn-primary"
       }).appendTo(oForm);
      return this;
   };



})
