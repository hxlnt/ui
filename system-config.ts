/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'app': 'app',
  'main': 'app/main.js',
  '@angular': 'node_modules/@angular',
  'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
  'rxjs': 'node_modules/rxjs',
  'socket.io-client': './node_modules/socket.io-client/socket.io.js',
  '@angular2-material': './node_modules/@angular2-material'
};

// packages tells the System loader how to load when no filename and/or no
// extension
const packages: any = {
  'app': { main: 'main.js', defaultExtension: 'js' },
  'rxjs': { defaultExtension: 'js' },
  'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
  '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' },
  '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
  '@angular2-material/tabs': { format: 'cjs', defaultExtension: 'js', main: 'tabs.js' }
};

const barrels: any = [
  // App specific barrels.
  'app/routing',
  'app/shared',
  // 'app/models',
];

barrels.forEach((barrelName: string) => {
  packages[barrelName] = { main: 'index' };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/

const ngPackageNames: string[] = [
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
  // 'router-deprecated',
  'upgrade',
];

// Individual files (~300 requests):
function packIndex(pkgName: string) {
  packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
}

// Bundled (~40 requests):
function packUmd(pkgName: string) {
  packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
}

declare var System: any;

// Most environments should use UMD; some (Karma) need the individual index
// files
var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

// Add package entries for angular packages
ngPackageNames.forEach(setPackageConfig);

var config = { map: map, packages: packages };

System.config(config);
