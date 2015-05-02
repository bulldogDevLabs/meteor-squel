

// ---------------------------------------------
// Description

Package.describe({
	name: 'elosoman:meteor-mssql',
	version: '0.0.1',
	summary: 'A node.js driver for mssql, extended to Meteor.',
	git: 'https://github.com/elosoman/meteor-mssql',
	documentation: 'README.md'
});


// ---------------------------------------------
// Use

Package.onUse(function(api) {
	api.versionsFrom('1.0.3.1');

	api.add_files('squel.min.js', 'server');
	if (typeof api.export !== 'undefined') { 
		api.export('squel', 'server'); 
	}
});


// ---------------------------------------------
// Tests
Package.onTest(function(api) {
	api.use('tinytest');
	api.use('meteor-squel');

	api.addFiles('meteor-squel-tests.js');
});


Npm.depends({ 'squel': '3.10.0' });

