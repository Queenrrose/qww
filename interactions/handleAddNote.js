const _0x41b314=_0x2718;(function(_0x51e752,_0x3e83ba){const _0x20a2fc=_0x2718,_0x35d80d=_0x51e752();while(!![]){try{const _0x229361=-parseInt(_0x20a2fc(0x15e))/0x1+-parseInt(_0x20a2fc(0x157))/0x2*(-parseInt(_0x20a2fc(0x158))/0x3)+-parseInt(_0x20a2fc(0x170))/0x4*(-parseInt(_0x20a2fc(0x169))/0x5)+-parseInt(_0x20a2fc(0x156))/0x6+parseInt(_0x20a2fc(0x167))/0x7*(parseInt(_0x20a2fc(0x16e))/0x8)+parseInt(_0x20a2fc(0x15c))/0x9*(parseInt(_0x20a2fc(0x166))/0xa)+parseInt(_0x20a2fc(0x173))/0xb*(-parseInt(_0x20a2fc(0x159))/0xc);if(_0x229361===_0x3e83ba)break;else _0x35d80d['push'](_0x35d80d['shift']());}catch(_0x4ddd03){_0x35d80d['push'](_0x35d80d['shift']());}}}(_0x2f60,0xd041c));function _0x2718(_0x4afb49,_0x35ee81){const _0x2f6039=_0x2f60();return _0x2718=function(_0x2718d7,_0x5997ec){_0x2718d7=_0x2718d7-0x155;let _0x34087e=_0x2f6039[_0x2718d7];return _0x34087e;},_0x2718(_0x4afb49,_0x35ee81);}const {MessageEmbed}=require(_0x41b314(0x160));async function handleAddNote(_0x2baba9,_0x32e0ec){const _0x1511d0=_0x41b314;if(!_0x32e0ec(_0x2baba9[_0x1511d0(0x15b)])){await _0x2baba9[_0x1511d0(0x164)]({'content':_0x1511d0(0x168),'ephemeral':!![]});return;}await _0x2baba9['deferUpdate']();try{const _0x158f9a=_0x3678f6=>_0x3678f6[_0x1511d0(0x162)]['id']===_0x2baba9[_0x1511d0(0x16f)]['id'],_0x4c2cec=await _0x2baba9['followUp']({'content':_0x1511d0(0x161),'ephemeral':!![]}),_0x5ca6ba=await _0x2baba9[_0x1511d0(0x15a)]['awaitMessages']({'filter':_0x158f9a,'max':0x1,'time':0x3a98,'errors':[_0x1511d0(0x16a)]}),_0x51227b=_0x5ca6ba[_0x1511d0(0x155)]()[_0x1511d0(0x163)]['trim']();let _0x5905e0=_0x2baba9[_0x1511d0(0x16c)][_0x1511d0(0x172)][0x0];!_0x5905e0&&(_0x5905e0=new MessageEmbed()),_0x5905e0[_0x1511d0(0x15d)](_0x1511d0(0x16b)+_0x2baba9[_0x1511d0(0x16f)][_0x1511d0(0x16d)]+')','```'+_0x51227b+_0x1511d0(0x171)),await _0x2baba9[_0x1511d0(0x15f)]({'embeds':[_0x5905e0],'ephemeral':!![]}),await _0x5ca6ba['first']()[_0x1511d0(0x165)](),await _0x4c2cec[_0x1511d0(0x165)]();}catch(_0x326fbc){await _0x2baba9[_0x1511d0(0x164)]({'content':'Adding\x20note\x20failed.\x20Please\x20try\x20again.','ephemeral':!![]});}}function _0x2f60(){const _0x5306d2=['```','embeds','859243erYxYa','exports','first','4713084aZJMbg','24CNkUNM','350835RqVFHY','84KXgqou','channel','member','6849RcaJwM','addField','620436WsPorU','editReply','discord.js','يرجى\x20كتابة\x20ملاحظتك','author','content','reply','delete','5460VMvTyH','70NhEoRB','ليس\x20لديك\x20السلطة\x20للقيام\x20بهذا\x20الإجراء','3168225TKkrSS','time','ملاحظة\x20(بواسطة\x20','message','username','282616RiIkxA','user','4ndmpxu'];_0x2f60=function(){return _0x5306d2;};return _0x2f60();}module[_0x41b314(0x174)]={'handleAddNote':handleAddNote};