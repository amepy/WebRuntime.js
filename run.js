var error = "Error!";

function c_run() {
    document.getElementById("console").innerHTML = "";
    let c = c_editor.getValue().replaceAll("console","c_put");
    return Function("try{"+c+"}catch(error){c_txt(error,'e')}")();
}

var c_put = {
    log: function(msg) {
        c_txt(msg, "");
    },
    error: function(msg) {
        c_txt(msg, "e")
    },
    debug: function(msg) {
        this.log(msg);
    },
    info: function(msg) {
        this.log(msg);
    },
    clear: function() {
        document.getElementById("console").innerHTML = "";
    }
}

function c_txt(msg, e) {
    console.log("MSG: "+msg)
    document.getElementById("console").innerHTML += `<div id="c_text" class="${e}">${msg}</div><br/>`+"\n";
}