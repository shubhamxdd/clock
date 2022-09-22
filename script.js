function time() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
  
    document.getElementsByClassName('hr')[0].innerHTML = hrs;
    document.getElementsByClassName('mn')[0].innerHTML = min;
    document.getElementsByClassName('se')[0].innerHTML = sec;
  }
  
  setInterval(time, 1000)
  
  