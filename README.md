<<<<<<< HEAD
jQuery Universal Language Selector
==================================
Universal Language Selector

[![Build Status](https://secure.travis-ci.org/wikimedia/jquery.uls.png)](http://travis-ci.org/wikimedia/jquery.uls)

This is a [Wikimedia Foundation Internationalization team project](https://www.mediawiki.org/wiki/Project_Milkshake).


![Universal Language Selector](https://upload.wikimedia.org/wikipedia/commons/c/cd/ULS-GeoIP.png "Universal Language Selector")

Quick start
-----------

```bash
git clone https://github.com/wikimedia/jquery.uls.git
```

Documentation
-------------

For documentation and examples please visit the [wiki](https://github.com/wikimedia/jquery.uls/wiki/_pages)


How to build and test jQuery ULS
----------------------------------

First, get a copy of the git repo by running:

```shell
git clone git://github.com/wikimedia/jquery.uls.git
```

Make sure you have `grunt` installed by testing:

```shell
grunt -version
```

If not, run:

```shell
npm install
```

To run tests locally, run `grunt test`. This will run the tests in PhantomJS.

You can also run the tests in a browser by navigating to the `test/` directory, but first run `grunt` to install the submodules.

Coding style
-------------

Please follow [jQuery coding guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)

Versioning
----------

For transparency and insight into the release cycle, and to upgrading easier,
we use the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org/.
=======
jQuery.IME
==========================

jQuery.IME is a jQuery based input method editor library supporting more than
155 input methods across more than 50 languages.

These input methods are well tested. Initially the input methods were
contributed by the Wikimedia community. By now many input methods have also
been contributed by Red Hat.

This project is a Wikimedia foundation initiative to provide language technology
tools to  awider audience outside the Wikimedia universe.


Quick start
----------

```bash
git clone https://github.com/wikimedia/jquery.ime.git
```

To add input method support to the editable fields of a web page:

```javascript
$( 'textarea' ).ime();
```

jquery.ime provides a jquery plugin function `$.fn.ime()` to add input method
support for any editable elements in a page.


Example
-------
See [an example](http://thottingal.in/projects/js/jquery.ime/examples/) page where jquery.ime in action.

To try the example locally, after checking out the code, start a local webserver
to serve the files. This is very easy.

If you have python installed, run
```bash
python -m SimpleHTTPServer
```
or, In case you have python3
```bash
python3 -m http.server
```

Alternatively you can use tools like webfsd. If you know how to use advanced
web servers like apache or nginx, you already know how to put the code in a
webserver.


For Developers
--------------

Read [rules/README](https://github.com/wikimedia/jquery.ime/tree/master/rules) to learn how to write an input method for a language.

Read [test/README.md](https://github.com/wikimedia/jquery.ime/tree/master/test) to learn how to write and run tests for an input method.

Read the technical specification of the project from [wiki](https://github.com/wikimedia/jquery.ime/wiki/Technical-Specification).

Do watch the code walkthrough by Chris Forno: http://www.youtube.com/watch?v=LPec-KIBVeI

License
-------
This project is dual licensed with GPLv2+ and MIT license. See the license files
in the source code for more details.
>>>>>>> upstream/master
