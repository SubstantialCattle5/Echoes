import fs from 'fs';
import path from 'path';
interface PackageData {
	name: string;
	version: string;
	dependencies: Record<string, string>;
	devDependencies: Record<string, string>;
	frameWork: string;
	path: string | null;
}

export const readPackageJson = (): PackageData => {
	try {
		const data = fs.readFileSync('./package.json', 'utf-8');
		const packageJson = JSON.parse(data);
		const packagesToCheck = [/^next($|\/)/, /^remix($|\/)/, /^gatsby($|\/)/];
		if (!packageJson.dependencies) {
			throw new Error('No dependencies found');
		}
		let frameWork = '';
		const framework = packagesToCheck.find(packageRegex =>
			Object.keys(packageJson.dependencies).some(dependency =>
				packageRegex.test(dependency) ? (frameWork = dependency) : null,
			),
		);

		if (!framework) {
			frameWork = 'react';
		}

		return {
			name: packageJson.name,
			version: packageJson.version,
			dependencies: packageJson.dependencies,
			devDependencies: packageJson.devDependencies,
			frameWork: frameWork,
			path: findComponentsDirectory() || null,
		};
	} catch {
		throw new Error('Could not read package.json');
	}
};

export const findComponentsDirectory = (): string | null => {
	const possiblePaths = [
		path.join(process.cwd(), 'components'),
		path.join(process.cwd(), 'src', 'components'),
		path.join(process.cwd(), 'app', 'components'),
		path.join(process.cwd(), 'source', 'components'),
	];
	for (const possiblePath of possiblePaths) {
		if (
			fs.existsSync(possiblePath) &&
			fs.lstatSync(possiblePath).isDirectory()
		) {
			return possiblePath;
		}
	}
	return null;
};

