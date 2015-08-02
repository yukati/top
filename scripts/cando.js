$("form.form1").submit(function() {
//エラーの初期化
$("p.error").remove();
$("table tr td").removeClass("error");
$(":text,textarea").filter(".validate").each(function(){
//必須項目のチェック
$(this).filter(".required").each(function(){
if($(this).val() =="") {
$(this).parent().prepend("
<p class="error">必須項目です</p>
");
}
});
//ひらがなのチェック
$(this).filter(".kana").each(function(){
if($(this).val() &amp;&amp; !$(this).val().match(/^[ぁ-ん,ー]+$/)) {
$(this).parent().prepend("
<p class="error">ひらがなで入力してください</p>
");
}
});
//メール正規表現チェック
$(this).filter(".mail").each(function(){
if($(this).val() &amp;&amp; !$(this).val().match(/^[0-9,A-Z,a-z][0-9,a-z,A-Z,_,\.,-]+@[0-9,A-Z,a-z][0-9,a-z,A-Z,_,\.,-]+\.(af|al|dz|as|ad|ao|ai|aq|ag|ar|am|aw|ac|au|at|az|bh|bd|bb|by|bj|bm|bt|bo|ba|bw|br|io|bn|bg|bf|bi|kh|cm|ca|cv|cf|td|gg|je|cl|cn|cx|cc|co|km|cg|cd|ck|cr|ci|hr|cu|cy|cz|dk|dj|dm|do|tp|ec|eg|sv|gq|er|ee|et|fk|fo|fj|fi|fr|gf|pf|tf|fx|ga|gm|ge|de|gh|gi|gd|gp|gu|gt|gn|gw|gy|ht|hm|hn|hk|hu|is|in|id|ir|iq|ie|im|il|it|jm|jo|kz|ke|ki|kp|kr|kw|kg|la|lv|lb|ls|lr|ly|li|lt|lu|mo|mk|mg|mw|my|mv|ml|mt|mh|mq|mr|mu|yt|mx|fm|md|mc|mn|ms|ma|mz|mm|na|nr|np|nl|an|nc|nz|ni|ne|ng|nu|nf|mp|no|om|pk|pw|pa|pg|py|pe|ph|pn|pl|pt|pr|qa|re|ro|ru|rw|kn|lc|vc|ws|sm|st|sa|sn|sc|sl|sg|sk|si|sb|so|za|gs|es|lk|sh|pm|sd|sr|sj|sz|se|ch|sy|tw|tj|tz|th|bs|ky|tg|tk|to|tt|tn|tr|tm|tc|tv|ug|ua|ae|uk|us|um|uy|uz|vu|va|ve|vn|vg|vi|wf|eh|ye|yu|zm|zw|com|net|org|gov|edu|int|mil|biz|info|name|pro|jp)$/i)){
$(this).parent().prepend("
<p class="error">メールアドレスの形式が異なります</p>
");
}
});
});
 
//エラーがあった場合の処理
if($("p.error").size() &gt; 0) {
return false; //submit処理の中断
}