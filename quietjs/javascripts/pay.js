var UPIPay = (function() {

    function flutterwebview(msg){
      //  globalThis.msg=msg;

      alert("hrlll");

        globalThis.msg="Sonos Pay";
        globalThis.flutter_inappwebview
        .callHandler('handlerFooWithArgs', "globalThis.msg");
                    globalThis.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
                        alert("insidelistener")
                    globalThis.flutter_inappwebview
                      .callHandler('handlerFooWithArgs', "globalThis.msg");
                });
    }

    return{
        onUPIPay: flutterwebview
    };

})();
