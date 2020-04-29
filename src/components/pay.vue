<template>
<div id="pay">

        <div class="top">
    <table width="96%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Pay</h6></td>
        </tr>
    </table>

</div>

<div>
Coupon code
</div>


<div class="summary">
<div class="osm">
    ORDER SUMMARY
    </div> 
<table width="100%">
    <tr>
    
    <td class="left">{{orderId}}</td>
    <td></td>
</tr>
<tr>
    <td class="left">Status</td>
    <td>{{response.status}}</td>
</tr>


<tr>
    <td class="left">Sub Total</td>
    <td>₦{{Number(parseInt(response.subTotal)).toLocaleString()}} </td>
</tr>
<tr>
    <td class="left">Delivery Fee</td>
    <td>₦{{Number(parseInt(response.fee)).toLocaleString()}} </td>
</tr>

<tr>
    <td class="left"></td>
    <td>{{response.address}}</td>
</tr>

<tr>
    <td class="left">Payment Method</td>
    <td>{{response.paymentMethod}}</td>
</tr>
<tr>
    <td class="left">Total</td>
    <td>₦{{Number(parseInt(response.fee) + parseInt(response.subTotal)).toLocaleString()}}     </td>
</tr>



</table>
</div>
  <button @click="payWithRave" class="paybutton"> PAY </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'pay',
  data(){
    return{
      orderId: this.$route.params.orderId,
        
      response: JSON.parse(this.$route.query.response)

    }
  },
  computed: {
      user(){
            return this.$store.state.user[0];
        },
  },
    props: {
        styleClass: {
            type: String,
            default: 'payButton'
        },
       
        
        // close: {
        //     type: Function,
        //     required: true,
        //     default: () => {}
        // },
        paymentOptions: {
            type: String,
            default: 'card'
        },
    },
    created() {
        const script = document.createElement('script')
        script.src = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js'
        document.getElementsByTagName('head')[0].appendChild(script)
    },
    methods: {
        payWithRave() {
            window.getpaidSetup({
                customer_email: this.user.email,
                amount: parseInt(this.response.fee) + parseInt(this.response.subTotal),
                txref: this.orderId,
                PBFPubKey: "FLWPUBK_TEST-c15794513bd42f436e0fd3f6e3f3fd64-X",
                onclose: () => this.close(),
                currency: 'NGN',
                country: 'NG',
                customer_firstname: this.user.firstName,
                customer_lastname: this.user.lastName,
                custom_title: this.orderId,
                payment_options: this.paymentOptions,
                

            })
        }
    }
}
</script>
<style>
#pay {
    margin-bottom: 70px;
        
}
    .payButton{
    outline: none;
    width: 90%;
    height: 50px;
    background-color: #e85c3a;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    }
.summary{
    font-size: 25px;
}
.summary table{
    font-size: 15px;
    text-align: left;
    margin-top: 30px;
    background-color: aliceblue;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 96%;
    margin-left: 2%;
}

.summary td{
    padding-left: 10px;
}
.top{
    height: 45px;
    padding-top: 12px;
    background-color: #e85c3a;
    color: azure;
}
.top img{
    height: 30px;
}
.oms{
    font-size: 23px;
    font-weight: 600;
}
.left{
    font-weight: 700;
    height: 40px;
    width: 37%;
}
.paybutton{
    margin-top: 30px;
    outline: none;
    width: 90%;
    height: 50px;
    background-color: #e85c3a;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    margin-top: 30px;
}
</style>