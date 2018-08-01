<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['is_system_on'] = 'y';
$config['multiple_sites_enabled'] = 'y';
$config['save_tmpl_files'] = 'y';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '4.3.3';
$config['encryption_key'] = 'ccea36e312a3a6855e06b9a7cc7b46af36f921d7';
$config['session_crypt_key'] = '78c49f6c94bf66dd88838a288f79a7fe077f6097';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'shareddb-h.hosting.stackcp.net',
		'database' => 'therudichronicles-333350db',
		'username' => 'therudichronicles-333350db',
		'password' => 'j3m73q2dgw',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);

// EOF