<template>
  <h1>Contact Me</h1>
  <img src="https://th.bing.com/th/id/R.f29f07e0815eda9c89d2b349190e8b58?rik=yKrwM5%2bNeGYF3A&riu=http%3a%2f%2fwallpapercave.com
  %2fwp%2fwp1812706.jpg&ehk=2O4yJf9wnmMflMpwVuR%2fl%2bK%2bQyBLK1qX3LB2lU15UQg%3d&risl=&pid=ImgRaw&r=0"
  alt="contactbymax" style="width: 100%;height:400px">
  <div>
    <ul class="contact">
      <li>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png"
        width="20px" height="20px">
        <a href="https://www.linkedin.com/in/putrisyakirawirdiani/"> Linkedin</a>
      </li>
      <li>
        <img src="https://logopng.com.br/logos/instagram-40.png"
             width="20px" height="20px">
        <a href="https://www.instagram.com/psyakira_w/"> Instagram </a>
      </li>
      <li>
        <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone.png"
             width="20px" height="20px">
        <a href="http://wa.me/089678878557"> Whatsapp </a>
      </li>
      <li>
        <img src="https://www.rightclickcomputersolutions.com/wp-content/uploads/2018/05/Gmail_logo.max-2800x2800.png"
             width="20px" height="20px">
        <a href="mailto:psyakira.w@gmail.com"> Email </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyContact"
}
</script>

<style scoped>
.contact{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  list-style: none;
}
h1{
  font-family: "Comic Sans MS";
  color: red;
}

a{
  color: black;
  text-decoration: none;
}
</style>