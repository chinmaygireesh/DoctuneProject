title:Admin login
auther:chinmay
date:14/6/2021




<template>
    <div style="background-color: white;
        margin: auto;
        width: 60%;
        border: 5px white;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
        <h1>WELCOME ADMIN</h1>
        <hr/> 
        <button class="btn btn-dark btn-lg btn-block" v-show="isshow" @click="useritration" >show registered users</button>
        <div >
        
            <div v-for="(post, index) in list" :key="post.name">
    
                <b>USER {{index}}</b><br><b>   Name:</b>{{ post.name }} <br><b>Email</b>: {{ post.email }}
     
                <hr />
            </div>
        </div>
    
        <br>    
        <button class="btn btn-dark btn-lg btn-block" @click="logout">LOG OUT</button>
    </div>  
      
</template>

<script>
    export default {
        name:'adminlogin',
          data() {
            return { 
                list:[
                    
                    ],
                isshow:'true',
               
                
            }
        },
        methods:{
            //logdout function
            logout(){
                alert("Your going to log out")
                this.$router.push({ name: "login"})//redirecting to login page
            },

            useritration(){
                this.isshow=false//disabling the "show users" button
                 var i = 0;
                var KeyName = ''
               //itrating through loacal storage
                for (i = 0; i < localStorage.length; i++){
                    KeyName = window.localStorage.key(i);//fing key of object according to the given index
                    //Avoidin error values fetched from local storage
                    if(window.localStorage.getItem(KeyName)==null||window.localStorage.getItem(KeyName)=='SILENT'){
                    continue
                }
                else{
                    var info = JSON.parse(window.localStorage.getItem(KeyName));
                    console.log(info)
                    this.list.push(info)//pushin objects into list

                }
                }
               
            }

        }
    }
</script>

<style scoped>

</style>