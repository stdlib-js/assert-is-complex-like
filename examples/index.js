/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable object-curly-newline, object-property-newline */

'use strict';

var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var isComplexLike = require( './../lib' );

console.log( isComplexLike( new Complex64( 2.0, 2.0 ) ) );
// => true

console.log( isComplexLike( new Complex128( 3.0, 1.0 ) ) );
// => true

console.log( isComplexLike( { 're': 1.0, 'im': -1.0 } ) );
// => true

console.log( isComplexLike( {} ) );
// => false

console.log( isComplexLike( null ) );
// => false
