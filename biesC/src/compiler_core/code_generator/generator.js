// generator.js
import { promises as fs } from 'fs';
import path from 'path';

class Generator {
	generateBasm(code, outputPath = './byte_code/output.basm') {
		const filePath = path.resolve(outputPath);
		const fileContent = code.toString();

		return fs.writeFile(filePath, fileContent, 'utf8')
		.then(() => {
			console.log(`.basm file successfully created at ${filePath}`);
		})
		.catch(error => {
			console.error('Failed to write .basm file:', error);
		});
	}
}

export default Generator;