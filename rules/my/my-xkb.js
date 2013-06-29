( function ( $ ) {
	'use strict';

	var myXkb = {
		id: 'my-xkb',
		name: 'မြန်မာဘာသာ xkb',
		description: 'Myanmar xkb keyboard layout',
		date: '2013-02-12',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['`', '\u1050'],
			['\\~', '\u100e'],
			['1', '\u1041'],
			['\\!', '\u100D'],
			['2', '\u1042'],
			['\\@', '\u1052'],
			['3', '\u1043'],
			['\\#', '\u100B'],
			['4', '\u1044'],
			['\\$', '\u1053'],
			['5', '\u1045'],
			['\\%', '\u1054'],
			['6', '\u1046'],
			['\\^', '\u1055'],
			['7', '\u1047'],
			['\\&', '\u101B'],
			['8', '\u1048'],
			['\\*', '\u002A'],
			['9', '\u1049'],
			['\\(', '('],
			['0', '\u1040'],
			['\\)', ')'],

			['q', '\u1006'],
			['Q', '\u1008'],
			['w', '\u1010'],
			['W', '\u101D'],
			['e', '\u1014'],
			['E', '\u1023'],
			['r', '\u1019'],
			['R', '\u104E'],
			['t', '\u1021'],
			['T', '\u1024'],
			['y', '\u1015'],
			['Y', '\u104C'],
			['u', '\u1000'],
			['U', '\u1025'],
			['i', '\u1004'],
			['I', '\u104D'],
			['o', '\u101E'],
			['O', '\u103F'],
			['p', '\u1005'],
			['P', '\u100F'],
			['\\[', '\u101F'],
			['\\{', '\u1027'],
			['\\]', '\u1029'],
			['\\}', '\u102A'],

			['\\\\', '\u104F'],
			['\\|', '\u1051'],

			['a', '\u1031'],
			['A', '\u1017'],
			['s', '\u103B'],
			['S', '\u103A'],
			['d', '\u102D'],
			['D', '\u102E'],
			['f', '\u103A'],
			['F', '\u1039'],
			['g', '\u102B'],
			['G', '\u103D'],
			['h', '\u1037'],
			['H', '\u1036'],
			['j', '\u103C'],
			['J', '\u1032'],
			['k', '\u102F'],
			['K', '\u1012'],
			['l', '\u1030'],
			['L', '\u1013'],

			[';', '\u1038'],
			[':', '\u1002'],

			['\'', '\''],
			['\"', '"'],

			['z', '\u1016'],
			['Z', '\u1007'],
			['x', '\u1011'],
			['X', '\u100C'],
			['c', '\u1001'],
			['C', '\u1003'],
			['v', '\u101C'],
			['V', '\u1020'],
			['b', '\u1018'],
			['B', '\u101A'],
			['n', '\u100A'],
			['N', '\u1009'],
			['m', '\u102C'],
			['M', '\u1026'],

			[',', ','],
			['\\<', '\u104A'],
			['\\.', '.'],
			['\\>', '\u104B'],
			['/', '/'],
			['\\?', '?']
		],
		patterns_x: [
			['`', '`'],
			['\\~', '~'],
			['1', '1'],
			['\\!', '!'],
			['2', '2'],
			['\\@', '@'],
			['3', '3'],
			['\\#', '#'],
			['4', '4'],
			['\\$', '$'],
			['5', '5'],
			['\\%', '%'],
			['6', '6'],
			['\\^', '^'],
			['7', '7'],
			['\\&', '&'],
			['8', '8'],
			['\\*', '*'],
			['9', '9'],
			['\\(', '('],
			['0', '0'],
			['\\)', ')'],
			['\\-', '-'],
			['\\_', '_'],
			['\\=', '='],
			['\\+', '+'],

			['q', 'q'],
			['Q', 'Q'],
			['w', 'w'],
			['W', 'W'],
			['e', 'e'],
			['E', 'E'],
			['r', 'r'],
			['R', 'R'],
			['t', 't'],
			['T', 'T'],
			['y', 'y'],
			['Y', 'Y'],
			['u', 'u'],
			['U', 'U'],
			['i', 'i'],
			['I', 'I'],
			['o', 'o'],
			['O', 'O'],
			['p', 'p'],
			['P', 'P'],
			['a', 'a'],
			['S', 'S'],
			['s', 's'],
			['S', 'S'],
			['d', 'd'],
			['D', 'D'],
			['f', 'f'],
			['F', 'F'],
			['g', 'g'],
			['G', 'G'],
			['h', 'h'],
			['H', 'H'],
			['j', 'j'],
			['J', 'J'],
			['k', 'k'],
			['K', 'K'],
			['l', 'l'],
			['L', 'L'],
			['z', 'z'],
			['Z', 'Z'],
			['x', 'x'],
			['X', 'X'],
			['c', 'c'],
			['C', 'C'],
			['v', 'v'],
			['V', 'V'],
			['b', 'b'],
			['B', 'B'],
			['n', 'n'],
			['N', 'N'],
			['m', 'm'],
			['M', 'M'],
			[',', ','],
			['\\<', '<'],
			['\\.', '.'],
			['\\>', '>'],
			[';', ';'],
			[':', ':'],
			['\'', '\''],
			['"', '"'],
			['\\[', '['],
			['\\{', '{'],
			['\\]', ']'],
			['\\}', '}'],
			['\\\\', '\\'],
			['\\|', '|']]
	};
	$.ime.register( myXkb );

}( jQuery ) );
