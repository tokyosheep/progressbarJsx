
(function(){ 
    var winObj = new Window("dialog","sample",[100,50,450,300]);
    winObj.p = winObj.add("progressbar",[80,20,80+200,20+15],0,200,"progress");
    winObj.Ok = winObj.add("button",[70,200,70+80,200+25], "OK!");
    winObj.cancel = winObj.add("button",[200,200,200+80,200+25], "Cancel");
    winObj.center();
    
    winObj.cancel.onClick = function(){
        winObj.close(); 
    }
    
    winObj.Ok.onClick = function(){
        
        winObj.active = true;
        for(var i=0;i<200;i++){
            winObj.p.value = i;
            $.sleep(10);  
            winObj.update();
        }
        winObj.close(); 
    }
    winObj.show();
})();
