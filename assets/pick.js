
(function(){
  var idx=[],cur=null;
  var viewer=document.getElementById('viewer'),
      tEl=document.getElementById('picktitle'),
      mEl=document.getElementById('pickmeta'),
      oEl=document.getElementById('btnopen'),
      q=document.getElementById('q'),
      grid=document.getElementById('grid');
  function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));
    var t=a[i];a[i]=a[j];a[j]=t;}return a;}

  function show(item){
    if(!item) return;
    cur=item;
    tEl.textContent=item.t;
    mEl.textContent=' / '+(item.g||'')+' / '+item.n.toLocaleString()+' chars';
    oEl.href='a/'+item.s+'.html';
    viewer.innerHTML='<p class="lead">载入中 Loading…</p>';
    fetch('a/'+item.s+'.html',{cache:'force-cache'})
      .then(function(r){ if(!r.ok) throw new Error(r.status); return r.text(); })
      .then(function(txt){
        var d=new DOMParser().parseFromString(txt,'text/html');
        var doc=d.getElementById('doc');
        if(!doc) throw new Error('no doc');
        viewer.innerHTML=doc.innerHTML;
      })
      .catch(function(e){
        viewer.innerHTML='<p class="lead">正文载入失败（可能是本地文件方式打开）。'
          +'请用 <a href="a/'+item.s+'.html">独立页</a> 阅读。</p>';
      });
    try{ history.replaceState(null,'','?a='+item.s); }catch(e){}
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function next(){
    if(idx.length===0) return;
    var pool=idx.filter(function(x){return !cur || x.s!==cur.s;});
    show(pool[Math.floor(Math.random()*pool.length)]);
  }
  document.getElementById('btnnext').addEventListener('click',next);

  if(q&&grid){
    q.addEventListener('input',function(){
      var v=q.value.trim().toLowerCase();
      var n=0;
      grid.querySelectorAll('.it').forEach(function(el){
        var hit=!v||el.dataset.s.indexOf(v)>=0;
        el.style.display=hit?'':'none'; if(hit)n++;
      });
    });
  }

  fetch('data/index.json').then(function(r){return r.json();}).then(function(list){
    idx=shuffle(list.slice());
    var want=new URLSearchParams(location.search).get('a');
    var hit=want?list.filter(function(x){return x.s===want;})[0]:null;
    show(hit||idx[0]);
  }).catch(function(){
    viewer.innerHTML='<p class="lead">清单载入失败，'
      +'请从下方“全部条目”进入。</p>';
  });
})();
