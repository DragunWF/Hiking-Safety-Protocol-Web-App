$(document).ready(() => {
  const containers = [
    $("#first"),
    $("#second"),
    $("#third"),
    $("#fourth"),
    $("#fifth"),
    $("#sixth"),
  ];

  function slideDownContainers(index) {
    containers[index].slideDown(1000, () => {
      if (index + 1 === containers.length) return;
      slideDownContainers(index + 1);
    });
  }

  function onStartUp() {
    for (let container of containers) container.hide();
    setTimeout(() => {
      slideDownContainers(0);
    }, 1500);
  }

  onStartUp();
});
