// ========================================
// MENU LATERAL
// ========================================

const drawer = document.querySelector(".drawer");
const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".drawer-close");


// Abrir menu
menuButton.addEventListener("click", () => {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});


// Fechar menu
closeButton.addEventListener("click", () => {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});


// Fechar menu ao clicar em um link
document.querySelectorAll(".drawer a").forEach((link) => {

  link.addEventListener("click", () => {

    drawer.classList.remove("open");

    drawer.setAttribute("aria-hidden", "true");

  });

});


// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const topButton = document.getElementById("top");


// Mostrar botão depois de rolar
window.addEventListener("scroll", () => {

  if (window.scrollY > 650) {

    topButton.classList.add("show");

  } else {

    topButton.classList.remove("show");

  }

});


// Voltar para o topo
topButton.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ========================================
// SISTEMA DE NOTIFICAÇÃO
// ========================================

const toast = document.getElementById("toast");


// Função para mostrar mensagem
function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 2600);

}


// ========================================
// BOTÕES DE PRODUTO
// ========================================

const productButtons = document.querySelectorAll(".buy");


productButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const productName = button.dataset.product;

    showToast(
      productName + " adicionado à seleção."
    );

  });

});


// ========================================
// BOTÕES DOS PLANOS
// ========================================

const planButtons = document.querySelectorAll(".choose");


planButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const planName = button.dataset.plan;

    showToast(
      "Plano " + planName + " selecionado."
    );

  });

});


// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

  // Impede o recarregamento da página
  event.preventDefault();


  // Mostra mensagem
  showToast(
    "Mensagem enviada com sucesso!"
  );


  // Limpa os campos
  contactForm.reset();

});


// ========================================
// ANIMAÇÃO SUAVE AO ENTRAR NAS SEÇÕES
// ========================================

const animatedElements = document.querySelectorAll(
  ".product-card, .plan, .principles article, .service-list article"
);


const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


animatedElements.forEach((element) => {

  observer.observe(element);

});


// ========================================
// FECHAR MENU COM ESC
// ========================================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    drawer.classList.remove("open");

    drawer.setAttribute("aria-hidden", "true");

  }

});