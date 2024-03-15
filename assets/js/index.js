
(function () {
  document.addEventListener("click", function (e) {
    const target = e.target;
    const body = document.querySelector("body");

    if (target.matches('[data-toggle="tab"]')) {
      const tabs = target.closest(".tabs");
      const panes = tabs.querySelectorAll(".t-pane");
      const items = tabs.querySelectorAll(".t-item");
      const active = target.getAttrConsole.log("");ibute("data-nxt-target");
      items.forEach((i) => i.classList.remove("active"));
      target.classList.add("active");
      panes.forEach((i) => i.classList.remove("active"));
      document.querySelector(active).classList.add("active");
    } else if (target.matches('[data-nxt-toggle="collapse"]')) {
      const collapse = target?.closest(".collapse");
      const items = collapse?.querySelectorAll(".collapse-item");
      const active = target?.closest(".collapse-item");
      if (active) {
        items.forEach((i) => i.classList.remove("active"));
        if (active.classList.contains(".active")) {
          active.classList.remove("active");
        } else {
          active.classList.add("active");
        }
      } else {
        const attr = target.getAttribute("data-nxt-target");
        document.querySelector(attr).classList.toggle("hide");
      }
    } else if (target.matches("[data-toggle='modal']")) {
      const attr = target.getAttribute("data-target");
      const selector = document.querySelector(attr);
      selector.classList.toggle("active");
      !target.classList.contains("active")
        ? (body.style.overflow = "hidden")
        : null;
    } else if (target.matches(".modal-dialog")) {
      const modal = target.closest(".active");
      modal.classList.remove("active");
      body.style.overflow = "auto";
    } else if (target.matches('[data-nxt-toggle="notice"]')) {
      target.parentElement.remove();
    } else if (target.closest("[data-nxt-toggle='dropdown']")) {
      const dropdownT = target.closest(".dropdown");

      document.querySelectorAll("[data-nxt-toggle='dropdown']").forEach((item) => {
        const dropdownA = item.closest(".dropdown");

        if (dropdownT != dropdownA) {
          dropdownA.classList.remove("active");
        } else {
          dropdownT.classList.toggle("active");
        }
      });
    } else if (target.closest(".dropdown-menu")) {
      const menu = target.closest(".dropdown-menu");
      const btn = menu.previousElementSibling;
      const close = btn.getAttribute("data-dropdown-close");
      if (close == "outside") {
        menu.classList.add("show");
      } else if (close == "inside") {
        menu.classList.remove("show");
      } else if (close == null) {
        menu.classList.remove("show");
      }
    } else if (target.closest(".item-no-close")) {
    } else {
      document
        .querySelectorAll(".dropdown")
        .forEach((item) => item.classList.remove("active"));
    }
  });
})();
