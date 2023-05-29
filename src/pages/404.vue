<template>
    <div class="error-container">
      <div class="error-content">
        <h1>Oops!</h1>
        <h2>Errore 404 - Pagina non trovata</h2>
        <p>La pagina che stai cercando potrebbe essere stata rimossa, rinominata o non essere al momento disponibile.</p>
        <router-link class="router-link" to="/">Torna alla pagina principale</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      
  }
</script>

  <style>
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .error-content {
    text-align: center;
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 58px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 34px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 21px;
    margin-bottom: 40px;
  }
  
  .router-link {
    color: #fff;
    background-color: #429cfc;
    padding: 12px 24px;
    border-radius: 999px;
    text-decoration: none;
    font-size: 18px;
    
}
  </style>
  



