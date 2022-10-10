<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cart">Panier</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
 ul {
   display: flex;
   list-style-type: none;
   justify-content: center;
 }
 li {
   margin: 0 15px;
 }

 a {
   color: black;
   &.router-link-exact-active {
     color: #42b983;
   }
 }
</style>
