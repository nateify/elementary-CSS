# Patterns matching CSS files that should be minified. Files with a .min.css
# suffix will be ignored.
CSS_FILES = $(filter-out %.min.css,$(wildcard \
    css/*.css \
))

# Patterns matching JS files that should be minified. Files with a .min.js
# suffix will be ignored.
JS_FILES = $(filter-out %.min.js,$(wildcard \
    js/*.js \
))

# Command to run to execute the YUI Compressor.
YUI_COMPRESSOR = java -jar yuicompressor-2.4.8.jar

# Flags to pass to the YUI Compressor for both CSS and JS.
YUI_COMPRESSOR_FLAGS = --charset utf-8 --verbose

CSS_MINIFIED = $(CSS_FILES:.css=.min.css)
JS_MINIFIED = $(JS_FILES:.js=.min.js)

# target: minify - Minifies CSS and JS.
minify: minify-css minify-js

# target: minify-css - Minifies CSS.
minify-css: $(CSS_FILES) $(CSS_MINIFIED)

# target: minify-js - Minifies JS.
minify-js: $(JS_FILES) $(JS_MINIFIED)

%.min.css: %.css
    @echo '==> Minifying $<'
    $(YUI_COMPRESSOR) $(YUI_COMPRESSOR_FLAGS) --type css $< >$@
    @echo

%.min.js: %.js
    @echo '==> Minifying $<'
    $(YUI_COMPRESSOR) $(YUI_COMPRESSOR_FLAGS) --type js $< >$@
    @echo

# target: clean - Removes minified CSS and JS files.
clean:
    rm -f $(CSS_MINIFIED) $(JS_MINIFIED)

# target: help - Displays help.
help:
    @egrep "^# target:" Makefile