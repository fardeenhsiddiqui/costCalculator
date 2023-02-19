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
    
    if(location.trim() != "Select Location" && 
        area.trim() != "Select Area in sq. ft or sq. guz" && 
        size.trim() != "Select size"){
        // console.log(location + "\t" + area + "\t" + size + "\t"  + floor + "\t" + furnished + "\t"  + segment + "\t" + stilt );

        fetch('/text.json').then(function(response){

            return response.json();
        
        }).then(function(data){
            furvalue = data[furnished][segment];

            if(area.trim() == "guz"){
                cost =  9 * size * (floor+stilt) * furvalue;
            }else{
                cost = size * (floor+stilt) * furvalue;
            }

            $("#errorModal .modal-title").html("Total Cost");
            $("#errorModal .modal-body").html("Rs. " + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(cost));
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






// fetch('/text.json').then(result=>result.json()).then(console.log);



