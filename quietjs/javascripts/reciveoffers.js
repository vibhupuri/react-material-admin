var TextReceiver = (function() {
    var receivers;

    function flutterwebview(msg){
      //  globalThis.msg=msg;

        globalThis.msg="Sonos Pay";
        globalThis.flutter_inappwebview
        .callHandler('handlerFooWithArgs', "globalThis.msg");
                    globalThis.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
                        alert("insidelistener")
                    globalThis.flutter_inappwebview
                      .callHandler('handlerFooWithArgs', "globalThis.msg");
                });
    }

    function onReceive(recvPayload, recvObj) {
        console.log("@recvObj.content="+recvObj.content);

        var arrReceived = recvObj.content;
        console.log("@recvPayload="+recvPayload);
        recvObj.content = recvPayload;
        
        var data = Quiet.ab2str(recvObj.content);
        var d = data.split(",");

        confirm("Press OK To Allow Connection");
        var rcvd = Quiet.ab2str(recvObj.content);
        recvObj.target.innerHTML  += "<div> Product Name: "+d[0]+", Price:"+d[1]+" <button onclick='UPIPay.onUPIPay()'>Pay</button><hr><br></div>";
        
        recvObj.successes++;
        var total = recvObj.failures + recvObj.successes
        var ratio = recvObj.failures/total * 100;
        recvObj.warningbox.textContent = "You may need to move the transmitter closer to the receiver and set the volume to 50%. Packet Loss: " + recvObj.failures + "/" + total + " (" + ratio.toFixed(0) + "%)";
        flutterwebview("hello");//
    };
   

    function onReceiverCreateFail(reason, recvObj) {
        console.log("failed to create quiet receiver: " + reason);
        recvObj.warningbox.classList.remove("hidden");
        recvObj.warningbox.textContent =  reason;
    };

    function onReceiveFail(num_fails, recvObj) {
        recvObj.warningbox.classList.remove("hidden");
        recvObj.failures = num_fails;
        var total = recvObj.failures + recvObj.successes
        var ratio = recvObj.failures/total * 100;
        recvObj.warningbox.textContent = "You may need to move the transmitter closer to the receiver and set the volume to 50%. Packet Loss: " + recvObj.failures + "/" + total + " (" + ratio.toFixed(0) + "%)";
    };

    function onClick(e, recvObj) {
        e.target.disabled = true;

        var originalText = e.target.innerText;
        e.target.innerText = e.target.getAttribute('data-quiet-receiving-text');
        e.target.setAttribute('data-quiet-receiving-text', originalText);

        var receiverOnReceive = function(payload) { onReceive(payload, recvObj); };
        var receiverOnReceiverCreateFail = function(reason) { onReceiverCreateFail(reason, recvObj); };
        var receiverOnReceiveFail = function(num_fails) { onReceiveFail(num_fails, recvObj); };
        Quiet.receiver({profile: recvObj.profilename,
            onReceive: receiverOnReceive,
            onCreateFail: receiverOnReceiverCreateFail,
            onReceiveFail: receiverOnReceiveFail
        });

        recvObj.target.classList.remove('hidden');
    }

    function setupReceiver(receiver) {
        var recvObj = {
            profilename: receiver.getAttribute('data-quiet-profile-name'),
            btn: receiver.querySelector('[data-quiet-receive-text-button]'),
            target: receiver.querySelector('[data-quiet-receive-text-target]'),
            warningbox: receiver.querySelector('[data-quiet-receive-text-warning]'),
            successes: 0,
            failures: 0,
            content: new ArrayBuffer(0)
        };
        var onBtnClick = function(e) { return onClick(e, recvObj); };
        recvObj.btn.addEventListener('click', onBtnClick, false);
    };

    function onQuietReady() {
        for (var i = 0; i < receivers.length; i++) {
            setupReceiver(receivers[i]);
        }
    };

    function onQuietFail(reason) {
        console.log("quiet failed to initialize: " + reason);
        var warningbox = document.querySelector('[data-quiet-receive-text-warning]');
        warningbox.classList.remove("hidden");
        warningbox.textContent = "Sorry, it looks like there was a problem with this example (" + reason + ")";
    };

    function onDOMLoad() {
        receivers = document.querySelectorAll('[data-quiet-receive-text]');
        Quiet.addReadyCallback(onQuietReady, onQuietFail);
    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();
