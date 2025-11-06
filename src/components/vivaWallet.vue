<template>
  <div>
    <button @click="pay">Pay with VivaWallet</button>
  </div>
</template>

<script setup lang="ts">
import { VivaWallet_MakePay } from '@/utils/vivaWallet'

function pay() {
  // Example usage: id_doc = 12345, amount = 10 euros
  VivaWallet_MakePay(12345, 10).catch(err => alert(err))
}
</script>
