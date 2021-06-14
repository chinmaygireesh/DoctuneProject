title:signup
auther:chinmay
date:14/6/2021


<template>
    <div class="vue-tempalte">
         <h3 style='background-color: lightgreen'><b>Sign Up</b></h3>
            
        <form @submit="addlocalstoarge">
           

            <div class="form-group">
                <label >Username Name</label>
                <input v-model="name" type="text" class="form-control form-control-lg"/>
            </div>
            <br>

            <div class="form-group">
                <label>Email address</label>
                <input v-model="email" type="email" class="form-control form-control-lg" />
            </div>
             <br>

            <div class="form-group">
                <label >Password</label>
                <input v-model="password" type="password" class="form-control form-control-lg" />
            </div>
            <br>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'',
                email:'',
                password:'',
                 info:{//object to temparorly store every loacal storage objects

                }
            }
        },
        methods:{
            addlocalstoarge(){
                if( this.name==''||this.email==''||this.password==''){
                    alert("you have to fill all the fields")
                    return
                }
               
            alert("conform signup")
               //creating opbect oerson to store user info into local storage
                const person ={
                name: this.name,
                email:this.email ,
                password:this.password,
               
                }
    
             
            
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
                    if(this.name==this.info.name){
                        alert("User name already Taken ");
                        flag = true;//dupicate entry
                        break;
                       
                    }
                    else if(this.email==this.info.email){
                       alert("given email id is already Taken ");
                       flag = true;//duplicate entry
                       break;
                    }
                       
                    }
                if(flag){
                       alert('try agian');//duplicate entry found
                     }
                else{//there is no duplicate entry so u could create account
                       window.localStorage.setItem(this.name, JSON.stringify(person));
                       alert('account created successfully')
                   }
             }
             }

            }
        
    
</script>