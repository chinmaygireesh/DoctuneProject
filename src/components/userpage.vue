title:User login
auther:chinmay
date:14/6/2021

<template>

    <div style="background-color: white;
        margin: auto;
        width: 60%;
        border: 5px white;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
        <div>
<hr>
<h1>Profile of  <b>{{$route.params.id}}</b></h1>
<hr>
    </div>
    <div>
        <h3>WELCOME TO YOUR PROFILE</h3>
    </div>
 <div>
     <button class="btn btn-dark btn-lg btn-block" @click="logout">LOG OUT </button>
 </div>
    </div>

</template>

<script>
    export default {
        methods:{
            logout(){
                alert("Your going to log out")
                this.$router.push({ name: "login"})
            },
        }
        
    }
</script>

<style>
 .centere {
        background-color: violet;
        margin: auto;
        width: 60%;
        border: 5px white;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
</style>