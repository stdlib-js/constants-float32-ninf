<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# FLOAT32_NINF

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Single-precision floating-point][ieee754] negative infinity.



<section class="usage">

## Usage

To use in Observable,

```javascript
FLOAT32_NINF = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var FLOAT32_NINF = require( 'path/to/vendor/umd/constants-float32-ninf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.FLOAT32_NINF;
})();
</script>
```

#### FLOAT32_NINF

[Single-precision floating-point][ieee754] negative infinity.

```javascript
// FLOAT32_NINF is implicitly promoted to a double-precision floating-point number...
var bool = ( FLOAT32_NINF === -Infinity );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( FLOAT32_NINF );
// => -Infinity

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants-float32/pinf`][@stdlib/constants/float32/pinf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point positive infinity.</span>
-   <span class="package-name">[`@stdlib/constants-float64/ninf`][@stdlib/constants/float64/ninf]</span><span class="delimiter">: </span><span class="description">double-precision floating-point negative infinity.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float32-ninf.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float32-ninf

[test-image]: https://github.com/stdlib-js/constants-float32-ninf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/constants-float32-ninf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float32-ninf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float32-ninf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float32-ninf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float32-ninf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-float32-ninf/tree/deno
[umd-url]: https://github.com/stdlib-js/constants-float32-ninf/tree/umd
[esm-url]: https://github.com/stdlib-js/constants-float32-ninf/tree/esm
[branches-url]: https://github.com/stdlib-js/constants-float32-ninf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float32-ninf/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/constants/float32/pinf]: https://github.com/stdlib-js/constants-float32-pinf/tree/umd

[@stdlib/constants/float64/ninf]: https://github.com/stdlib-js/constants-float64-ninf/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
