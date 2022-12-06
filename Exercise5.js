var push=document.getElementById('push1'),
caja=document.getElementById('caja1')
contador=0;

function On()
{
if(contador==0){
caja.classList.add('azul')
contador=1;
}
else{caja.classList.remove('azul')
contador=0;}
}

push.addEventListener('click',On,true)
