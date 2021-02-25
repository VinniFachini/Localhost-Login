const vm = new Vue({
  el: "#app",
  data: {
    username: "",
    password: "",
  },
  methods: {
    authControl() {
      if (this.username && this.password) {
        if (this.username === "admin" && this.password === "admin") {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
          });
          Toast.fire({
            icon: "success",
            title: "Login realizado com sucesso!",
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
          });
          Toast.fire({
            icon: "error",
            title: "Usuário e/ou Senha Incorretos!",
          });
        }
        this.username = "";
        this.password = "";
      }
    },
    criarConta() {
      const formWrapper = document.querySelector(".form-wrapper-login");
      const formWrapperRegister = document.querySelector(
        ".form-wrapper-register"
      );
      formWrapper.style.animationName = "loginTwist";
      setTimeout(() => {
        this.twistForm();
      }, 150);
    },
    twistForm() {
      const formWrapper = document.querySelector(".form-wrapper-login");
      const formWrapperRegister = document.querySelector(
        ".form-wrapper-register"
      );
      formWrapperRegister.style.animationDirection = "normal";
      formWrapper.style.animationDirection = "normal";

      formWrapperRegister.style.animationName = "registerTwist";
      setTimeout(() => {
        formWrapper.style.display = "none";
        formWrapperRegister.style.display = "block";
      }, 150);
    },
    logar() {
      const formWrapper = document.querySelector(".form-wrapper-login");
      const formWrapperRegister = document.querySelector(
        ".form-wrapper-register"
      );
      formWrapperRegister.style.animationDirection = "reverse";
      formWrapper.style.animationDirection = "reverse";
      setTimeout(() => {
        formWrapper.style.display = "block";       
        formWrapperRegister.style.display = "none";
      }, 200);
    },
  },
});
