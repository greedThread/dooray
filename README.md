## dooray의 간단한 nodejs 모듈입니다.

### 기능 
* 기본 dooray incoming 서비스 url을 통한 봇 메시지 

```javascript
const dooray = require("dooray");

let messageManager  = new dooray();
    messageManager.send("{input your dooray service url}", 
                        "{input your message}", 
                        "{bot Name<Optional>}", 
                        "{bot image<Optional>}").then();
```

#### Dooray! incoming-hoot guide(official) : <https://docs.toast.com/ko/Dooray/Messenger/ko/incoming-hook-guide/>
