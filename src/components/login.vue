title:login
auther:chinmay
date:14/6/2021



<template>
    <div class="vue-tempalte">
        <h3 style='background-color: lightblue' ><b>Log in</b></h3>    
        <form @submit="login">
            <br>
            <div class="form-group">
                <label>Username</label>
                <input type="text" v-model="name" class="form-control form-control-lg" />
            </div>
            <br>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
            <br>

            <button   class="btn btn-dark btn-lg btn-block" >Sign In</button>
            
            <br>
            <br>
            <div class="social-icons" style='background-color: black'>
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name:'login',
        data() {
            return { 
                name:'',
                password:'',
                info:{

                }
                
            }
        },
        methods:{
            login(){
                //admin login
                if(this.name=='admin' && this.password=='admin'){
                    alert("u r admin")
                    this.$router.push({ name: "adminlogin"})//redirecting to admin page
                }
                else{
                var i = 0;
                var KeyName = ''
                var flag = false
                
               //itrating through loacal storage
                for (i = 0; i < localStorage.length; i++){
                  KeyName = window.localStorage.key(i);//fing key of object according to the given index
                  //avoiding error values fetched from loacal storage
                  if(window.localStorage.getItem(KeyName)==null||window.localStorage.getItem(KeyName)=='SILENT'){
                    continue
                }
                   this.info = JSON.parse(window.localStorage.getItem(KeyName));//loading local storage object accordig to key                   
                   //checking user name and password
                   if(this.name==this.info.name && this.password==this.info.password){
                         flag = true;
                         break;
                   }   
                   }
                if(flag){
                       alert("logined success full ");
                       this.$router.push({ name:'userpage',params: {id: this.name }})

                       }
                else{
                       alert("inavalid user name or password");
                   }




                }
                

            }

        }
        
        
     }
            


</script>   