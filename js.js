



var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"),{
    lineNumbers:true,
    mode:"xml",
    theme:"shadowfox",
    autoCloseTags:true,
    extraKeys:{"Ctrl-Space":"autocomplete"}
    });
var cssEditor = CodeMirror.fromTextArea(document.getElementById("css"),{
    lineNumbers:true,
    
    mode:"css",
    theme:"dracula",
    autoCloseBrackets:true,
    extraKeys : {"Ctrl-Space":"autocomplete"},
  /*  matchBrackets: false, // Disable bracket matching
    highlightSelectionMatches: false, // Disable selection matching
    styleActiveLine: false, // Disable active line highlighting
    autoCloseBrackets: true, // Disable auto-closing brackets
    autoCloseTags: false, // Disable auto-closing tags
    matchTags: false // Disable matching tags
*/
    
   
});
var jsEditor = CodeMirror.fromTextArea(document.getElementById("js"),{

    mode:"javascript",
    theme:"dracula",
    lineNumbers:true,
    extraKeys: {"Ctrl-Space":"autocomplete"}

});

function wid(){
    htmlEditor.setSize("35em","0")
    
}
function puls(){
    htmlEditor.setSize("35em","20em")
}


function wid1(){
    cssEditor.setSize("30em","0")
}
function puls1(){
    cssEditor.setSize("30em","20em")
}


function wid2(){
    jsEditor.setSize("30em","0%")
}
function puls2(){
    jsEditor.setSize("30em","20em")
}
  
htmlEditor.setSize("30em","20em");
cssEditor.setSize("30em","20em");
jsEditor.setSize("30em","20em");

var iframe = document.getElementById("output");

function UpdateIframes(){
          var html = htmlEditor.getValue();
          var css = cssEditor.getValue();
          var js = jsEditor.getValue();

          var content = `<style>${css}</style>
                          ${html}
                          <script>${js}</script>
                          `

    var iframes = iframe.contentDocument || iframe.contentWindow.document;
    iframes.open();
    iframes.write(content);
    iframes.close();
}

htmlEditor.on("change",UpdateIframes);
cssEditor.on("change",UpdateIframes);
jsEditor.on("change",UpdateIframes);
