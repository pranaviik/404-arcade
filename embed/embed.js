(function(){
    const scriptTag = document.currentScript;
    const game = scriptTag.getAttribute('data-game') || 't-rex';
  
    const iframe = document.createElement('iframe');
    iframe.src = `https://wayou.github.io/t-rex-runner/`;
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
  })();
  