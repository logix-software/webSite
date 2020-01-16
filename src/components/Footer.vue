<template>
<div>
     <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 ">
            <div class="pr-lg-5">

           
          <h3 class="mb-4">Passa da noi</h3>
          <h5>Terni</h5>
          <p>Piazza Europa, 5 - 05100 Terni(TR)</p>
          <h5>Roma</h5>
          <p>
            Via Marcello Galliani, 62/64 - 00133
            Roma(RM)
          </p>
           </div>
        </div>
        <div class="col-lg-3">
          <h3 class="mb-4 d-none d-lg-block">&nbsp;</h3>
          <h5>Scrivici</h5>
          <p>info@logixcorp.com</p>
          <h5>Seguici </h5>
          <ul class="list-unstyled d-flex">
              <li>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="mr-3"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
              </li>
          </ul>
        </div>
         <div class="col-lg-4">
          <h3 class="mb-4 d-none d-lg-block">&nbsp;</h3>
          <h5 class="d-none d-lg-block">&nbsp;</h5>
          <p>Privacy & Cookie Policy</p>
          <p>Condizioni Generali di Contarato</p>
        </div>
      </div>
    </div>

  </footer>
  <div class="subfooter d-flex align-items-center">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 d-lg-flex align-items-center justify-content-between"> <p class="mb-3 mb-lg-0">© Copyright 2019 - Logix  Srl </p>
      <p> | P.iva: 01388050559 | Capitale Sociale 10.000(interamente versato) </p></div>
          </div>
      </div>
     
  </div>
</div>
 
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.subfooter{
    background-color: #000000;
    color: #fff;
    height: 82px;
    @media screen and (max-width: 992px) {
        height: 120px;
    }
    p{
font-size: 16px;
margin-bottom: 0;
    }
}
.footer{
    background-color: #1D1D1D;
    color: #fff;
    a{
        color: #fff;
    }
    p{
font-size: 16px;
    }
    
}
</style>