
(function(){
    var winObj = new Window("dialog","sample",[100,50,450,300]);
    winObj.p = winObj.add("progressbar",[20,20,250,130],0,100,"progress");
    winObj.btn = winObj.add("button",[130,200,325,200+25], "OK!", { name:"ok"});
    winObj.center();
    
    
    winObj.btn.onClick = function(){
        for(var i=0;i<200;i++){
            activeDocument.artLayers.add();
            winObj.p.value = i/2;
            winObj.update();
        }
        winObj.close(); 
    }
    winObj.show();
})();
