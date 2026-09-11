
(function(){
  var root=document.documentElement;
  function themed(t){root.dataset.theme=t;}
  try{var s=localStorage.getItem('sdg-theme'); if(s) themed(s);}catch(e){}
  function toggle(){
    var cur=root.dataset.theme;
    if(!cur) cur=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
    cur=cur==='dark'?'light':'dark';
    themed(cur);
    try{localStorage.setItem('sdg-theme',cur);}catch(e){}
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function(b){
    b.addEventListener('click',toggle);
  });
})();
