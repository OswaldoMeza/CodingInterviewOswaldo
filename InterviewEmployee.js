//alert("hello");
window.onload = function(){

    const employeeDiv = document.getElementById("employeeInfoCards");
  /*  const employeeName = document.getElementById("employeeName");
    const employeePic = document.getElementById("employeePic");
    const employeeDesc = document.getElementById("employeeDesc");
    const employeeRole = document.getElementById("employeeRole");*/


    //employeeDiv.innerHTML = "test test";
    const employeeInfo = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";

    //const employeeRoles = "http://sandbox.bittsdevelopment.com/code1/fetchroles.php";

    this.fetch(employeeInfo)
        .then((resp)=>resp.json())
        .then(function(info){

            for (i=1; i <= Object.keys(info).length;i++){

                console.log(info[i]);
                //console.log(Object.keys(info).length); 
                //Create the elements for the employee cards
                var newEmployee = document.createElement("div");
                var newName = document.createElement("p");
                var newPic = document.createElement("img");
                var newBio = document.createElement("p");
                var newRoleDiv = document.createElement("div");
                var featureCrown = document.createElement("img");

                //Sets the feature crown
                if (info[i].employeeisfeatured == 1){
                    featureCrown.setAttribute("src", "images/crown.png")
                    featureCrown.setAttribute("class", "crownImg");
                    newEmployee.appendChild(featureCrown);
                }
                //Changing the Employee Card properties                
                newEmployee.setAttribute("class", "employeeCard");
                newEmployee.setAttribute("alt", "This is the information for " + info[i].employeefname +" "+info[i].employeelname);
                
                //Changing the Name Property
                var name = document.createTextNode(info[i].employeefname +" "+info[i].employeelname);
                newName.appendChild(name);
                newName.setAttribute("class", "employeeName");

                //Changing the Image Properties
                //Gives generic profile picture if they don't have one
                newPic.setAttribute("class", "profilePic");

                if (info[i].employeehaspic == 1) {
                    newPic.setAttribute("src", "http://sandbox.bittsdevelopment.com/code1/employeepics/"+i+".jpg");
                    newPic.setAttribute("alt", "This is a picture of " + info[i].employeefname +" "+info[i].employeelname);
                }else {
                    newPic.setAttribute("src", "images/profilpic.png");
                    newPic.setAttribute("alt", info[i].employeefname +" "+info[i].employeelname + " doesn't have a profile picture");
                }                
                
                //Changing the Bio property
                var bio = document.createTextNode(info[i].employeebio);
                newBio.appendChild(bio);
                newBio.setAttribute("class", "employeeBio");
                
                //Changing the Roles property
                for (j=0; j < Object.keys(info[i].roles).length; j++){
                    var newRole = document.createElement("span");
                    var role = document.createTextNode(info[i].roles[j].rolename);
                    newRole.appendChild(role);
                    newRole.setAttribute("style", "background:" + info[i].roles[j].rolecolor);
                    newRoleDiv.appendChild(newRole);
                }
                newRoleDiv.setAttribute("class", "roleDiv");

                //Applending all changes to the HTML div
                newEmployee.appendChild(newPic);
                newEmployee.appendChild(newName);
                newEmployee.appendChild(newBio);
                newEmployee.appendChild(newRoleDiv);
                employeeDiv.appendChild(newEmployee);
            }
            //employeeDiv.innerHTML = employeeInfo;
        })
        .catch(function(error){
            employeeDiv.innerHTML = "No data found";
            console.log(error);
        });

   /* this.fetch(employeeRoles)
        .then((resp)=>resp.json())
        .then(function(roles){
            console.log(roles);
            //employeeDiv.innerHTML = employeeInfo;
        })
        .catch(function(error){
            employeeDiv.innerHTML = "No data found";
            console.log(error);
        });*/

}