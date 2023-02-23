function myFunction(){

    var cost = 0;
    var furvalue = 0;
    var location = document.getElementById("location").value;
    var area = document.getElementById("area").value;
    var size = document.getElementById("size").value;
    var floor = document.getElementById("floor").value;
    var furnished = document.getElementById("furnished").value;
    var segment = document.getElementById("segment").value;

    var stilt = "";
    var ele = document.getElementsByName("stilt");
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        stilt = ele[i].value;
    }
    
    if(location.trim() != "Select Location" && area.trim() != "Select Area in sq. ft or sq. guz" && !(isNaN(parseInt(document.getElementById("size").value.trim(),10)))){
        
        fetch('text.json').then(function(response){

            return response.json();
        
        }).then(function(data){
            furvalue = data[furnished][segment];

            if(area.trim() == "guz"){
                cost =  9 * size * (Number(floor) + Number(stilt)) * furvalue;
            }else{
                cost = size * (Number(floor)+ Number(stilt)) * furvalue;
            }

            $("#errorModal .modal-title").html("Total Cost");
            // $("#errorModal .modal-body").html("Rs. " + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(cost));
            $("#errorModal .modal-body").html(cost.toLocaleString('en-IN',{style: 'currency', currency: 'INR'}));
            $("#errorModal").modal("show");
            
        }).catch(function(err){
            console.log(err);
        });
    }else{
        $("#errorModal .modal-title").html("Error Message");
        $("#errorModal .modal-body").html("Please Select Required Filed");
        $("#errorModal").modal("show");
    }
    
}
function validation(){
    // console.log("1. " + parseInt(document.getElementById("size").value.trim(),10));
    // console.log("2. "+ (document.getElementById("size").value.trim() === ''))
    if(isNaN(parseInt(document.getElementById("size").value.trim(),10))){
        document.getElementById("sizeValidation").innerHTML = "Please Provide Valide Number *";
    }else{
        document.getElementById("sizeValidation").innerHTML = "";
    }
}







// fetch('/text.json').then(result=>result.json()).then(console.log);



