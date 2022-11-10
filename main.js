  /**
   * Mobile nav toggle
   */
  //  on('click', '.mobile-nav-toggle', function(e) {
  //   select('body').classList.toggle('mobile-nav-active')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })


    /**
   * Animation on scroll
   */
     window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });

     /**
   * Initiate Pure Counter 
   */
  new PureCounter();
