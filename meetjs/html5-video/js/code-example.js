function initCodeExamples() {
    var $sources = $(document).find(".code-example");

    $sources.each(function(idx, source) {
        var $source = $(source);
        var sourceMarkup = $source.html();

        if (!sourceMarkup) {
            return;
        }
        var lines = sourceMarkup.split("\n");
        var linesNotManipulated = []; // This will be rewritten in code for rendering
        var firstLine = lines[1];

        // Check indentation length.
        // Before add a char to prevent $.trim() for removing trailing whitespace
        firstLine += '#';
        var whitespaceCount = ($.trim(firstLine).length - firstLine.length) * -1;

        var whitespaceReplace = '';
        for (var i = 0; i < whitespaceCount; i++) {
            whitespaceReplace += ' ';
        }

        $.each(lines, function(i, line) {
            linesNotManipulated[i] = $.trim(line);
            lines[i] = line.replace(whitespaceReplace, '');
        });

        // $source.html(linesNotManipulated.join(''));

        sourceMarkup = lines.join("\n").replace(/</g, '&lt;');
        $sourceMarkup = $( '<pre class="code"><code>' + sourceMarkup + '</code></pre>' );

        $source.after( $sourceMarkup );
        $source.before( createShowLink( $source, $sourceMarkup ) );
    } );
}

function createShowLink( $source, $code ) {
    var showText = 'Show code',
    hideText = 'Hide code';

    var $link =  $( '<a class="show-code" href="#"></a>' );

    $link.text(showText).click( function ( event ) {
            var $this = $( this );
            // var $code = $this.find( "~ .code" )

            if ( $code.is( ":visible") ) {
                $this.text(showText);
                $code.hide();
                $source.show();
            }
            else {
                $this.text(hideText);
                $source.hide();
                $code.show();
            }

            event.preventDefault();
        }
    );
    $code.hide();

    return $link;
}



// if (!String.prototype.trim) {
//   String.prototype.trim = function () {
//     return this.replace(/^\s+|\s+$/g, '');
//   };
// }

// function initCodeExamples() {

//     var sources = document.querySelectorAll( ".code-example" );

//     for ( var i = 0, len = sources.length; i < len; i++ ) {
//         var source = sources[ i ];
//         var sourceMarkup = source.innerHTML;

//         if ( sourceMarkup ) {
//             var lines = sourceMarkup.split("\n");
//             var linesNotManipulated = []; // This will be rewritten in code for rendering
//             var firstLine = lines[ 1 ];

//             // Check indentation length.
//             // Before add a char to prevent $.trim() for removing trailing whitespace
//             firstLine += '#';
//             var whitespaceCount = ( firstLine.trim().length - firstLine.length ) * -1;

//             var whitespaceReplace = '';
//             for (var i = 0; i < whitespaceCount; i++) {
//                 whitespaceReplace += ' ';
//             }

//             lines.forEach( function( line, i ) {
//                 linesNotManipulated[ i ] =line.trim();
//                 lines[i] = line.replace(whitespaceReplace, '');
//             });

//             source.innerHTML = linesNotManipulated.join('');

//             sourceMarkup = lines.join("\n").replace(/</g,'&lt;');
//             sourceMarkup = '<pre class="code"><code>' + sourceMarkup + '</code></pre>';

//             var frag = document.createDocumentFragment();
//             frag.innerHTML = sourceMarkup;

//             source.parentNode.insertBefore( frag,  source.nextSibling );
//         }
//     }


//     /*
//      $source.after(createShowLink());

//      function createShowLink() {
//      var showText = 'Show code example',
//      hideText = 'Hide code example';

//      return $( '<a class="component-show-code" href="#"></a>' )
//      .text(showText)
//      .toggle(function( event ) {
//      var $this = $( this );
//      $this.find( "~ .component-code" ).show( 'fast' );
//      $this.text(hideText);

//      event.preventDefault();
//      }, function( event ) {
//      var $this = $( this );
//      $this.find( "~ .component-code" ).hide( 'fast' );
//      $this.text(showText);

//      event.preventDefault();
//      });
//      }
//      */
// }