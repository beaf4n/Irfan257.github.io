eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'X b=["\\1L\\1n\\F","\\e\\f","\\l\\d\\i","\\j\\d\\a\\n\\x\\r\\1o\\a\\n\\a\\h\\j","\\G\\d\\a","\\l\\d\\i\\Y\\u\\g\\n\\j","\\o\\u\\l","\\1o\\a\\l\\e","\\y\\e\\a\\f\\l","\\y\\u\\n\\d","\\Z\\a\\o\\a\\h","\\j\\a\\n\\a\\z\\a\\f","\\h\\a\\k\\a\\f\\c\\j\\e\\a\\f\\l","\\h\\a\\k\\a\\f\\c\\h\\a\\o\\a\\h","\\h\\a\\k\\a\\f","\\i\\d\\k\\j","\\l\\d\\i\\1p\\o\\d\\h\\d\\f\\i\\1q\\C\\1r\\m","\\1M\\i\\u\\h\\A\\u\\o","\\1N\\g\\d\\n\\C\\y\\d\\o\\d\\x\\i\\u\\n","\\e\\f\\f\\d\\n\\Y\\1s\\Z\\F","\\y\\d\\h\\a\\f\\l\\a\\i\\c","\\c\\1t\\e\\1O\\1P\\c\\c\\x\\o\\a\\j\\j\\1Q\\1u\\H\\a\\j\\c\\H\\a\\O\\r\\d\\a\\n\\i\\c\\i\\d\\1a\\i\\O\\m\\a\\f\\l\\d\\n\\c\\a\\f\\e\\h\\a\\i\\d\\E\\E\\a\\f\\e\\h\\a\\i\\d\\m\\c\\a\\f\\e\\h\\a\\i\\d\\E\\E\\r\\d\\a\\n\\i\\1q\\d\\a\\i\\c\\a\\f\\e\\h\\a\\i\\d\\E\\E\\n\\d\\z\\d\\a\\i\\O\\1R\\1u\\1v\\1t\\1S\\e\\1v","\\m\\O\\f\\u\\f\\d","\\a\\m\\m","\\x\\o\\a\\j\\j\\F\\e\\j\\i","\\n\\d\\h\\u\\1w\\d","\\x\\o\\e\\x\\k","\\m\\e\\j\\h\\e\\j\\j","\\i\\e\\h\\d\\n","\\I\\e\\j\\h\\e\\j\\j\\1n\\d\\a\\j\\u\\f","\\e\\j\\1b\\u\\f\\H\\e\\n\\h\\d\\m","\\i\\r\\d\\f","\\1s\\r\\a\\f\\k\\c\\g\\c\\g\\m\\a\\r\\c\\A\\g\\k\\a\\c\\1T\\d\\A\\c\\e\\f\\e\\e\\e\\e\\D\\c\\j\\d\\d\\c\\g","\\H\\e\\n\\d","\\1x\\k\\d\\c\\G\\d\\d\\d","\\1U\\a\\f\\i\\e\\c\\a\\k\\g\\c\\A\\d\\o\\e\\e\\f","\\j\\g\\x\\x\\d\\j\\j","\\k\\a\\h\\g\\c\\h\\a\\g\\c\\m\\e\\A\\d\\o\\e\\e\\f\\c\\a\\z\\a\\a\\J","\\I\\e\\c\\y\\y\\c\\C\\a\\c\\k\\a\\h\\g\\c\\h\\a\\g\\c\\a\\z\\a\\c\\i\\n\\j\\c\\k\\e\\n\\e\\h\\c\\k\\d\\c\\a\\k\\g","\\i\\d\\1a\\i","\\d\\1a\\1c\\c\\Z\\1b\\I\\D\\c\\K\\1V\\1b\\D\\c\\a\\i\\a\\g\\c\\a\\z\\a\\c\\k\\d\\k\\c\\l\\e\\i\\g\\g","\\1r\\j\\e\\c\\I\\g\\o\\g\\g\\g\\g\\g","\\e\\j\\I\\d\\f\\e\\d\\m","\\1W\\a\\r\\D\\c\\u\\k\\d\\m\\d\\r\\c\\k\\o\\c\\l\\m","\\1x\\e\\C\\a\\a","\\K\\a\\h\\g\\c\\h\\a\\g\\c\\a\\k\\g\\c\\A\\d\\o\\e\\e\\f\\c\\j\\d\\j\\g\\a\\i\\g\\c\\l\\a\\a\\a\\J","\\1d\\m\\a\\a","\\G\\a\\c\\a\\m\\a\\a","\\K\\a\\h\\g\\c\\y\\d\\m\\e\\r\\J\\c\\G\\a\\c\\a\\m\\c\\i\\d\\h\\d\\f\\J\\c\\a\\m\\a\\c\\a\\k\\g\\c\\i\\d\\f\\a\\f\\l\\l\\c\\1c\\1y","\\1d\\m\\a\\c\\a\\k\\g\\c\\k\\u\\k\\c\\C\\a\\f\\l\\c\\f\\d\\h\\d\\f\\e\\f\\c\\k\\a\\h\\g","\\1z\\a\\f\\l\\a\\f\\c\\o\\g\\z\\a\\c\\h\\a\\k\\a\\f\\f\\f","","\\d\\n\\n\\u\\n","\\1z\\a\\f\\l\\a\\f\\c\\A\\d\\l\\a\\m\\a\\f\\l\\c\\h\\g\\o\\g\\g\\g","\\y\\d\\h\\a\\f\\l\\a\\i\\c\\C\\a\\r\\r\\r\\r\\r\\c\\1c\\1y","\\c","\\F\\a\\l\\e\\c\\A\\a\\f\\C\\a\\k\\c\\H\\e\\k\\e\\n\\a\\f\\D\\c\\x\\a\\z\\d\\D\\c\\z\\g\\j\\e\\f\\l","\\1d\\k\\g\\c\\i\\a\\g\\c\\k\\u\\c\\k\\a\\h\\g\\c\\o\\a\\l\\e\\c\\j\\d\\m\\e\\r","\\K\\a\\o\\a\\g\\c\\A\\d\\o\\g\\h\\c\\1X\\a\\f\\l\\a\\f\\c\\o\\g\\z\\a\\c\\h\\a\\k\\a\\f\\c\\C\\a\\a","\\Y\\a\\e\\c\\G\\d\\d\\d\\1Y","\\y\\d\\o\\a\\h\\a\\i\\c","\\D\\c\\K\\a\\h\\g\\c\\g\\m\\a\\r\\c","\\J","\\a\\m\\m\\1p\\1w\\d\\f\\i\\F\\e\\j\\i\\d\\f\\d\\n"];1A 1Z,2a;P 1B=Q[b[0]];P 1e=1C 2b(1B);1A R;v(1e[b[3]][b[2]](b[1])!=2c){R=1e[b[3]][b[2]](b[1])}L{R=b[4]};S 1f(){X 1D=1C 2d();X w=1D[b[5]]();2e[b[6]](w);v(w>=5&&w<=10){B b[7]}L{v(w>=10&&w<=15){B b[8]}L{v(w>=15&&w<=18){B b[9]}L{v(w>=18&&w<=24){B b[10]}}}}}S 1E(){2f(1f()){T b[7]:B b[11];M;T b[8]:B b[12];M;T b[10]:B b[13];M;T b[9]:B b[14];M;2g:M}}S 1g(){P 1h=Q[b[16]](b[15]);P 1F=Q[b[18]](b[17]);1h[b[19]]=`${b[20]}${R}${b[21]}`;1F[b[24]][b[23]](b[22]);1h[b[24]][b[25]](b[22])}Q[b[18]](b[17])[b[2h]](b[26],S(){q[b[s]]({N:b[2i],U:`${b[2j]}${1f()}${b[2k]}${1E()}${b[2l]}`,1i:1j,1k:V,1l:W})[b[t]]((p)=>{v(p[b[27]]===q[b[29]][b[28]]){q[b[s]](b[2m])[b[t]]((p)=>{q[b[s]]({N:b[1G],U:`${b[2n]}`,1i:1j,1k:V,1l:W})[b[t]]((p)=>{v(p[b[27]]===q[b[29]][b[28]]){q[b[s]]({N:b[1G],U:`${b[2o]}`,1i:1j,1k:V,1l:W})[b[t]]((p)=>{v(p[b[27]]===q[b[29]][b[28]]){q[b[s]](b[2p],b[1m],b[1H])[b[t]]((p)=>{q[b[s]](b[2q],b[1m],b[1I])[b[t]]((p)=>{q[b[s]](b[2r],b[1m],b[1I])[b[t]]((p)=>{q[b[s]](b[2s])[b[t]]((p)=>{q[b[s]](b[2t])[b[t]]((p)=>{q[b[s]]({N:b[2u],2v:b[2w],2x:V,2y:`${b[2z]}`,2A:`${b[2B]}`})[b[t]]((p)=>{v(p[b[2C]]){q[b[s]]({N:b[2D],U:`${b[2E]}`,2F:b[2G],2H:b[2I],2J:W,2K:(1J)=>{v(!1J){B b[2L]}}})[b[t]]((p)=>{q[b[s]](b[2M],b[2N],b[1H])[b[t]]((p)=>{q[b[s]](b[1K])[b[t]]((p)=>{1g()})})})}L{v(p[b[2O]]){q[b[s]](b[2P])[b[t]]((p)=>{q[b[s]](b[1K])[b[t]]((p)=>{1g()})})}}})})})})})})}})}})})}})})',
    62,
    176,
    "||||||||||x61|_0xdb33|x20|x65|x69|x6E|x75|x6D|x74|x73|x6B|x67|x64|x72|x6C|_0x56cexd|Swal|x68|33|31|x6F|if|_0x56cex8|x63|x53|x70|x62|return|x79|x2C|x5F|x4C|x47|x66|x44|x3F|x4B|else|break|title|x2D|const|document|doi|function|case|html|true|false|var|x48|x4D|||||||||||x78|x43|x3A|x41|url|time|selesai|_0x56cexb|timer|3000|timerProgressBar|showConfirmButton|51|x52|x50|x45|x42|x49|x54|x3C|x22|x3E|x76|x4F|x29|x4A|let|url_string|new|_0x56cex7|makan|_0x56cexc|55|36|52|_0x56cexe|32|x55|x2E|x71|x0D|x0A|x3D|x33|x2F|x77|x4E|x46|x59|x6A|x21|nama|||||||||||val|URL|null|Date|console|switch|default|63|59|60|61|62|58|57|56|54|53|50|49|48|44|text|45|showDenyButton|confirmButtonText|46|denyButtonText|47|30|37|38|input|39|inputPlaceholder|40|showCancelButton|inputValidator|41|34|35|42|43".split(
      "|"
    ),
    0,
    {}
  )
);
