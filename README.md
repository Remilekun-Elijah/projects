# MUST READ
THIS IS COMPRISE OF IMPORTANT AND UNIMPORTANT FILES
SO CONTACT ME BEFORE MODIFYING OR PUSHING

### THE TEMPLATES FOLDER FILES SHOULD BE CLONED FOR USE
NOT FOR YOU TO MODIFY AS YOUR FILE OR ANYBODIES FILE
PLEASE KINDLY ADHERE TO THAT RULE

### YOU CAN CLICK 'SAVE AS' AFTER EDITING IT IN UR FAVOURITE TEXT EDITOR
 SO THAT U CAN HAVE UR OWN CLONED COPY OF IT.

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
    
	<title> Vanilla To-Do App</title>
    
    <script src="task.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="task.css">
    
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="../Libraries/font-awesome-4.5.0.min.css">
    
    
</head>

<body>
    <main>
        <form action="" method="">
            <div class="head">
            <h1> Task Saver App</h1>
            <label><i class="fa fa-plus"></i>
                <input type="text" id="task-input" placeholder="New Task"/>
            </label>
                <div id="err"></div>
            
            <button type="submit" id="add-button"> ADD TASK</button>
            </div>
        </form>
            <hr id="hr"/>
            <div class="task-session">
                <h2>Task(s)</h2>
                <label for"search-input"><i class="fa fa-search"></i><input type="text" placeholder='Search Task' id="search-input"/></label>
                <div id="div"></div>
                <ol></ol>
                
            </div>
        
        <a id="a"><button id="del-all">Delete All</button></a>
    </main>
    <script>
        var main = document.querySelector("main");
    var body = document.querySelector("body");
    body.insertBefore(sideBar, main);
                
            // sidebar toggler
            sideBar.className = "toggle-in";
        var toggle = toggler => {
             main = document.querySelector("main");
            toggler = sideBar;
            if(toggler.className == "toggle-in"){
                toggler.className = "toggle-out";
//                console.log("toggle-out");
                btn.className = "fa fa-arrow-left";
                main.className = "change";
            }
            else{
                var main = document.querySelector("main");
                toggler.className = "toggle-in";
                main.className = "dont-change";
                btn.className = "fa fa-arrow-right";
//                console.log("toggle-in");

            }
        };

        btn.addEventListener("click", toggle);
        
    </script>
</body>
</html>
