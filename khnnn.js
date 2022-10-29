<script>
    const circ = document.querySelectorAll('.btn');
    const txt = document.querySelectorAll('.text');
    const bg = document.querySelectorAll('.bg');
    let i = 0;
    circ[0].addEventListener('click',()=>{
        circ[1].classList.toggle("inc");
        circ[0].classList.add("inc");
        bg[i].classList.add('inc');
        i++;
        if(i=>1){
            txt[i-1].classList.add('hide');
            txt[i].classList.remove('hide');
            if(i==3){
                circ[0].addEventListener('click',()=>{
                    txt[0].classList.remove('hide');
                    setTimeout(function(){
                        window.location.reload();
                    },1000);
                })
            }
        }
        else{
            txt[0].classList.add('hide');
            txt[i].classList.remove('hide');
        }
    })
</script>
