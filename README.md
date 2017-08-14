# GPX file loader

```javascript
import GPXLoader from 'gpx-loader'

GPXLoader.read(document.getElementById('file').files[0]).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
```
