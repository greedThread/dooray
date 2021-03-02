## dooray의 간단한 nodejs 모듈입니다.

### 기능 
* 기본 dooray incoming 서비스 url을 통한 봇 메시지 

```javascript
const dooray = require("dooray");

let messageManager  = new dooray();
    // URL 설정 후 메시지 발송
    messageManager.send("{input your dooray service url}",
                        "{input your message}");
    
    // 봇이름 봇 이미지옵션으로 추가 
    messageManager.send("{input your dooray service url}", 
                        "{input your message}", 
                        "{bot Name<Optional>}", 
                        "{bot image<Optional>}",
                        "{attachments<Optional>}");

    // URL 설정 후 메시지 발송, callback  
    messageManager.sendCallback("{input your dooray service url}", "{input your message}", function (err) {
        if(err) {
            console.log("send fail");
        }
        else {
            console.log("send success");
        }
    });

    // 봇이름 봇 이미지옵션으로 추가, callback 
    messageManager.sendCallback("{input your dooray service url}", "{input your message}",
                                // Array <Optional>
                                ["{bot Name<Optional>}", "{bot image<Optional>}", "{attachments<Optional>}"],  function (err) {
       if(err) {
           console.log("send fail");
       }     
       else {
           console.log("send success");
       }
    });
    
```

#### Dooray! incoming-hoot guide(official) : <https://docs.toast.com/ko/Dooray/Messenger/ko/incoming-hook-guide/>
