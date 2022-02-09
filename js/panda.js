// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
      const h1 = document.getElementsByTagName('h1');
      for (let i = 0; i < h1.length; i++){
       h1[i].style.color = '#ff4b92';
      }

      //  ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।  
      const backpack = document.getElementById('backpack');
      backpack.style.backgroundColor = '#ff4b92';
       

        //৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

        const card = document.getElementsByClassName('card');
        for(let i = 0; i < card.length; i++) {
          card[i].style.borderRadius ="30px";
        }

         //৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
     const pinkButton = document.getElementById('pink-button');
     pinkButton.addEventListener('click',function(){
       console.log('I am click from pink button');
     })


      //৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

      const removeBtn = document.querySelectorAll('.card button');
      for(let i = 0; i <removeBtn.length; i++){
        removeBtn[i].addEventListener('click',function(){
        removeBtn[i].style.display = 'none';
      })
      }

      //৭.একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

      const emailHandle = document.getElementById('email');
      emailHandle.addEventListener('keyup',function(event){
          
      const submitBtn = document.getElementById('submit');
       
        if(event.target.value == 'tareq'){
          submitBtn.removeAttribute('disabled');
          submitBtn.addEventListener('click',function(){
            console.log('click with write');
          })
               }
               else{
                submitBtn.setAttribute('disabled', true);
               }
      })
  //৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
  const mouseTarget = document.querySelectorAll('.card img');
  for(let i = 0;i<mouseTarget.length;i++){
    mouseTarget[i].addEventListener('mouseenter', function() {
      mouseTarget[i].src='./images/shoes/shoe-3.png';
    })
  }
 //৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
 const subscribe = document.getElementById('subscribe');
 subscribe.addEventListener('dblclick', function(){
  subscribe.style.backgroundColor ='#89f7fe';
 })