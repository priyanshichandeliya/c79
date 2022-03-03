name_of_the_student_array = [];

function submit()
{
    var name_1 = docunment.getElementById("name_of_the_student_1").value;
    var name_2 = docunment.getElementById("name_of_the_student_2").value;
    var name_3 = docunment.getElementById("name_of_the_student_3").value; 
    var name_4 = docunment.getElementById("name_of_the_student_4").value;

    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
     name_of_the_student_array.push(name4);

     console.log(name_of_the_student_array);


     document.getElementById("display_name").innerHTML = name_of_the_student_array;
     document.getElementById("sumbit_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block"; 
}
 
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
}