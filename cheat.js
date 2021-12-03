// Sporacle Cheat Code Written By Elijah
function cheat()
{
	checksSlot = (slotNum) =>
	{
		if (slotNum >= answers.length) {
			thisSlot = hidden[slotNum-answers.length];
		} else {
			thisSlot = answers[slotNum];
		}

		slotinfo = thisSlot;
		var e='';
		for(var i=0;i < slotinfo.length;i++){var c=slotinfo.slice(i,i+1);var d=false;for(var k in asta)if(asta[k]==c){	e+=k;d=true;}if(!d)	e+=c;}
		return e;
	}
	for (var i = 0; i < answers.length + hidden.length; i++){console.log(checksSlot(i))}
}
cheat();
