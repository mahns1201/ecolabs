<template>
  <div>test: {{ this.parsing(data1) }}</div>
  <div>test: {{ this.parsing(data2) }}</div>
  <div>test: {{ this.parsing(data3) }}</div>
  <div>test: {{ this.parsing(data4) }}</div>
</template>
<script>
export default {
  data() {
    return {
      data1: "123",
      data2: "12.34",
      data3: "12345.6789",
      data4: "1234.",

      parsed_data: "",
    };
  },

  created() {
    console.log(this.parsing("123"));
    console.log(this.parsing("12.34"));
    console.log(this.parsing("12345.6789"));
    console.log(this.parsing("1234."));
    console.log(this.parsing("0.012311"));
    console.log(this.parsing("0.000000311"));
    console.log(this.parsing("0.311"));
  },

  methods: {
    parsing: function(data) {
      const type = data.substring(7);
      let result;

      if (type === "") {
        if (data[6] === ".") {
          result = data.substring(0, 6);
        } else {
          result = data.substring(0, 7);
        }
      } else {
        result = data.substring(0, 7) + "・・・";
      }

      return result;
    },
  },
};
</script>
<style></style>
