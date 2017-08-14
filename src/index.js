import toGeoJSON from 'togeojson';
import { DOMParser } from 'xmldom';

const loader = {
    reader: new FileReader(),
    parser: new DOMParser(),
    read (file) {
        this.reader.readAsText(file);
        return new Promise((resolve, reject) => {
            this.reader.onload = (e) => {
                let content = e.target.result;
                content = this.parser.parseFromString(content, 'application/xml');
                content = toGeoJSON.gpx(content);
                resolve(content);
            };
            this.reader.onerror = (e) => {
                reject(e);
            };
        });
    },

}

export default loader;
