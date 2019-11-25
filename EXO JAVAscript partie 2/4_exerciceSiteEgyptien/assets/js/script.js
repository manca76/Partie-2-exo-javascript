window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY; 
    console.log(scrollValue);
    if (scrollValue >= 500)
    {
      document.getElementById('blocsStyle').style.opacity=1;
      document.getElementById('blocsStyle').style.transition = 'opacity 2s';

    }
     else { 
       document.getElementById('blocsStyle').style.opacity=0;
     }
}
)