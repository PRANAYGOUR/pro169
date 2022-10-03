AFRAME.registerComponent("marker-handler" , {
    init: async function(){
        this.el.addEventListener("markerFound" , ()=>{
            console.log("marker is found")
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost" , ()=>{
            console.log("marker is lost")
            this.handleMarkerLost();
        })
    },

    handleMarkerFound: function(){
        //changing the visibility of button div
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        
        orderButton.addEventListener("click" , ()=>{
          swal({
            icon:"https://i.imgur.com/4NZ6uLY.jpg",
            title:"Thanks for order",
            text:"Your order will be soon at your table"    
          })
        })

        ratingButton.addEventListener("click" , ()=>{
            swal({
              icon:"warning",
              title:"Rate our dish",
              text:"Work in progress"    
            })
          })
          

    },

    handleMarkerLost: function(){
        //changing the visibility of button div
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none";
    }

})