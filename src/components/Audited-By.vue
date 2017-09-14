<template lang="html">
  <div class="audited" itemscope itemtype="http://schema.org/logo">
    <h2>Audited by</h2>
    <a href="https://tokenmarket.net/blog/matryx-token-and-token-sale-smart-contract-audit/" target="_blank" itemprop="url">
      <img src="../assets/icons/icon-tokenmarket-horizontal.png" itemprop="image">
    </a>
  </div>
</template>

<script>
export default {
  name: 'AuditedBy'
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.audited {
  padding-bottom: 130px;
  color: $matryx-dark-grey;
  text-align: center;
  max-width: 400px;
  padding: 20px 40px;
  margin: 50px auto;

  img {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
