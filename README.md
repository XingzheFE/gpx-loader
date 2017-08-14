# GPX file loader

```javascript
import GPXLoader from 'gpx-loader'

GPXLoader.load(document.getElementById('file').files[0]).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
```
