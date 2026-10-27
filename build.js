import {mkdir,copyFile,readFile} from 'node:fs/promises';
import {validate} from './model.js';
validate(JSON.parse(await readFile('competitor_data.json','utf8')));
await mkdir('dist',{recursive:true});
for(const name of ['index.html','styles.css','app.js','model.js','competitor_data.json'])await copyFile(name,`dist/${name}`);
console.log('Production build complete: dist/ · all assets use repository-relative URLs.');
