import { createApp } from 'vue'
import App from './App.vue'

//bootstrap from npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


//createAppในparam ก็ต้องตรงกับ import App ข้างบน
createApp(App).mount('#app')//เอาไปติดตั้งใน html ส่วนของ div ที่ชื่อว่า app
