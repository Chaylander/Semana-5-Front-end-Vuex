<template>
<table class="default">

    <tr>
        <th >Adorno</th>
        <th>Precio</th>
    </tr>

    <tr>
        <td>Mensaje Escrito</td>
        <td>50$</td>
    </tr>

    <tr>
        <td>Bombones </td>
        <td>15$</td>
    </tr>

    <tr>
        <td>Panditas</td>
        <td>20$</td>
    </tr>

    <tr>
        <td>Chispas</td>
        <td>20$</td>
    </tr>

</table>
</template>

<script>
export default {
  name: "adornos",
};
</script>

<style scoped>
.default {
  width: 30%;
  height: 100px;
  margin-top: 10px;
  margin-left: 35%;
  background-color: rgb(244, 241, 255);
  border-radius: 30px;
  border: 3px solid rgb(222, 222, 228);
}
</style>
