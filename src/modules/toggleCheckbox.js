export default function toggleCheckbox() {
  const checkbox = document.querySelectorAll('.filter-check_checkbox');

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function () {
      if (this.checked === true) {
        this.nextElementSibling.classList.add('checked');
      } else {
        this.nextElementSibling.classList.remove('checked');
      }
    });
  }
}