function LayoutXMLParser (text) {
	var pos = 0;
	var ast = {};

	var cur = ast;

    sequence(["xml", "fuck", "shit"]);

    return ast;


	//function parseLayout() {
	//	sequence([
	//			"xml", "fuck", "shit"
	//		]);
	//}

    function sequence(ts) {
    	if (ts.length === 0) return;
    	var t = ts[0];
    	ts = ts.slice(1, ts.length);
    	buildBody(t, function(t, s) {
            if (s === undefined) {
                cur[t] = {};
                cur = cur[t];
                sequence(ts);
            } else {
                cur[t] = s;
            }
    	});
    }

    function getString() {
        var s = "";
        while(text.charAt(pos) != '<') {
            s += text.charAt(pos++);
        }
        return s;
    }

	function openTag(tag) {
		parseChar('<');
		parseString(tag);
		parseChar('>');
	}

    function closeTag(tag) {
        parseString("</");
        parseString(tag);
        parseChar('>');
    }

    function buildBody(tag, bp) {
        openTag(tag);
        if (text.charAt(pos) == '<') {
            bp(tag);
        } else {
            bp(tag, getString());
        }
        closeTag(tag);
    }


	function parseString(s) {
		var _pos;
		for (_pos = 0; _pos < s.length; _pos++) {
			parseChar(s.charAt(_pos));
		}
        //if (typeof p === 'function') p();
	}

	function parseChar(c) {
		if (text.charAt(pos) === c) {
			pos++;
		} else {
			throw "unexpected char: \'" 
					+ text.charAt(pos)
					+ "\' at pos: " + pos
					+ " expected: " + c;
		}
        //if (typeof p === 'function') p();
	}

	function reset() {
		pos = 0;
	}

}

var Thenable = (function() {
    function Thenable(v) {
        this.v = v;
    }

    Thenable.prototype.then = function(f) {
        this.v = f(this.v);
        return this;
    };


    return Thenable;
})();

var Parser = (function() {
    function Parser(text, treatment) {
        this.text = text;
        this.pos = 0;
        this.parse = treatment;
    }

    Parser.prototype.OR = function (p_) {

    };


    return Parser;
})();


module.exports.LayoutXMLParser = LayoutXMLParser;
module.exports.Thenable = Thenable;

